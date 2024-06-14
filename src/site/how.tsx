// src/components/HowItWorks.tsx
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Step 1</h3>
            <p>We deploy trained observers to monitor polling stations.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Step 2</h3>
            <p>Observers report data in real-time through our secure platform.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Step 3</h3>
            <p>We analyze the data and provide accurate, up-to-date results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
