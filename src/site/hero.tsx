import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-800 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Welcome to ElectionMonitor</h1>
      <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
        Ensuring the integrity and transparency of elections worldwide. Stay updated with real-time results and in-depth analysis.
      </p>
      <div>
        <a href="#live-results" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mr-4 transition duration-300">
          Live Results
        </a>
        <a href="#about" className="bg-transparent border border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-blue-800 transition duration-300">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;
