import React, { useState } from 'react';

interface AnalyseResultFormProps {
  onSubmit: (formData: any) => void; // Callback function to handle form submission
}

const AnalyseResultForm: React.FC<AnalyseResultFormProps> = ({ onSubmit }) => {
  const [result, setResult] = useState('');
  const [party, setParty] = useState('');
  const [candidate, setCandidate] = useState('');
  const [state, setState] = useState('');
  const [lga, setLGA] = useState('');

  const parties = ['Party A', 'Party B', 'Party C']; // Replace with your list of parties
  const states = ['State A', 'State B', 'State C']; // Replace with your list of states
  const lgas = ['LGA A', 'LGA B', 'LGA C']; // Replace with your list of LGAs

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      result,
      party,
      candidate,
      state,
      lga
    };
    onSubmit(formData); // Call the onSubmit function passed from parent component
  };

  return (
    <form onSubmit={handleSubmitForm} className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Analyse Result</h2>
      <div className="mb-4">
        <label htmlFor="result" className="block text-sm font-medium text-gray-700">Result Text</label>
        <textarea
          id="result"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          rows={4}
          value={result}
          onChange={(e) => setResult(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="party" className="block text-sm font-medium text-gray-700">Party</label>
        <select
          id="party"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={party}
          onChange={(e) => setParty(e.target.value)}
          required
        >
          <option value="">Select Party</option>
          {parties.map((partyOption, index) => (
            <option key={index} value={partyOption}>{partyOption}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="candidate" className="block text-sm font-medium text-gray-700">Candidate</label>
        <input
          type="text"
          id="candidate"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={candidate}
          onChange={(e) => setCandidate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
        <select
          id="state"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        >
          <option value="">Select State</option>
          {states.map((stateOption, index) => (
            <option key={index} value={stateOption}>{stateOption}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="lga" className="block text-sm font-medium text-gray-700">Local Government Area (LGA)</label>
        <select
          id="lga"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={lga}
          onChange={(e) => setLGA(e.target.value)}
          required
        >
          <option value="">Select LGA</option>
          {lgas.map((lgaOption, index) => (
            <option key={index} value={lgaOption}>{lgaOption}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Analyze Result
        </button>
      </div>
    </form>
  );
};

export default AnalyseResultForm;
