import React, { useState } from 'react';
import { Group } from './groups.interfaces';
import GroupCreationForm from './form';
import GroupSearch from './search';
import GroupDetails from './detail';
import GroupList from './list';

const GroupsPage: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [searchResults, setSearchResults] = useState<Group[]>([]);
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCreateGroup = (group: Group) => {
    setGroups((prevGroups) => [...prevGroups, group]);
  };

  const handleSearchResults = (results: Group[]) => {
    setSearchResults(results);
  };

  const handleSelectGroup = (group: Group) => {
    setSelectedGroup(group);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Discussion Groups</h1>
      
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleModal}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Create Group
        </button>
      </div>

      {isModalOpen && (
        <GroupCreationForm onCreateGroup={handleCreateGroup} isOpen={isModalOpen} onClose={toggleModal} />
      )}
      
      <GroupSearch groups={groups} onSearchResults={handleSearchResults} />
      
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setView('list')}
          className={`mr-2 py-2 px-4 rounded ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          List View
        </button>
        <button
          onClick={() => setView('grid')}
          className={`py-2 px-4 rounded ${view === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Grid View
        </button>
      </div>

      {selectedGroup ? (
        <GroupDetails group={selectedGroup} />
      ) : (
        <GroupList
          groups={searchResults.length > 0 ? searchResults : groups}
          view={view}
          onSelectGroup={handleSelectGroup}
        />
      )}
    </div>
  );
};

export default GroupsPage;
