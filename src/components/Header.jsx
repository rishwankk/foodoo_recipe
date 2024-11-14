import React from 'react';
import Logo from "../assets/logo.jpeg";
import { BiSortAlt2 } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import Button from './Button';

const Header = ({ setSearchQuery }) => {

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='w-full flex bg-[#FCF4F1] rounded-t-xl fixed top-0 left-0 z-10'>
      <div className="max-w-[200px]">
        <img src={Logo} className="rounded-tl-xl" alt="Logo" />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex w-full px-5 relative">
          <input
            className='bg-[#FCF4F1] shadow-xl p-2 rounded w-80 pl-10' 
            type="text"
            placeholder="Enter your search request here..."
            onChange={handleSearchChange}
          />
          <BiSearch className="absolute left-8 top-5 transform -translate-y-1/2 text-gray-600" />
        </div>
      
        <div className="flex items-center space-x-4 px-5 pr-9">
          <BiSortAlt2 className="text-xl text-black" />
          <Button
            className="bg-[#DB3529] rounded-md h-9 w-28 font-mono font-bold text-white text-xs shadow-xl hover:text-black"
            label=" Go to Premium"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
