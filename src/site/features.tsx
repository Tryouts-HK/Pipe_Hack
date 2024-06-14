import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Live Results</h3>
            <p>Get real-time updates on election outcomes.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">In-depth Reports</h3>
            <p>Access detailed reports and analysis of election processes.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Secure Data</h3>
            <p>We use secure methods to ensure the integrity of our data.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
