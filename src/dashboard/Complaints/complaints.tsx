import React from 'react';

const pollingUnits = [
  { code: 'PU123', name: 'Polling Unit 1' },
  { code: 'PU456', name: 'Polling Unit 2' },
  // Add more polling units here
];

export const Complaints: React.FC = () => {
  const handleFormSubmit = (data: any) => {
    console.log('Complaint Data:', data);
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Submit a Complaint</h1>
      {/* <ComplaintForm onSubmit={handleFormSubmit} /> */}
    </div>
  );
};


