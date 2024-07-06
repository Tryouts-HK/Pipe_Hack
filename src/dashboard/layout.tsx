import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';
// import { DashProfile } from './profile';
import ProfileNav from './nav';


const Layout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <div>
        {/* <DashProfile /> */}
        <ProfileNav />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
