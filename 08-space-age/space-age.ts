const SECONDS_IN_EARTH_YEAR = 31557600;
const orbitalPeriod = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
} as const;
type Planet = keyof typeof orbitalPeriod; 

const getSecondsInPlanetaryYear = (planet: Planet): number => orbitalPeriod[planet]
  * SECONDS_IN_EARTH_YEAR;

export const age = (planet: Planet, seconds: number): number => Number(
  (seconds / getSecondsInPlanetaryYear(planet)).toFixed(2),
);
