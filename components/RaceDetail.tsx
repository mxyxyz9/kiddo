import React from 'react';
import type { RaceSession, SessionName } from '../types';

interface RaceDetailProps {
  race: RaceSession;
  onBack: () => void;
}

// Define the order of sessions for display
const sessionOrder: SessionName[] = [
  'Practice 1',
  'Practice 2',
  'Practice 3',
  'Sprint Qualifying',
  'Sprint',
  'Qualifying',
  'Race',
];

const RaceDetail: React.FC<RaceDetailProps> = ({ race, onBack }) => {
  const sessions = sessionOrder
    .map(name => ({ name, ...race.timings[name] }))
    .filter(session => session.day && session.time);

  return (
    <div className="bg-white border border-[#E0E0E0] rounded-2xl shadow-lg overflow-hidden animate-fade-in">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>
      <div className="p-6 border-b border-[#E0E0E0] flex justify-between items-center flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-black">{race.name}</h2>
          <p className="text-sm text-[#666666]">{race.location}</p>
        </div>
        <button
          onClick={onBack}
          className="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 text-[#666666] hover:bg-[#F0F0F0] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#FDB813]"
        >
          &larr; Back to Schedule
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-3">
          Weekend Timetable
          {race.isSprint && (
            <span className="px-2 py-0.5 text-xs font-bold text-yellow-800 bg-yellow-200 rounded-full">
              SPRINT
            </span>
          )}
        </h3>
        <div className="space-y-3">
          {sessions.map((session, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-lg border border-[#E0E0E0]">
              <span className="font-semibold text-black">{session.name}</span>
              <div className="text-right">
                <p className="text-sm font-medium text-black">{session.day}</p>
                <p className="text-sm text-[#666666]">{session.time} (Local)</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RaceDetail;
