import React, { useState, useEffect, useRef } from 'react';

// Custom hook for setting an interval with a dynamic delay
export function useInterval(callback: () => void, delay: number | null) {
  // FIX: Explicitly initialize useRef with null to avoid a TypeScript error with certain @types/react versions.
  const savedCallback = useRef<(() => void) | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
