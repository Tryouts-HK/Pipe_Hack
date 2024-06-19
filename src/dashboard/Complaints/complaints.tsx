import React from 'react';
import { ComplaintForm } from './forms';

const pollingUnits = [
  { code: 'PU001', name: 'Abagana Central School' },
  { code: 'PU002', name: 'Ado Odo Primary School' },
  { code: 'PU003', name: 'Agidingbi Primary School' },
  { code: 'PU004', name: 'Ajah Town Hall' },
  { code: 'PU005', name: 'Akure High School' },
  { code: 'PU006', name: 'Amuwo Odofin Secondary School' },
  { code: 'PU007', name: 'Asaba Community Hall' },
  { code: 'PU008', name: 'Badagry Town Hall' },
  { code: 'PU009', name: 'Bauchi Central School' },
  { code: 'PU010', name: 'Benin Technical College' },
  { code: 'PU011', name: 'Calabar City Hall' },
  { code: 'PU012', name: 'Dutse Primary School' },
  { code: 'PU013', name: 'Ede Community Center' },
  { code: 'PU014', name: 'Enugu Central School' },
  { code: 'PU015', name: 'Epe Grammar School' },
  { code: 'PU016', name: 'Gombe Community Hall' },
  { code: 'PU017', name: 'Ibadan City Hall' },
  { code: 'PU018', name: 'Ikeja Primary School' },
  { code: 'PU019', name: 'Ikorodu Town Hall' },
  { code: 'PU020', name: 'Ile Ife Central School' },
  { code: 'PU021', name: 'Ilorin Community Hall' },
  { code: 'PU022', name: 'Jalingo Town Hall' },
  { code: 'PU023', name: 'Jos Community Center' },
  { code: 'PU024', name: 'Kaduna Central School' },
  { code: 'PU025', name: 'Kano Municipal School' },
  { code: 'PU026', name: 'Katsina Community Hall' },
  { code: 'PU027', name: 'Lagos Island School' },
  { code: 'PU028', name: 'Lokoja Central School' },
  { code: 'PU029', name: 'Makurdi City Hall' },
  { code: 'PU030', name: 'Minna Central School' },
  { code: 'PU031', name: 'Nsukka Primary School' },
  { code: 'PU032', name: 'Ondo Town Hall' },
  { code: 'PU033', name: 'Osogbo Community Hall' },
  { code: 'PU034', name: 'Owerri Central School' },
  { code: 'PU035', name: 'Port Harcourt Community Center' }
];


export const Complaints: React.FC = () => {
  const handleFormSubmit = (data: any) => {
    console.log('Complaint Data:', data);
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Submit a Complaint</h1>
      <ComplaintForm pollingUnits={pollingUnits} onSubmit={handleFormSubmit} />
    </div>
  );
};


