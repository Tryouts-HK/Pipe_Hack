import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#">ElectionMonitor</a>
        </div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#live-results" className="hover:text-gray-300">Live Results</a>
          <a href="#reports" className="hover:text-gray-300">Reports</a>
          <a href="#analysis" className="hover:text-gray-300">Analysis</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
