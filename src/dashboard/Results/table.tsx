import React from 'react';
import { Result } from './results.interface';


interface ResultsTableProps {
  results: Result[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Polling Unit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LGA</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Votes</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {results.map(result => (
            <tr key={`${result.pollingUnit}-${result.candidate}-${result.position}`}>
              <td className="px-6 py-4 whitespace-nowrap">{result.pollingUnit}</td>
              <td className="px-6 py-4 whitespace-nowrap">{result.state}</td>
              <td className="px-6 py-4 whitespace-nowrap">{result.lga}</td>
              <td className="px-6 py-4 whitespace-nowrap">{result.position}</td>
              <td className="px-6 py-4 whitespace-nowrap">{result.candidate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{result.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
