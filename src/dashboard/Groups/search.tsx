
import React, { useState } from 'react';
import { Group } from './groups.interfaces';


interface GroupSearchProps {
  groups: Group[];
  onSearchResults: (results: Group[]) => void;
}

const GroupSearch: React.FC<GroupSearchProps> = ({ groups, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = groups.filter(group =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (group.pollingUnit && group.pollingUnit.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (group.lga && group.lga.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (group.state && group.state.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    onSearchResults(results);
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Search Groups</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default GroupSearch;
