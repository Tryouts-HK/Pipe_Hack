import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to ElectionMonitor</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our mission is to ensure the integrity and transparency of elections worldwide. Explore our site to stay updated with live results, in-depth analysis, and detailed reports.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
