import { useState } from 'react';
import './grid.css';

const sampleData = [
  { pu: 'PU001', state: 'Lagos', lga: 'Ikeja', position: 'President', candidate: 'Candidate A', votes: 100 },
  { pu: 'PU002', state: 'Lagos', lga: 'Lagos Island', position: 'Governor', candidate: 'Candidate B', votes: 150 },
  { pu: 'PU003', state: 'Abuja', lga: 'Municipal Area Council', position: 'President', candidate: 'Candidate C', votes: 120 },
  { pu: 'PU004', state: 'Kano', lga: 'Kano Municipal', position: 'Governor', candidate: 'Candidate D', votes: 80 },
  // { pu: 'PU005', state: 'Kaduna', lga: 'Kaduna North', position: 'Senator', candidate: 'Candidate E', votes: 200 },
  // { pu: 'PU006', state: 'Enugu', lga: 'Enugu East', position: 'House of Reps', candidate: 'Candidate F', votes: 300 },
  // { pu: 'PU007', state: 'Rivers', lga: 'Port Harcourt', position: 'President', candidate: 'Candidate G', votes: 180 },
  // { pu: 'PU008', state: 'Ogun', lga: 'Abeokuta', position: 'Governor', candidate: 'Candidate H', votes: 90 },
  // { pu: 'PU009', state: 'Kwara', lga: 'Ilorin', position: 'House of Assembly', candidate: 'Candidate I', votes: 110 },
  // { pu: 'PU010', state: 'Plateau', lga: 'Jos North', position: 'President', candidate: 'Candidate J', votes: 220 },
  // { pu: 'PU011', state: 'Benue', lga: 'Makurdi', position: 'Governor', candidate: 'Candidate K', votes: 250 },
  // { pu: 'PU012', state: 'Cross River', lga: 'Calabar South', position: 'Senator', candidate: 'Candidate L', votes: 130 },
  // { pu: 'PU013', state: 'Ekiti', lga: 'Ado-Ekiti', position: 'House of Reps', candidate: 'Candidate M', votes: 170 },
  // { pu: 'PU014', state: 'Ondo', lga: 'Akure South', position: 'President', candidate: 'Candidate N', votes: 140 },
  // { pu: 'PU015', state: 'Osun', lga: 'Osogbo', position: 'Governor', candidate: 'Candidate O', votes: 95 },
  // { pu: 'PU016', state: 'Niger', lga: 'Minna', position: 'House of Assembly', candidate: 'Candidate P', votes: 160 },
  // { pu: 'PU017', state: 'Anambra', lga: 'Awka', position: 'President', candidate: 'Candidate Q', votes: 210 },
  // { pu: 'PU018', state: 'Imo', lga: 'Owerri', position: 'Governor', candidate: 'Candidate R', votes: 145 },
  // { pu: 'PU019', state: 'Borno', lga: 'Maiduguri', position: 'Senator', candidate: 'Candidate S', votes: 190 },
  // { pu: 'PU020', state: 'Bauchi', lga: 'Bauchi', position: 'House of Reps', candidate: 'Candidate T', votes: 85 }
];

export const Grid = () => {
  const [data] = useState(sampleData);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Recent Results</h1>
      </div>
      <div className='flex overflow-x-auto'>
      <div className="flex overflow-x-auto text-white font-bold text-xl">
        {data.map((item, index) => (
          <div key={index} className="grid-item">
            <h2 className="text-2xl mb-2">Polling Unit: {item.pu}</h2>
            <p>State: {item.state}</p>
            <p>LGA: {item.lga}</p>
            <p>Position: {item.position}</p>
            <p>Candidate: {item.candidate}</p>
            <p>Votes: {item.votes}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Grid;
