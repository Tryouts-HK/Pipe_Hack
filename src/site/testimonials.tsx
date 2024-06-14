import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What People Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="italic">"ElectionMonitor provides reliable and accurate data. Highly recommended!"</p>
            <p className="font-bold mt-2">- Jane Doe, Political Analyst</p>
          </div>
          <div>
            <p className="italic">"Their real-time results kept us informed throughout the election day."</p>
            <p className="font-bold mt-2">- John Smith, Journalist</p>
          </div>
          <div>
            <p className="italic">"A trustworthy source for election monitoring and analysis."</p>
            <p className="font-bold mt-2">- Sarah Lee, NGO Worker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
