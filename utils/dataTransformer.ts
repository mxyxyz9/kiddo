import type { Driver, SeasonYear } from '../types';
import { SEASON_DATA } from '../data/mockData';

type DriverInfo = Omit<Driver, 'position' | 'interval' | 'lastLap' | 'speed' | 'gear' | 'drs'>;
type DriverInfoMap = Map<string, DriverInfo>;

export function createDriverInfoMap(year: SeasonYear): DriverInfoMap {
    const map = new Map<string, DriverInfo>();
    const drivers = SEASON_DATA[year]?.drivers || [];
    drivers.forEach(driver => {
        map.set(driver.driverId, driver);
    });
    return map;
}

export function updateDriverData(
    currentDrivers: Driver[],
    data: any,
    streamName: 'TimingData' | 'CarData.z',
    driverInfoMap: DriverInfoMap
): Driver[] {
    const updatedDriversMap = new Map<string, Driver>(currentDrivers.map(d => [d.driverId, d]));

    if (streamName === 'TimingData' && data?.Lines) {
        for (const driverId in data.Lines) {
            const line = data.Lines[driverId];
            const existingDriver = updatedDriversMap.get(driverId);
            
            if (existingDriver) {
                // Update existing driver
                existingDriver.position = parseInt(line.Position, 10);
                existingDriver.interval = line.IntervalToPositionAhead?.Value || 'Interval';
                existingDriver.lastLap = line.LastLapTime?.Value || '0:00.000';
            } else {
                // Add new driver if they exist in our base info map
                const baseInfo = driverInfoMap.get(driverId);
                if (baseInfo) {
                    updatedDriversMap.set(driverId, {
                        ...baseInfo,
                        position: parseInt(line.Position, 10),
                        interval: line.IntervalToPositionAhead?.Value || 'Interval',
                        lastLap: line.LastLapTime?.Value || '0:00.000',
                    });
                }
            }
        }
    } else if (streamName === 'CarData.z' && data?.Entries) {
         for (const entry of data.Entries) {
            for (const car of entry.Cars) {
                const driverId = car.RacingNumber;
                const existingDriver = updatedDriversMap.get(driverId);
                if (existingDriver) {
                    const carData = car.Channels;
                    existingDriver.speed = carData[0]; // Speed
                    existingDriver.gear = carData[3];  // Gear
                    existingDriver.drs = carData[4] >= 10; // DRS Status (10, 11, 12, 14 mean active)
                }
            }
         }
    }
    
    const sortedDrivers = Array.from(updatedDriversMap.values());
    sortedDrivers.sort((a, b) => a.position - b.position);
    return sortedDrivers;
}
