import React, { useState } from 'react';
import Header from './components/Header';
import Schedule from './components/Schedule';
import RaceTracker from './components/RaceTracker';
import ViewToggle from './components/ViewToggle';
import YearSelector from './components/YearSelector';
import RaceDetail from './components/RaceDetail';
import type { View, SeasonYear, RaceSession } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('schedule');
  const [currentYear, setCurrentYear] = useState<SeasonYear>(2024);
  const [selectedRace, setSelectedRace] = useState<RaceSession | null>(null);

  const handleRaceSelect = (race: RaceSession) => {
    setSelectedRace(race);
  };

  const handleBackToSchedule = () => {
    setSelectedRace(null);
  };

  const renderContent = () => {
    if (currentView === 'tracker') {
      return <RaceTracker year={currentYear} />;
    }
    if (selectedRace) {
      return <RaceDetail race={selectedRace} onBack={handleBackToSchedule} />;
    }
    return <Schedule year={currentYear} onRaceSelect={handleRaceSelect} />;
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-mono antialiased">
      <Header>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <YearSelector currentYear={currentYear} setYear={setCurrentYear} />
          <ViewToggle currentView={currentView} setCurrentView={setCurrentView} />
        </div>
      </Header>
      <main className="container mx-auto px-2 sm:px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </main>
      <footer className="text-center py-6 text-[#666666]">
        <p className="text-sm">Skiddo F1 Dashboard</p>
      </footer>
    </div>
  );
};

export default App;
