// src/components/Mission.tsx
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto">
          To promote fair and transparent elections by providing reliable monitoring, real-time results, and comprehensive analysis.
        </p>
      </div>
    </section>
  );
};

export default Mission;
