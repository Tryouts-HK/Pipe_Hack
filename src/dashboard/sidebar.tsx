import aclogo from '../../assets/aclogo.svg'
import atlogo from '../../assets/atlogo.svg'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/16/solid';
// import { useDarkMode } from '../darkmode';
import { Navbar } from './navbar';
import { Home } from './Home/home';
import { Monitor } from './Monitor/monitor';
import { Groups } from './Groups/groups';
import { Upload } from './Upload/upload2';
import { Results } from './Results/results';
import { Messaging } from './Messages/messaging';
import { Complaints } from './Complaints/complaints';

const tabs = [
    { name: 'Home', icon: aclogo },
    { name: 'Monitor', icon: aclogo },
    { name: 'Results', icon: aclogo },
    { name: 'Upload', icon: aclogo },
    { name: 'Complaints', icon: aclogo },
    { name: 'Messages', icon: aclogo },
    { name: 'Groups', icon: aclogo },
];

export const Sidebar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Home');
    // const { isDarkMode, toggleDarkMode } = useDarkMode()
    const isDarkMode = false


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    // Map of tab names to their corresponding components
    const tabComponents: { [key: string]: React.ReactNode } = {
        'Home': <Home />,
        'Monitor': <Monitor />,
        'Results': <Results />,
        'Upload': <Upload />,
        'Messages': <Messaging />,
        'Complaints': <Complaints />,
        'Groups': <Groups />,
    };
    return (
        <div className={`${isDarkMode ? `bg-white` : 'bg-black'}`}>
            <div className={`flex flex-col lg:flex-row ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
                {/* Sidebar (Large Screens) */}
                <div className={`hidden lg:block w-80 p-4 h-screen overflow-y-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                    <img src={atlogo} alt="AC Logo" className="h-48 w-48 -mt-16 mx-4" />
                    <ul className='-mt-10'>
                        {tabs.map((tab, index) => (
                            <div key={index} className={`font-bold hover:bg-blue-200 hover:text-blue-600 px-8 py-4 cursor-pointer rounded-xl ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                                <li onClick={() => handleTabClick(tab.name)} className={selectedTab === tab.name ? 'flex items-center gap-x-4 text-blue-500 cursor-pointer' : 'flex items-center cursor-pointer gap-x-4'}>
                                    {tab.icon && <img src={tab.icon} alt={tab.name} className="h-6 w-6 mr-2" />}
                                    <div className="flex flex-col">
                                        <span className='hover:text-blue-600'>{tab.name}</span>
                                    </div>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>

                {/* Menu Button (Small Screens) */}
                <div className='m-3 flex gap-x-4'>
                    <div className='flex flex-row'>
                        <button className={`lg:hidden w-12 h-12 p-2 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} onClick={toggleMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        <div className='pl-4'>
                            <img src={atlogo} alt="AC Logo" className="h-12 w-36 lg:hidden" />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='lg:hidden mt-3 flex'>
                            {/* {isDarkMode ? (
                                <DarkModeSolid className='h-7' onClick={toggleDarkMode} />
                            ) : (
                                <DarkModeOutline className='h-7' onClick={toggleDarkMode} />
                            )} */}
                        </div>
                    </div>
                </div>

                {/* Sidebar Content (Small Screens) */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        className={`lg:hidden fixed top-0 gap-y-5 left-0 p-4 h-full w-full overflow-y-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
                    >
                        <div className='flex justify-end'>
                            <button className={`px-3 py-2 rounded flex justify-end mb-4 mx-4 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`} onClick={toggleMenu}><XMarkIcon className='h-8' /></button>
                        </div>
                        <ul className='gap-y-5'>
                            {tabs.map((tab, index) => (
                                <div key={index} className={`hover:bg-blue-200 ${isDarkMode ? 'hover:bg-gray-700' : ''} gap-y-5`}>
                                    <li onClick={() => handleTabClick(tab.name)} className={selectedTab === tab.name ? 'flex items-center text-blue-500 cursor-pointer' : 'flex items-center cursor-pointer my-6'}>
                                        {tab.icon && <img src={tab.icon} alt={tab.name} className="h-6 w-6 mr-2" />}
                                        <div className="flex flex-col text-3xl">
                                            <span>{tab.name}</span>
                                        </div>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </motion.div>
                )}

                {/* Content */}
                <div className={`lg:flex lg:h-screen flex-col border-x-2 h-screen ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-slate-300 text-black border-gray-300'} ${isMenuOpen ? 'hidden lg:block' : ''} w-full max-h-screen`}>
                    <div>
                        <Navbar />
                    </div>
                    <div className={`mt-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-slate-300 text-black'}`}>
                        {tabComponents[selectedTab]}
                    </div>
                </div>
            </div>
        </div>
    );
};
