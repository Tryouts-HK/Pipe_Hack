import React, { useState } from 'react';
import { SettingsNavbar } from './navbar';
import { Prof } from './prof';
import { NotificationController } from './notifications';


export const Settings: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>('Home');
    const renderSelectedTab = () => {
      switch (selectedTab) {
        case 'Profile Settings':
          return <Prof />;
        case 'Security':
          return <Prof />;
        case 'Notification':
          return <NotificationController />;
        case 'Help Center':
          return <Prof/>;
        case 'Contact Us':
          return <Prof />;
        case 'Privacy Policy':
          return <Prof />;
        default:
          return <Prof />;
      }
    };
  
    return (
      <div className='mx-2 lg:mx-4'>
        <SettingsNavbar setSelectedTab={setSelectedTab} />
        {renderSelectedTab()}
      </div>
    );
  };
  
  
  