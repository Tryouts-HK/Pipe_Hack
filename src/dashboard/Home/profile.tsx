// Profile.tsx
import React, { useState } from 'react';
import { useUser } from '../../user';
import { useNavigate } from 'react-router-dom';

export const DashProfile: React.FC = () => {
  const { user, setUser } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    // Implement your logout logic here
    setUser(null);
    navigate('/login'); 
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full mr-2" />
        <span className="font-semibold">{user.name}</span>
      </div>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <button
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={() => navigate('/profile')}
          >
            Profile
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};


