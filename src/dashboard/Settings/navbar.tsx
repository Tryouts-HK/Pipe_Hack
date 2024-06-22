import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FiHelpCircle } from 'react-icons/fi';
import { MdContactPhone, MdNotificationsActive, MdPolicy, MdSecurity } from 'react-icons/md';


interface ProfileNavbarProps {
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

export const SettingsNavbar: React.FC<ProfileNavbarProps> = ({ setSelectedTab }) => {
//   const { isDarkMode } = useDarkMode();
const isDarkMode = false
  const tabs = [
    { name: 'Profile Settings', icon: CgProfile },
    { name: 'Security', icon: MdSecurity },
    { name: 'Notification', icon: MdNotificationsActive },
    { name: 'Help Center', icon: FiHelpCircle },
    { name: 'Contact Us', icon: MdContactPhone },
    { name: 'Privacy Policy', icon: MdPolicy }
  ];
  const [selectedTab, setSelectedTabState] = useState<string>(tabs[0].name);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setSelectedTabState(tab);
  };

  return (
    <div className="flex justify-start space-x-6 overflow-x-auto">
      <div className="relative flex items-center gap-10">
        <div className={`w-full h-0.5 absolute bottom-0 left-0 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
        {tabs.map(tab => (
          <div
            key={tab.name}
            className={`relative cursor-pointer transition duration-300 ${
              selectedTab === tab.name ? 'text-blue-600 font-medium' : `${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`
            }`}
            onClick={() => handleTabClick(tab.name)}
          >
            <div className="flex flex-row items-center">
              <tab.icon className="mr-2" />
              <span className="text-xl font-semibold whitespace-nowrap">{tab.name}</span>
            </div>
            <div className="mt-3">
              <div
                className={`w-full h-0.5 rounded-full ${
                  selectedTab === tab.name ? 'bg-blue-600' : `${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
