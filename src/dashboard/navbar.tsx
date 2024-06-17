import React from 'react';
import filterimg from '../../assets/filterimg.svg';
import { FiSearch } from 'react-icons/fi';
// import { useDarkMode } from '../darkmode';

export const Navbar: React.FC = () => {
    // const { isDarkMode, toggleDarkMode } = useDarkMode();
    const isDarkMode = false
    return (
        <div>
            {/* Navbar for Large Screens */}
            <div className={`hidden lg:flex justify-between w-full items-center p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
                <div className='flex gap-x-6 ml-6'>
                    <div className="relative flex">
                        <FiSearch size={20} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className={`py-4 px-12 rounded-lg focus:outline-none ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-slate-200 text-black'}`}
                        />
                    </div>
                    <button className='bg-blue-600 rounded-xl px-6 py-3 font-semibold text-white flex flex-row gap-x-6' type="button">
                        Filter
                        <span><img className='h-6 w-6' src={filterimg} alt="Filter icon" /></span>
                    </button>
                </div>
                <div className="flex gap-x-4">
                    <div>
                        {/* {isDarkMode ? (
                            <DarkModeSolid className='h-7' onClick={toggleDarkMode} />
                        ) : (
                            <DarkModeOutline className='h-7' onClick={toggleDarkMode} />
                        )} */}
                    </div>
                    <a href="#" className={`hover:text-blue-500 ${isDarkMode ? 'text-white' : 'text-black'}`}>Link 1</a>
                    <a href="#" className={`hover:text-blue-500 ${isDarkMode ? 'text-white' : 'text-black'}`}>Link 2</a>
                    <a href="#" className={`hover:text-blue-500 ${isDarkMode ? 'text-white' : 'text-black'}`}>Link 3</a>
                    <a href="#" className={`hover:text-blue-500 ${isDarkMode ? 'text-white' : 'text-black'}`}>Link 4</a>
                </div>
            </div>
        </div>
    );
};
