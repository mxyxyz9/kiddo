import React from 'react';
import type { Driver } from '../types';

interface DriverRowProps {
  driver: Driver;
}

const DriverRow: React.FC<DriverRowProps> = ({ driver }) => {
  return (
    <div className="flex items-center px-6 py-3 hover:bg-[#F5F5F5] transition-colors duration-200">
      {/* Team Color Bar */}
      <div className="w-1 h-8 rounded-full mr-3" style={{ backgroundColor: driver.teamColor }}></div>

      {/* Position */}
      <div className="w-8 text-center font-semibold text-lg text-black">{driver.position}</div>

      {/* Driver Info */}
      <div className="flex-1 pl-4 flex items-center gap-3">
        <div>
            <span className="font-semibold text-black">{driver.name}</span>
            <span className="ml-2 text-[#666666] text-sm">{driver.abbreviation}</span>
        </div>
        <div className="flex items-center gap-2">
            {driver.drs && (
                <div className="px-2 py-0.5 text-xs font-bold text-green-800 bg-green-200 rounded-full" title="DRS Active">
                    DRS
                </div>
            )}
            {driver.gear && driver.gear > 0 && (
                 <div className="w-6 h-6 flex items-center justify-center text-sm font-bold text-black bg-gray-200 rounded-md" title={`Gear ${driver.gear}`}>
                    {driver.gear}
                </div>
            )}
        </div>
      </div>

      {/* Interval */}
      <div className="w-24 text-right text-sm text-[#666666]">{driver.interval}</div>
      
      {/* Speed */}
      <div className="w-24 text-right text-sm text-black font-semibold">
        {driver.speed ? `${driver.speed} kph` : '-'}
      </div>
    </div>
  );
};

export default DriverRow;