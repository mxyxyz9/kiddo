import type { Driver, RaceSession, SeasonYear } from '../types';

type DriverInfo = Omit<Driver, 'position' | 'interval' | 'lastLap' | 'speed' | 'gear' | 'drs'>;


interface Season {
  schedule: RaceSession[];
  drivers: DriverInfo[];
}

export const SEASON_DATA: Record<SeasonYear, Season> = {
  2024: {
    schedule: [
        { round: 1, name: 'Gulf Air Bahrain Grand Prix', location: 'Sakhir', countryCode: '🇧🇭', date: 'Feb 29 - Mar 02', timings: {'Practice 1': {day: 'Thu', time: '14:30'}, 'Practice 2': {day: 'Thu', time: '18:00'}, 'Practice 3': {day: 'Fri', time: '15:30'}, 'Qualifying': {day: 'Fri', time: '19:00'}, 'Race': {day: 'Sat', time: '18:00'}}},
        { round: 2, name: 'STC Saudi Arabian Grand Prix', location: 'Jeddah', countryCode: '🇸🇦', date: 'Mar 07 - Mar 09', timings: {'Practice 1': {day: 'Thu', time: '16:30'}, 'Practice 2': {day: 'Thu', time: '20:00'}, 'Practice 3': {day: 'Fri', time: '16:30'}, 'Qualifying': {day: 'Fri', time: '20:00'}, 'Race': {day: 'Sat', time: '20:00'}}},
        { round: 3, name: 'Rolex Australian Grand Prix', location: 'Melbourne', countryCode: '🇦🇺', date: 'Mar 22 - Mar 24', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 4, name: 'MSC Cruises Japanese Grand Prix', location: 'Suzuka', countryCode: '🇯🇵', date: 'Apr 05 - Apr 07', timings: {'Practice 1': {day: 'Fri', time: '11:30'}, 'Practice 2': {day: 'Fri', time: '15:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '14:00'}}},
        { round: 5, name: 'Lenovo Chinese Grand Prix', location: 'Shanghai', countryCode: '🇨🇳', date: 'Apr 19 - Apr 21', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '11:30'}, 'Sprint Qualifying': {day: 'Fri', time: '15:30'}, 'Sprint': {day: 'Sat', time: '11:00'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 6, name: 'Crypto.com Miami Grand Prix', location: 'Miami', countryCode: '🇺🇸', date: 'May 03 - May 05', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Sprint Qualifying': {day: 'Fri', time: '16:30'}, 'Sprint': {day: 'Sat', time: '12:00'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '16:00'}}},
        { round: 7, name: 'Emilia Romagna Grand Prix', location: 'Imola', countryCode: '🇮🇹', date: 'May 17 - May 19', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 8, name: 'Monaco Grand Prix', location: 'Monaco', countryCode: '🇲🇨', date: 'May 24 - May 26', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 9, name: 'Canadian Grand Prix', location: 'Montréal', countryCode: '🇨🇦', date: 'Jun 07 - Jun 09', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '14:00'}}},
        { round: 10, name: 'Spanish Grand Prix', location: 'Barcelona', countryCode: '🇪🇸', date: 'Jun 21 - Jun 23', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 11, name: 'Austrian Grand Prix', location: 'Spielberg', countryCode: '🇦🇹', date: 'Jun 28 - Jun 30', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Sprint Qualifying': {day: 'Fri', time: '16:30'}, 'Sprint': {day: 'Sat', time: '12:00'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 12, name: 'British Grand Prix', location: 'Silverstone', countryCode: '🇬🇧', date: 'Jul 05 - Jul 07', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 13, name: 'Hungarian Grand Prix', location: 'Budapest', countryCode: '🇭🇺', date: 'Jul 19 - Jul 21', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 14, name: 'Belgian Grand Prix', location: 'Spa-Francorchamps', countryCode: '🇧🇪', date: 'Jul 26 - Jul 28', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 15, name: 'Dutch Grand Prix', location: 'Zandvoort', countryCode: '🇳🇱', date: 'Aug 23 - Aug 25', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 16, name: 'Italian Grand Prix', location: 'Monza', countryCode: '🇮🇹', date: 'Aug 30 - Sep 01', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 17, name: 'Azerbaijan Grand Prix', location: 'Baku', countryCode: '🇦🇿', date: 'Sep 13 - Sep 15', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 18, name: 'Singapore Grand Prix', location: 'Singapore', countryCode: '🇸🇬', date: 'Sep 20 - Sep 22', timings: {'Practice 1': {day: 'Fri', time: '17:30'}, 'Practice 2': {day: 'Fri', time: '21:00'}, 'Practice 3': {day: 'Sat', time: '17:30'}, 'Qualifying': {day: 'Sat', time: '21:00'}, 'Race': {day: 'Sun', time: '20:00'}}},
        { round: 19, name: 'United States Grand Prix', location: 'Austin', countryCode: '🇺🇸', date: 'Oct 18 - Oct 20', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Sprint Qualifying': {day: 'Fri', time: '17:30'}, 'Sprint': {day: 'Sat', time: '14:00'}, 'Qualifying': {day: 'Sat', time: '18:00'}, 'Race': {day: 'Sun', time: '15:00'}}},
        { round: 20, name: 'Mexican Grand Prix', location: 'Mexico City', countryCode: '🇲🇽', date: 'Oct 25 - Oct 27', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '14:00'}}},
        { round: 21, name: 'Brazilian Grand Prix', location: 'São Paulo', countryCode: '🇧🇷', date: 'Nov 01 - Nov 03', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '11:30'}, 'Sprint Qualifying': {day: 'Fri', time: '15:30'}, 'Sprint': {day: 'Sat', time: '11:00'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '14:00'}}},
        { round: 22, name: 'Las Vegas Grand Prix', location: 'Las Vegas', countryCode: '🇺🇸', date: 'Nov 21 - Nov 23', timings: {'Practice 1': {day: 'Thu', time: '18:30'}, 'Practice 2': {day: 'Thu', time: '22:00'}, 'Practice 3': {day: 'Fri', time: '18:30'}, 'Qualifying': {day: 'Fri', time: '22:00'}, 'Race': {day: 'Sat', time: '22:00'}}},
        { round: 23, name: 'Qatar Grand Prix', location: 'Lusail', countryCode: '🇶🇦', date: 'Nov 29 - Dec 01', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '16:30'}, 'Sprint Qualifying': {day: 'Fri', time: '20:30'}, 'Sprint': {day: 'Sat', time: '16:00'}, 'Qualifying': {day: 'Sat', time: '20:00'}, 'Race': {day: 'Sun', time: '20:00'}}},
        { round: 24, name: 'Abu Dhabi Grand Prix', location: 'Yas Marina', countryCode: '🇦🇪', date: 'Dec 06 - Dec 08', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '14:30'}, 'Qualifying': {day: 'Sat', time: '18:00'}, 'Race': {day: 'Sun', time: '17:00'}}},
    ],
    drivers: [
      { driverId: '1', name: 'Max Verstappen', abbreviation: 'VER', team: 'Red Bull Racing', teamColor: '#3671C6' },
      { driverId: '11', name: 'Sergio Perez', abbreviation: 'PER', team: 'Red Bull Racing', teamColor: '#3671C6' },
      { driverId: '16', name: 'Charles Leclerc', abbreviation: 'LEC', team: 'Ferrari', teamColor: '#F91536' },
      { driverId: '55', name: 'Carlos Sainz', abbreviation: 'SAI', team: 'Ferrari', teamColor: '#F91536' },
      { driverId: '4', name: 'Lando Norris', abbreviation: 'NOR', team: 'McLaren', teamColor: '#F58020' },
      { driverId: '81', name: 'Oscar Piastri', abbreviation: 'PIA', team: 'McLaren', teamColor: '#F58020' },
      { driverId: '63', name: 'George Russell', abbreviation: 'RUS', team: 'Mercedes', teamColor: '#6CD3BF' },
      { driverId: '44', name: 'Lewis Hamilton', abbreviation: 'HAM', team: 'Mercedes', teamColor: '#6CD3BF' },
      { driverId: '14', name: 'Fernando Alonso', abbreviation: 'ALO', team: 'Aston Martin', teamColor: '#358C75' },
      { driverId: '18', name: 'Lance Stroll', abbreviation: 'STR', team: 'Aston Martin', teamColor: '#358C75' },
      { driverId: '22', name: 'Yuki Tsunoda', abbreviation: 'TSU', team: 'RB', teamColor: '#6692FF' },
      { driverId: '3', name: 'Daniel Ricciardo', abbreviation: 'RIC', team: 'RB', teamColor: '#6692FF' },
      { driverId: '27', name: 'Nico Hulkenberg', abbreviation: 'HUL', team: 'Haas F1 Team', teamColor: '#B6BABD' },
      { driverId: '20', name: 'Kevin Magnussen', abbreviation: 'MAG', team: 'Haas F1 Team', teamColor: '#B6BABD' },
      { driverId: '10', name: 'Pierre Gasly', abbreviation: 'GAS', team: 'Alpine', teamColor: '#2293D1' },
      { driverId: '31', name: 'Esteban Ocon', abbreviation: 'OCO', team: 'Alpine', teamColor: '#2293D1' },
      { driverId: '23', name: 'Alexander Albon', abbreviation: 'ALB', team: 'Williams', teamColor: '#37BEDD' },
      { driverId: '2', name: 'Logan Sargeant', abbreviation: 'SAR', team: 'Williams', teamColor: '#37BEDD' },
      { driverId: '24', name: 'Guanyu Zhou', abbreviation: 'ZHO', team: 'Sauber', teamColor: '#52E252' },
      { driverId: '77', name: 'Valtteri Bottas', abbreviation: 'BOT', team: 'Sauber', teamColor: '#52E252' },
    ],
  },
  2025: {
    schedule: [ // Speculative schedule and timings
        { round: 1, name: 'Australian Grand Prix', location: 'Melbourne', countryCode: '🇦🇺', date: 'Mar 14 - Mar 16', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 2, name: 'Chinese Grand Prix', location: 'Shanghai', countryCode: '🇨🇳', date: 'Mar 21 - Mar 23', timings: {'Practice 1': {day: 'Fri', time: '11:30'}, 'Practice 2': {day: 'Fri', time: '15:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 3, name: 'Japanese Grand Prix', location: 'Suzuka', countryCode: '🇯🇵', date: 'Apr 04 - Apr 06', timings: {'Practice 1': {day: 'Fri', time: '11:30'}, 'Practice 2': {day: 'Fri', time: '15:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '14:00'}} },
        { round: 4, name: 'Bahrain Grand Prix', location: 'Sakhir', countryCode: '🇧🇭', date: 'Apr 11 - Apr 13', timings: {'Practice 1': {day: 'Fri', time: '14:30'}, 'Practice 2': {day: 'Fri', time: '18:00'}, 'Practice 3': {day: 'Sat', time: '15:30'}, 'Qualifying': {day: 'Sat', time: '19:00'}, 'Race': {day: 'Sun', time: '18:00'}} },
        { round: 5, name: 'Saudi Arabian Grand Prix', location: 'Jeddah', countryCode: '🇸🇦', date: 'Apr 18 - Apr 20', timings: {'Practice 1': {day: 'Fri', time: '16:30'}, 'Practice 2': {day: 'Fri', time: '20:00'}, 'Practice 3': {day: 'Sat', time: '16:30'}, 'Qualifying': {day: 'Sat', time: '20:00'}, 'Race': {day: 'Sun', time: '20:00'}} },
        { round: 6, name: 'Miami Grand Prix', location: 'Miami', countryCode: '🇺🇸', date: 'May 02 - May 04', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Sprint Qualifying': {day: 'Fri', time: '16:30'}, 'Sprint': {day: 'Sat', time: '12:00'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '16:00'}} },
        { round: 7, name: 'Emilia Romagna Grand Prix', location: 'Imola', countryCode: '🇮🇹', date: 'May 16 - May 18', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 8, name: 'Monaco Grand Prix', location: 'Monaco', countryCode: '🇲🇨', date: 'May 23 - May 25', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 9, name: 'Spanish Grand Prix', location: 'Barcelona', countryCode: '🇪🇸', date: 'May 30 - Jun 01', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 10, name: 'Canadian Grand Prix', location: 'Montréal', countryCode: '🇨🇦', date: 'Jun 13 - Jun 15', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '14:00'}} },
        { round: 11, name: 'Austrian Grand Prix', location: 'Spielberg', countryCode: '🇦🇹', date: 'Jun 27 - Jun 29', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 12, name: 'British Grand Prix', location: 'Silverstone', countryCode: '🇬🇧', date: 'Jul 04 - Jul 06', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 13, name: 'Belgian Grand Prix', location: 'Spa-Francorchamps', countryCode: '🇧🇪', date: 'Jul 25 - Jul 27', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 14, name: 'Hungarian Grand Prix', location: 'Budapest', countryCode: '🇭🇺', date: 'Aug 01 - Aug 03', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 15, name: 'Dutch Grand Prix', location: 'Zandvoort', countryCode: '🇳🇱', date: 'Aug 29 - Aug 31', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 16, name: 'Italian Grand Prix', location: 'Monza', countryCode: '🇮🇹', date: 'Sep 05 - Sep 07', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 17, name: 'Azerbaijan Grand Prix', location: 'Baku', countryCode: '🇦🇿', date: 'Sep 19 - Sep 21', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 18, name: 'Singapore Grand Prix', location: 'Singapore', countryCode: '🇸🇬', date: 'Oct 03 - Oct 05', timings: {'Practice 1': {day: 'Fri', time: '17:30'}, 'Practice 2': {day: 'Fri', time: '21:00'}, 'Practice 3': {day: 'Sat', time: '17:30'}, 'Qualifying': {day: 'Sat', time: '21:00'}, 'Race': {day: 'Sun', time: '20:00'}} },
        { round: 19, name: 'United States Grand Prix', location: 'Austin', countryCode: '🇺🇸', date: 'Oct 17 - Oct 19', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Sprint Qualifying': {day: 'Fri', time: '17:30'}, 'Sprint': {day: 'Sat', time: '14:00'}, 'Qualifying': {day: 'Sat', time: '18:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 20, name: 'Mexican Grand Prix', location: 'Mexico City', countryCode: '🇲🇽', date: 'Oct 24 - Oct 26', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '14:00'}} },
        { round: 21, name: 'Brazilian Grand Prix', location: 'São Paulo', countryCode: '🇧🇷', date: 'Nov 07 - Nov 09', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '11:30'}, 'Sprint Qualifying': {day: 'Fri', time: '15:30'}, 'Sprint': {day: 'Sat', time: '11:00'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '14:00'}} },
        { round: 22, name: 'Las Vegas Grand Prix', location: 'Las Vegas', countryCode: '🇺🇸', date: 'Nov 20 - Nov 22', timings: {'Practice 1': {day: 'Thu', time: '18:30'}, 'Practice 2': {day: 'Thu', time: '22:00'}, 'Practice 3': {day: 'Fri', time: '18:30'}, 'Qualifying': {day: 'Fri', time: '22:00'}, 'Race': {day: 'Sat', time: '22:00'}} },
        { round: 23, name: 'Qatar Grand Prix', location: 'Lusail', countryCode: '🇶🇦', date: 'Nov 28 - Nov 30', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '16:30'}, 'Sprint Qualifying': {day: 'Fri', time: '20:30'}, 'Sprint': {day: 'Sat', time: '16:00'}, 'Qualifying': {day: 'Sat', time: '20:00'}, 'Race': {day: 'Sun', time: '20:00'}} },
        { round: 24, name: 'Abu Dhabi Grand Prix', location: 'Yas Marina', countryCode: '🇦🇪', date: 'Dec 05 - Dec 07', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '14:30'}, 'Qualifying': {day: 'Sat', time: '18:00'}, 'Race': {day: 'Sun', time: '17:00'}} },
    ],
    drivers: [ // Speculative lineup
      { driverId: '1', name: 'Max Verstappen', abbreviation: 'VER', team: 'Red Bull Racing', teamColor: '#3671C6' },
      { driverId: '3', name: 'Daniel Ricciardo', abbreviation: 'RIC', team: 'Red Bull Racing', teamColor: '#3671C6' },
      { driverId: '16', name: 'Charles Leclerc', abbreviation: 'LEC', team: 'Ferrari', teamColor: '#F91536' },
      { driverId: '44', name: 'Lewis Hamilton', abbreviation: 'HAM', team: 'Ferrari', teamColor: '#F91536' },
      { driverId: '4', name: 'Lando Norris', abbreviation: 'NOR', team: 'McLaren', teamColor: '#F58020' },
      { driverId: '81', name: 'Oscar Piastri', abbreviation: 'PIA', team: 'McLaren', teamColor: '#F58020' },
      { driverId: '63', name: 'George Russell', abbreviation: 'RUS', team: 'Mercedes', teamColor: '#6CD3BF' },
      { driverId: '55', name: 'Carlos Sainz', abbreviation: 'SAI', team: 'Mercedes', teamColor: '#6CD3BF' }, // Prediction
      { driverId: '14', name: 'Fernando Alonso', abbreviation: 'ALO', team: 'Aston Martin', teamColor: '#358C75' },
      { driverId: '18', name: 'Lance Stroll', abbreviation: 'STR', team: 'Aston Martin', teamColor: '#358C75' },
      { driverId: '22', name: 'Yuki Tsunoda', abbreviation: 'TSU', team: 'RB', teamColor: '#6692FF' },
      { driverId: '43', name: 'Franco Colapinto', abbreviation: 'COL', team: 'RB', teamColor: '#6692FF' }, // Prediction
      { driverId: '27', name: 'Nico Hulkenberg', abbreviation: 'HUL', team: 'Sauber', teamColor: '#52E252' },
      { driverId: '77', name: 'Valtteri Bottas', abbreviation: 'BOT', team: 'Sauber', teamColor: '#52E252' }, // Prediction
      { driverId: '10', name: 'Pierre Gasly', abbreviation: 'GAS', team: 'Alpine', teamColor: '#2293D1' },
      { driverId: '31', name: 'Esteban Ocon', abbreviation: 'OCO', team: 'Alpine', teamColor: '#2293D1' }, // Prediction
      { driverId: '23', name: 'Alexander Albon', abbreviation: 'ALB', team: 'Williams', teamColor: '#37BEDD' },
      { driverId: '12', name: 'Kimi Antonelli', abbreviation: 'ANT', team: 'Williams', teamColor: '#37BEDD' }, // Prediction
      { driverId: '20', name: 'Kevin Magnussen', abbreviation: 'MAG', team: 'Haas F1 Team', teamColor: '#B6BABD' }, // Prediction
      { driverId: '88', name: 'Oliver Bearman', abbreviation: 'BEA', team: 'Haas F1 Team', teamColor: '#B6BABD' }, // Prediction
    ],
  },
  2026: {
    schedule: [ // Highly speculative schedule and timings
        { round: 1, name: 'Australian Grand Prix', location: 'Melbourne', countryCode: '🇦🇺', date: 'Mar 13 - Mar 15', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 2, name: 'Japanese Grand Prix', location: 'Suzuka', countryCode: '🇯🇵', date: 'Mar 27 - Mar 29', timings: {'Practice 1': {day: 'Fri', time: '11:30'}, 'Practice 2': {day: 'Fri', time: '15:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '14:00'}} },
        { round: 3, name: 'Bahrain Grand Prix', location: 'Sakhir', countryCode: '🇧🇭', date: 'Apr 03 - Apr 05', timings: {'Practice 1': {day: 'Fri', time: '14:30'}, 'Practice 2': {day: 'Fri', time: '18:00'}, 'Practice 3': {day: 'Sat', time: '15:30'}, 'Qualifying': {day: 'Sat', time: '19:00'}, 'Race': {day: 'Sun', time: '18:00'}} },
        { round: 4, name: 'Qatar Grand Prix', location: 'Lusail', countryCode: '🇶🇦', date: 'Apr 17 - Apr 19', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '16:30'}, 'Sprint Qualifying': {day: 'Fri', time: '20:30'}, 'Sprint': {day: 'Sat', time: '16:00'}, 'Qualifying': {day: 'Sat', time: '20:00'}, 'Race': {day: 'Sun', time: '20:00'}} },
        { round: 5, name: 'Miami Grand Prix', location: 'Miami', countryCode: '🇺🇸', date: 'May 01 - May 03', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:30'}, 'Practice 3': {day: 'Sat', time: '12:00'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '16:00'}} },
        { round: 6, name: 'Monaco Grand Prix', location: 'Monaco', countryCode: '🇲🇨', date: 'May 22 - May 24', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 7, name: 'Canadian Grand Prix', location: 'Montréal', countryCode: '🇨🇦', date: 'Jun 05 - Jun 07', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '14:00'}} },
        { round: 8, name: 'Spanish Grand Prix', location: 'Madrid', countryCode: '🇪🇸', date: 'Jun 19 - Jun 21', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 9, name: 'British Grand Prix', location: 'Silverstone', countryCode: '🇬🇧', date: 'Jul 03 - Jul 05', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 10, name: 'Belgian Grand Prix', location: 'Spa-Francorchamps', countryCode: '🇧🇪', date: 'Jul 24 - Jul 26', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 11, name: 'Hungarian Grand Prix', location: 'Budapest', countryCode: '🇭🇺', date: 'Jul 31 - Aug 02', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', 'time': '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 12, name: 'Dutch Grand Prix', location: 'Zandvoort', countryCode: '🇳🇱', date: 'Aug 28 - Aug 30', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 13, name: 'Italian Grand Prix', location: 'Monza', countryCode: '🇮🇹', date: 'Sep 04 - Sep 06', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 14, name: 'Azerbaijan Grand Prix', location: 'Baku', countryCode: '🇦🇿', date: 'Sep 18 - Sep 20', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '12:30'}, 'Qualifying': {day: 'Sat', time: '16:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 15, name: 'Singapore Grand Prix', location: 'Singapore', countryCode: '🇸🇬', date: 'Oct 02 - Oct 04', timings: {'Practice 1': {day: 'Fri', time: '17:30'}, 'Practice 2': {day: 'Fri', time: '21:00'}, 'Practice 3': {day: 'Sat', time: '17:30'}, 'Qualifying': {day: 'Sat', time: '21:00'}, 'Race': {day: 'Sun', time: '20:00'}} },
        { round: 16, name: 'United States Grand Prix', location: 'Austin', countryCode: '🇺🇸', date: 'Oct 16 - Oct 18', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:30'}, 'Practice 3': {day: 'Sat', time: '14:00'}, 'Qualifying': {day: 'Sat', time: '18:00'}, 'Race': {day: 'Sun', time: '15:00'}} },
        { round: 17, name: 'Mexican Grand Prix', location: 'Mexico City', countryCode: '🇲🇽', date: 'Oct 23 - Oct 25', timings: {'Practice 1': {day: 'Fri', time: '12:30'}, 'Practice 2': {day: 'Fri', time: '16:00'}, 'Practice 3': {day: 'Sat', time: '11:30'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '14:00'}} },
        { round: 18, name: 'Brazilian Grand Prix', location: 'São Paulo', countryCode: '🇧🇷', date: 'Nov 06 - Nov 08', isSprint: true, timings: {'Practice 1': {day: 'Fri', time: '11:30'}, 'Sprint Qualifying': {day: 'Fri', time: '15:30'}, 'Sprint': {day: 'Sat', time: '11:00'}, 'Qualifying': {day: 'Sat', time: '15:00'}, 'Race': {day: 'Sun', time: '14:00'}} },
        { round: 19, name: 'Las Vegas Grand Prix', location: 'Las Vegas', countryCode: '🇺🇸', date: 'Nov 13 - Nov 15', timings: {'Practice 1': {day: 'Thu', time: '18:30'}, 'Practice 2': {day: 'Thu', time: '22:00'}, 'Practice 3': {day: 'Fri', time: '18:30'}, 'Qualifying': {day: 'Fri', time: '22:00'}, 'Race': {day: 'Sat', time: '22:00'}} },
        { round: 20, name: 'Abu Dhabi Grand Prix', location: 'Yas Marina', countryCode: '🇦🇪', date: 'Nov 27 - Nov 29', timings: {'Practice 1': {day: 'Fri', time: '13:30'}, 'Practice 2': {day: 'Fri', time: '17:00'}, 'Practice 3': {day: 'Sat', time: '14:30'}, 'Qualifying': {day: 'Sat', time: '18:00'}, 'Race': {day: 'Sun', time: '17:00'}} },
    ],
    drivers: [ // Highly speculative lineup for new regulations
      { driverId: '1', name: 'Max Verstappen', abbreviation: 'VER', team: 'Red Bull Ford', teamColor: '#1E40AF' }, // New team name
      { driverId: '4', name: 'Lando Norris', abbreviation: 'NOR', team: 'Red Bull Ford', teamColor: '#1E40AF' }, // Major move prediction
      { driverId: '16', name: 'Charles Leclerc', abbreviation: 'LEC', team: 'Ferrari', teamColor: '#F91536' },
      { driverId: '44', name: 'Lewis Hamilton', abbreviation: 'HAM', team: 'Ferrari', teamColor: '#F91536' },
      { driverId: '81', name: 'Oscar Piastri', abbreviation: 'PIA', team: 'McLaren Mercedes', teamColor: '#F58020' },
      { driverId: '23', name: 'Alexander Albon', abbreviation: 'ALB', team: 'McLaren Mercedes', teamColor: '#F58020' }, // Prediction
      { driverId: '63', name: 'George Russell', abbreviation: 'RUS', team: 'Mercedes', teamColor: '#6CD3BF' },
      { driverId: '12', name: 'Kimi Antonelli', abbreviation: 'ANT', team: 'Mercedes', teamColor: '#6CD3BF' }, // Prediction
      { driverId: '14', name: 'Fernando Alonso', abbreviation: 'ALO', team: 'Aston Martin Honda', teamColor: '#004B87' }, // New colors
      { driverId: '22', name: 'Yuki Tsunoda', abbreviation: 'TSU', team: 'Aston Martin Honda', teamColor: '#004B87' }, // Prediction
      { driverId: '10', name: 'Pierre Gasly', abbreviation: 'GAS', team: 'Alpine', teamColor: '#2293D1' },
      { driverId: '8', name: 'Romain Grosjean', abbreviation: 'GRO', team: 'Alpine', teamColor: '#2293D1' }, // Surprise return prediction
      { driverId: '27', name: 'Nico Hulkenberg', abbreviation: 'HUL', team: 'Audi', teamColor: '#9A1D2A' }, // Audi entry
      { driverId: '55', name: 'Carlos Sainz', abbreviation: 'SAI', team: 'Audi', teamColor: '#9A1D2A' }, // Audi entry
      { driverId: '88', name: 'Oliver Bearman', abbreviation: 'BEA', team: 'Haas', teamColor: '#B6BABD' },
      { driverId: '30', name: 'Liam Lawson', abbreviation: 'LAW', team: 'Haas', teamColor: '#B6BABD' },
      { driverId: '43', name: 'Franco Colapinto', abbreviation: 'COL', team: 'Williams', teamColor: '#37BEDD' },
      { driverId: '2', name: 'Logan Sargeant', abbreviation: 'SAR', team: 'Williams', teamColor: '#37BEDD' },
      { driverId: '99', name: 'Antonio Giovinazzi', abbreviation: 'GIO', team: 'Andretti Cadillac', teamColor: '#002D62' }, // New team prediction
      { driverId: '26', name: 'Colton Herta', abbreviation: 'HER', team: 'Andretti Cadillac', teamColor: '#002D62' }, // New team prediction
    ],
  },
};

let lastLapTime = 88.5;
// Use a map to store the last speed of each driver for smoother changes
const driverSpeeds = new Map<string, number>();

export function getMockRaceData(year: SeasonYear): Driver[] {
    const driversForYear = SEASON_DATA[year].drivers;
    
    // Simple shuffle to change positions
    const shuffledDrivers = [...driversForYear].sort(() => Math.random() - 0.5);

    let lastInterval = 0;

    return shuffledDrivers.map((driver, index) => {
        const position = index + 1;
        let interval: string;

        if (position === 1) {
            interval = 'Interval';
        } else {
            const randomGap = Math.random() * 1.5 + 0.1;
            lastInterval += randomGap;
            interval = `+${lastInterval.toFixed(3)}`;
        }
        
        lastLapTime += (Math.random() - 0.48) * 0.2;
        const minutes = Math.floor(lastLapTime / 60);
        const seconds = (lastLapTime % 60).toFixed(3).padStart(6, '0');

        // Simulate telemetry
        const lastSpeed = driverSpeeds.get(driver.driverId) || 280 + Math.random() * 50;
        const newSpeed = lastSpeed + (Math.random() - 0.5) * 20;
        driverSpeeds.set(driver.driverId, newSpeed);

        const gear = Math.floor(newSpeed / 40);
        const drs = newSpeed > 300 && Math.random() > 0.6;


        return {
            ...driver,
            position,
            interval,
            lastLap: `${minutes}:${seconds}`,
            speed: Math.round(newSpeed),
            gear: Math.min(8, Math.max(1, gear)),
            drs,
        };
    });
}
