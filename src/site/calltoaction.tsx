import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-blue-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Join us in promoting transparent and fair elections. Whether you're a volunteer, observer, or supporter, your contribution matters.
        </p>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
