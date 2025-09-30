import React, { useState, useEffect, useMemo } from 'react';
import type { Driver, SeasonYear } from '../types';
import { getMockRaceData } from '../data/mockData';
import DriverRow from './DriverRow';
import { useInterval } from '../hooks/useInterval';
import { useF1Socket } from '../hooks/useF1Socket';
import { CORS_ERROR_MESSAGE } from '../hooks/useF1Socket';

type DataSource = 'mock' | 'live';

interface RaceTrackerProps {
  year: SeasonYear;
}

const RaceTracker: React.FC<RaceTrackerProps> = ({ year }) => {
  const [dataSource, setDataSource] = useState<DataSource>('mock');
  const [isSimulating, setIsSimulating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [mockDrivers, setMockDrivers] = useState<Driver[]>(() => getMockRaceData(year));
  const [isMockRunning, setIsMockRunning] = useState(true);
  
  const { status, drivers: liveDrivers, error, streamActivity, connect, disconnect } = useF1Socket(year);

  // Interval for mock data and live simulation
  useInterval(() => {
    setMockDrivers(getMockRaceData(year));
  }, (dataSource === 'mock' && isMockRunning) || isSimulating ? 2000 : null);

  // Effect to handle connecting/disconnecting and year changes
  useEffect(() => {
    setIsSimulating(false); // Reset simulation on year/source change
    if (dataSource === 'live') {
      connect();
    } else {
      disconnect();
      setMockDrivers(getMockRaceData(year));
    }
  }, [dataSource, year, connect, disconnect]);

  // Effect to handle CORS fallback
  useEffect(() => {
    if (status === 'error' && error === CORS_ERROR_MESSAGE) {
      setIsSimulating(true);
    }
  }, [status, error]);
  
  const driversToDisplay = useMemo(() => {
    const sourceDrivers = dataSource === 'live' && !isSimulating ? liveDrivers : mockDrivers;
    if (!searchQuery) {
      return sourceDrivers;
    }
    return sourceDrivers.filter(
      (driver) =>
        driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        driver.abbreviation.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [dataSource, isSimulating, liveDrivers, mockDrivers, searchQuery]);


  const StatusIndicator: React.FC = () => {
    let color = 'text-[#666666]';
    let bgColor = 'bg-[#E0E0E0]';
    let text = 'OFFLINE';
    let pulsating = false;

    if (isSimulating) {
        color = 'text-purple-500';
        bgColor = 'bg-purple-500';
        text = 'LIVE (SIMULATED)';
        pulsating = true;
    } else if (dataSource === 'mock') {
        color = isMockRunning ? 'text-blue-500' : 'text-orange-500';
        bgColor = isMockRunning ? 'bg-blue-500' : 'bg-orange-500';
        text = isMockRunning ? 'MOCK DATA' : 'MOCK PAUSED';
        pulsating = isMockRunning;
    } else { // Live
        switch (status) {
            case 'connecting':
                color = 'text-orange-500';
                bgColor = 'bg-orange-500';
                text = 'CONNECTING...';
                pulsating = true;
                break;
            case 'live':
                color = 'text-green-500';
                bgColor = 'bg-green-500';
                text = 'LIVE';
                pulsating = true;
                break;
            case 'error':
                color = 'text-red-500';
                bgColor = 'bg-red-500';
                text = 'ERROR';
                break;
            case 'disconnected':
                color = 'text-[#666666]';
                bgColor = 'bg-[#E0E0E0]';
                text = 'DISCONNECTED';
                break;
        }
    }

    return (
        <div 
          className="flex items-center gap-2 cursor-pointer"
          title={dataSource === 'mock' ? (isMockRunning ? "Pause mock data" : "Resume mock data") : (status === 'error' && error && !isSimulating) ? error : "Live status"}
          onClick={() => dataSource === 'mock' && setIsMockRunning(!isMockRunning)}
        >
          <span className={`text-xs font-semibold ${color}`}>{text}</span>
          <div className={`w-2.5 h-2.5 rounded-full ${bgColor} ${pulsating ? 'animate-pulse' : ''}`}></div>
        </div>
    );
  }

  const StreamActivityIndicator = () => {
      const now = Date.now();
      const isActive = (timestamp: number) => timestamp > 0 && (now - timestamp) < 5000;
      const baseClass = "w-2.5 h-2.5 rounded-full transition-colors";
      return (
        <div className="flex items-center gap-2" title="Stream Activity (TIM, CAR)">
            <div className={`${baseClass} ${isActive(streamActivity.timing) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <div className={`${baseClass} ${isActive(streamActivity.carData) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
        </div>
      )
  }

  return (
    <div className="bg-white border border-[#E0E0E0] rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
      <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E0E0E0]">
        <h2 className="text-2xl font-semibold text-black">Live Race Tracker</h2>
        <div className="flex items-center gap-4">
            <div className="flex items-center p-1 bg-[#F5F5F5] rounded-xl">
                <button onClick={() => setDataSource('mock')} className={`px-4 py-1.5 text-sm rounded-lg transition-all ${dataSource === 'mock' ? 'bg-black text-white shadow' : 'text-[#666666] hover:text-black'}`}>Mock</button>
                <button onClick={() => setDataSource('live')} className={`px-4 py-1.5 text-sm rounded-lg transition-all ${dataSource === 'live' ? 'bg-[#FDB813] text-black shadow' : 'text-[#666666] hover:text-black'}`}>Live</button>
            </div>
            <StatusIndicator />
            {(dataSource === 'live' && (status === 'live' || isSimulating)) && <StreamActivityIndicator />}
        </div>
      </div>
       
       {isSimulating && (
         <div className="px-6 pt-4">
            <div className="bg-purple-50 border border-purple-200 text-purple-800 px-4 py-3 rounded-lg" role="alert">
                <p><strong className="font-semibold">Switched to Live Simulation</strong></p>
                <p className="text-sm mt-1">{error}</p>
            </div>
         </div>
       )}

       {dataSource === 'live' && error && !isSimulating && (
        <div className="px-6 pt-4">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg" role="alert">
                <p><strong className="font-semibold">Live Connection Failed</strong></p>
                <p className="text-sm mt-1">{error}</p>
            </div>
        </div>
       )}

      <div className="px-6 pt-4 pb-2">
         <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search driver by name or code..."
          className="w-full px-4 py-2 text-sm bg-[#FAFAFA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      <div>
        {/* Header */}
        <div className="flex items-center px-6 py-3 bg-white text-xs font-medium text-[#666666] uppercase tracking-[0.05em]">
          <div className="w-8 text-center">Pos</div>
          <div className="flex-1 pl-4">Driver</div>
          <div className="w-24 text-right">Interval</div>
          <div className="w-24 text-right">Speed</div>
        </div>
        {/* Driver List */}
        <div className="divide-y divide-[#E0E0E0]">
          {driversToDisplay.map((driver) => (
            <DriverRow key={driver.driverId} driver={driver} />
          ))}
        </div>
        
        {driversToDisplay.length === 0 && (
            <div className="text-center py-10 text-[#666666]">
                {searchQuery ? 'No drivers found for your search.' : 
                 (dataSource === 'live' && status !== 'connecting' && !error) ? 'Waiting for live data...' :
                 'No data available.'}
            </div>
        )}
      </div>
    </div>
  );
};

export default RaceTracker;