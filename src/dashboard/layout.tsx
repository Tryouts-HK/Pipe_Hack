import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';


const Layout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
