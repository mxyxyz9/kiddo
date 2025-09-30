import { useState, useRef, useCallback, useEffect } from 'react';
import type { ConnectionStatus, Driver, SeasonYear } from '../types';
import { createDriverInfoMap, updateDriverData } from '../utils/dataTransformer';

const F1_API_BASE_URL = 'https://livetiming.formula1.com/signalr';

// Exported for the component to check against
export const CORS_ERROR_MESSAGE = 'Connection failed due to browser security policy (CORS). Switched to live simulation mode.';

export function useF1Socket(year: SeasonYear) {
  const [status, setStatus] = useState<ConnectionStatus>('disconnected');
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [streamActivity, setStreamActivity] = useState({ timing: 0, carData: 0 });
  
  const socketRef = useRef<WebSocket | null>(null);
  const driversRef = useRef<Driver[]>([]);
  const driverInfoMap = useRef(createDriverInfoMap(year));

  useEffect(() => {
    driverInfoMap.current = createDriverInfoMap(year);
    driversRef.current = [];
    setDrivers([]);
  }, [year]);


  const disconnect = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.onclose = null; 
      socketRef.current.close();
      socketRef.current = null;
    }
    setStatus('disconnected');
    setDrivers([]);
    driversRef.current = [];
    setError(null);
    setStreamActivity({ timing: 0, carData: 0 });
  }, []);

  const connect = useCallback(async () => {
    if (socketRef.current && socketRef.current.readyState < 2) {
      return;
    }
    disconnect(); // Ensure clean state before connecting
    setStatus('connecting');

    try {
      const negotiateResponse = await fetch(`${F1_API_BASE_URL}/negotiate?clientProtocol=1.5&connectionData=%5B%7B%22name%22%3A%22Streaming%22%7D%5D`, {
          method: 'POST',
      });

      if (!negotiateResponse.ok) {
        throw new Error(`Negotiation failed: Server responded with status ${negotiateResponse.status}`);
      }
      
      const negotiation = await negotiateResponse.json();
      const token = encodeURIComponent(negotiation.ConnectionToken);

      const wsUrl = `wss://livetiming.formula1.com/signalr/connect?clientProtocol=1.5&transport=webSockets&connectionToken=${token}&connectionData=%5B%7B%22name%22%3A%22Streaming%22%7D%5D`;
      const socket = new WebSocket(wsUrl);
      socketRef.current = socket;

      socket.onopen = () => {
        const streams = ["TimingData", "CarData.z"];
        socket.send(JSON.stringify({
          H: 'Streaming',
          M: 'Subscribe',
          A: [streams],
          I: 1,
        }));
        setStatus('live');
      };

      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (Object.keys(message).length === 0 || !message.M) return;
        
        for (const item of message.M) {
          if (!item.A || item.A.length < 2) continue;
          
          const streamName = item.A[0];
          const streamData = item.A[1];
          
          if (streamName === 'TimingData' || streamName === 'CarData.z') {
              driversRef.current = updateDriverData(driversRef.current, streamData, streamName, driverInfoMap.current);
              setDrivers([...driversRef.current]); // Create new array to trigger re-render
              setStreamActivity(prev => ({...prev, [streamName === 'TimingData' ? 'timing' : 'carData']: Date.now()}));
          }
        }
      };

      socket.onerror = (event) => {
        console.error('WebSocket Error:', event);
        setError('A WebSocket error occurred. See console for details.');
        setStatus('error');
      };

      socket.onclose = () => {
        if (status !== 'error') {
            setStatus('disconnected');
        }
      };

    } catch (err) {
      console.error('Failed to connect to F1 Live Timing:', err);
      let errorMessage = 'An unknown error occurred while connecting.';
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        errorMessage = CORS_ERROR_MESSAGE;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      setError(errorMessage);
      setStatus('error');
    }
  }, [year, disconnect, status]);

  useEffect(() => {
    return () => disconnect();
  }, [disconnect]);


  return { status, drivers, error, streamActivity, connect, disconnect };
}