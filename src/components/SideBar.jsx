import React from 'react';
import Logo from '../assets/logo.jpeg';
import User from '../assets/user.png';
import { BiSolidFoodMenu } from "react-icons/bi";
import MenuList from './MenuList';

const SideBar = () => {
  return (
    <div className="bg-white p-5 fixed top-[80px] left-0 bottom-0 sm:w-[200px] sm:h-screen rounded-bl-2xl">
      <div className="py-5 flex justify-center">
        <div className="relative w-20 h-20">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
            <circle className="text-gray-300" strokeWidth="2" stroke="currentColor" fill="transparent" r="16" cx="18" cy="18" />
            <circle className="text-orange-500" strokeWidth="2" strokeDasharray="25, 80" strokeDashoffset="25" stroke="currentColor" fill="transparent" r="17" cx="18" cy="18" strokeLinecap="round" />
          </svg>
          <div className="w-16 h-16 rounded-full overflow-hidden absolute top-2 left-2">
            <img src={User} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-xl -mt-3 font-bold font-dancing flex justify-center">Kristin Watson</p>
      <p className="opacity-30 text-xs font-mono flex justify-center">Chef de partie</p>

      <div className="flex justify-center mt-5 bg-white p-3 rounded-3xl shadow-xl w-[90px] h-9 ml-6 ">
        <BiSolidFoodMenu style={{ color: 'red', fontSize: '1rem' }} />
        <p className="text-black text-xs font-semibold pl-2">32</p>
      </div>

      <div className="pt-10 w-full flex justify-center">
        <MenuList />
      </div>

      
      <div className="relative flex items-center mt-32 lg:mt-10 max-w-[90px] justify-center ml-10">
        <img src={User} className="w-7 h-7 rounded-full object-cover mr-16" alt="User 1" />
        <img src={User} className="w-11 h-11 rounded-full object-cover border-2 border-white absolute left-6" alt="User 2" />
        <span className="absolute left-14 top-5 transform -translate-y-1/2 text-white text-sm bg-orange-600 rounded-full flex items-center justify-center w-6 h-6 font-semibold">
          +
        </span>
      </div>

      <p className="text-center font-bold font-mono text-xs mt-2 max-w-[150px]">
        Create a team and take part in <a className="underline text-sm">TV show!</a> 
      </p>
    </div>
  );
};

export default SideBar;
