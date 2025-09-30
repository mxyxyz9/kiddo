export type View = 'schedule' | 'tracker';

export type SeasonYear = 2024 | 2025 | 2026;

export type ConnectionStatus = 'disconnected' | 'connecting' | 'live' | 'error';

export type SessionName = 'Practice 1' | 'Practice 2' | 'Practice 3' | 'Sprint Qualifying' | 'Sprint' | 'Qualifying' | 'Race';

export interface RaceSession {
  round: number;
  name: string;
  location: string;
  countryCode: string; // For flag emoji
  date: string;
  isSprint?: boolean;
  timings: Partial<Record<SessionName, { day: string; time: string }>>;
}

export interface Driver {
  driverId: string;
  position: number;
  name: string;
  abbreviation: string;
  team: string;
  teamColor: string;
  interval: string;
  lastLap: string;
  // Live telemetry data
  speed?: number;
  gear?: number;
  drs?: boolean;
}
