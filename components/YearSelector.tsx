import React from 'react';
import type { SeasonYear } from '../types';

interface YearSelectorProps {
  currentYear: SeasonYear;
  setYear: (year: SeasonYear) => void;
}

const YEARS: SeasonYear[] = [2024, 2025, 2026];

const YearSelector: React.FC<YearSelectorProps> = ({ currentYear, setYear }) => {
  const baseClasses = "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F5F5F5] focus:ring-[#FDB813]";
  const activeClasses = "bg-black text-white shadow-sm";
  const inactiveClasses = "text-[#666666] hover:bg-[#F0F0F0] hover:text-black";

  return (
    <div className="flex items-center p-1 bg-[#F0F0F0] rounded-2xl">
      {YEARS.map(year => (
        <button
          key={year}
          onClick={() => setYear(year)}
          className={`${baseClasses} ${currentYear === year ? activeClasses : inactiveClasses}`}
          aria-pressed={currentYear === year}
        >
          {year}
        </button>
      ))}
    </div>
  );
};

export default YearSelector;