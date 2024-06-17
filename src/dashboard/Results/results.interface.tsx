export interface Result {
    pollingUnit: string;
    state: string;
    lga: string;
    position: string;
    candidate: string;
    votes: number;
  }
  
  export interface FilterOptions {
    states: string[];
    lgas: string[];
    pollingUnits: string[];
    positions: string[];
    candidates: string[];
  }
  