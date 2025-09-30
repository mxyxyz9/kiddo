import React, { useState, useEffect } from 'react';
import type { RaceSession, SeasonYear } from '../types';
import { SEASON_DATA } from '../data/mockData';
import LoadingSpinner from './LoadingSpinner';

interface ScheduleProps {
  year: SeasonYear;
  onRaceSelect: (race: RaceSession) => void;
}

const Schedule: React.FC<ScheduleProps> = ({ year, onRaceSelect }) => {
  const [schedule, setSchedule] = useState<RaceSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call for the selected year
    const fetchSchedule = () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setSchedule(SEASON_DATA[year].schedule);
          setLoading(false);
        }, 500); // Faster load time
      } catch (err) {
        setError('Failed to fetch schedule data.');
        setLoading(false);
      }
    };

    fetchSchedule();
  }, [year]);

  if (loading) {
    return <div className="flex justify-center items-center h-64"><LoadingSpinner /></div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white border border-[#E0E0E0] rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
      <div className="p-6 border-b border-[#E0E0E0]">
        <h2 className="text-2xl font-semibold text-black">{year} Race Schedule</h2>
      </div>
      <div className="divide-y divide-[#E0E0E0]">
        {schedule.map((race) => (
          <button
            key={race.round}
            onClick={() => onRaceSelect(race)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F5F5F5] hover:-translate-y-px transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="text-center w-12 flex-shrink-0">
                 <div className="text-[#FDB813] font-semibold text-xs">R{race.round.toString().padStart(2, '0')}</div>
                 <div className="text-3xl mt-1">{race.countryCode}</div>
              </div>
              <div>
                <p className="font-semibold text-black text-base">{race.name}</p>
                <p className="text-sm text-[#666666]">{race.location}</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 ml-4">
              <p className="font-medium text-black text-sm">{race.date}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
