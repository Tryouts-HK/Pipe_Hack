import { FilterOptions, Result } from './results.interface';
import resultsData from './results.json';

export const fetchResults = (): Result[] => {
  return resultsData;
};

export const getFilterOptions = (results: Result[]): FilterOptions => {
  const states = Array.from(new Set(results.map(result => result.state)));
  const lgas = Array.from(new Set(results.map(result => result.lga)));
  const pollingUnits = Array.from(new Set(results.map(result => result.pollingUnit)));
  const positions = Array.from(new Set(results.map(result => result.position)));
  const candidates = Array.from(new Set(results.map(result => result.candidate)));

  return { states, lgas, pollingUnits, positions, candidates };
};
