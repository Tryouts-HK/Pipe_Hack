import React, { useState } from 'react';
import { Group } from './groups.interfaces';

interface GroupCreationFormProps {
  onCreateGroup: (group: Group) => void;
  isOpen: boolean;
  onClose: () => void;
}

const GroupCreationForm: React.FC<GroupCreationFormProps> = ({ onCreateGroup, isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pollingUnit, setPollingUnit] = useState('');
  const [lga, setLga] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newGroup: Group = {
      id: Date.now().toString(),
      name,
      description,
      pollingUnit,
      lga,
      state,
    };
    onCreateGroup(newGroup);
    setName('');
    setDescription('');
    setPollingUnit('');
    setLga('');
    setState('');
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Create New Group</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Group Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Polling Unit</label>
            <input
              type="text"
              value={pollingUnit}
              onChange={(e) => setPollingUnit(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">LGA</label>
            <input
              type="text"
              value={lga}
              onChange={(e) => setLga(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default GroupCreationForm;
