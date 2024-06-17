// src/pages/ResultsPage.tsx
import React, { useState, useEffect } from 'react';
import { FilterOptions, Result } from './results.interface';
import { fetchResults, getFilterOptions } from './util.results';
import { Filter } from './filter';
import ResultsTable from './table';


const ResultsPage: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    states: [],
    lgas: [],
    pollingUnits: [],
    positions: [],
    candidates: [],
  });
  const [filters, setFilters] = useState({
    state: '',
    lga: '',
    pollingUnit: '',
    position: '',
    candidate: '',
  });

  useEffect(() => {
    const resultsData = fetchResults();
    setResults(resultsData);
    setFilterOptions(getFilterOptions(resultsData));
  }, []);

  const filteredResults = results.filter(result => {
    return (
      (filters.state === '' || result.state === filters.state) &&
      (filters.lga === '' || result.lga === filters.lga) &&
      (filters.pollingUnit === '' || result.pollingUnit === filters.pollingUnit) &&
      (filters.position === '' || result.position === filters.position) &&
      (filters.candidate === '' || result.candidate === filters.candidate)
    );
  });

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Election Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Filter
          label="State"
          options={filterOptions.states}
          selected={filters.state}
          onSelect={(value : any) => handleFilterChange('state', value)}
        />
        <Filter
          label="LGA"
          options={filterOptions.lgas}
          selected={filters.lga}
          onSelect={(value : any) => handleFilterChange('lga', value)}
        />
        <Filter
          label="Polling Unit"
          options={filterOptions.pollingUnits}
          selected={filters.pollingUnit}
          onSelect={(value : any) => handleFilterChange('pollingUnit', value)}
        />
        <Filter
          label="Position"
          options={filterOptions.positions}
          selected={filters.position}
          onSelect={(value : any) => handleFilterChange('position', value)}
        />
        <Filter
          label="Candidate"
          options={filterOptions.candidates}
          selected={filters.candidate}
          onSelect={(value : any) => handleFilterChange('candidate', value)}
        />
      </div>
      <ResultsTable results={filteredResults} />
    </div>
  );
};

export default ResultsPage;
