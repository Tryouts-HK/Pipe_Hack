import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/16/solid';
import aclogo from '../../assets/aclogo.svg';
import atlogo from '../../assets/atlogo.svg';
import logo from '../../assets/electlogo.png';


const tabs = [
    { name: 'Home', icon: aclogo, path: '/dashboard' },
    { name: 'Search AI', icon: aclogo, path: '/dashboard/search-ai' },
    { name: 'Monitor', icon: aclogo, path: '/dashboard/monitor' },
    { name: 'Results', icon: aclogo, path: '/dashboard/results' },
    { name: 'Upload', icon: aclogo, path: '/dashboard/upload' },
    { name: 'Complaints', icon: aclogo, path: '/dashboard/complaints' },
    { name: 'Messages', icon: aclogo, path: '/dashboard/messages' },
    { name: 'Groups', icon: aclogo, path: '/dashboard/groups' },
    { name: 'Settings', icon: aclogo, path: '/dashboard/settings' },
];

export const Sidebar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isDarkMode = false;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            {/* <div className='flex justify-end ml-16'>
                adsf
            </div> */}
            <div className={`${isDarkMode ? 'bg-white' : 'bg-black'}`}>

                <div className={`flex border border-x-black flex-col lg:flex-row ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
                    {/* Sidebar (Large Screens) */}
                    <div className={`hidden lg:block w-80 p-4 h-screen overflow-y-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                        <div className='flex justify-between -mt-24 -mb-24'>
                            <Link to={'/dashboard'}>
                                <img src={logo} width={300} height={300} alt="AC Logo" />
                                {/* <h1 className='text-6xl font-bold text-black ml-5 mb-16'>ElectTra</h1>
                                 */}
                            </Link>
                        </div>
                        <ul className='-mt-10'>
                            {tabs.map((tab, index) => (
                                <div key={index} className={`font-bold hover:bg-blue-200 hover:text-black px-8 py-4 cursor-pointer rounded-xl ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                                    <li className={location.pathname === tab.path ? 'flex items-center gap-x-4 text-black cursor-pointer' : 'flex items-center cursor-pointer gap-x-4'}>
                                        <Link to={tab.path} className="flex items-center">
                                            {/* {tab.icon && <img src={tab.icon} alt={tab.name} className="h-6 w-6 mr-2" />} */}
                                            <div className="flex flex-col">
                                                <span className='hover:text-blue-600'>{tab.name}</span>
                                            </div>
                                        </Link>
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
                                        <li className={location.pathname === tab.path ? 'flex items-center text-blue-500 cursor-pointer' : 'flex items-center cursor-pointer my-6'}>
                                            <Link to={tab.path} className="flex items-center" onClick={toggleMenu}>
                                                {tab.icon && <img src={tab.icon} alt={tab.name} className="h-6 w-6 mr-2" />}
                                                <div className="flex flex-col text-3xl">
                                                    <span>{tab.name}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};
