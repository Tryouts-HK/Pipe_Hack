import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#" className="text-2xl font-bold">ElectionMonitor</a>
        </div>
        <div className="space-x-4 mb-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#live-results" className="hover:text-gray-300">Live Results</a>
          <a href="#reports" className="hover:text-gray-300">Reports</a>
          <a href="#analysis" className="hover:text-gray-300">Analysis</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
        <div className="text-gray-400">
          &copy; {new Date().getFullYear()} ElectionMonitor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
