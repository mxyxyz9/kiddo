import React from 'react';
import type { View } from '../types';

interface ViewToggleProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, setCurrentView }) => {
  const baseClasses = "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F5F5F5] focus:ring-[#FDB813]";
  const activeClasses = "bg-[#FDB813] text-black shadow-sm";
  const inactiveClasses = "text-[#666666] hover:bg-[#F0F0F0] hover:text-black";

  return (
    <div className="flex items-center p-1 bg-[#F0F0F0] rounded-2xl">
      <button
        onClick={() => setCurrentView('schedule')}
        className={`${baseClasses} ${currentView === 'schedule' ? activeClasses : inactiveClasses}`}
        aria-pressed={currentView === 'schedule'}
      >
        Schedule
      </button>
      <button
        onClick={() => setCurrentView('tracker')}
        className={`${baseClasses} ${currentView === 'tracker' ? activeClasses : inactiveClasses}`}
        aria-pressed={currentView === 'tracker'}
      >
        Tracker
      </button>
    </div>
  );
};

export default ViewToggle;