import React from 'react';

interface FilterProps {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ label, options, selected, onSelect }) => {
  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
      >
        <option value="">All</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};


