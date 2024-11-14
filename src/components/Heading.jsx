import React from 'react';
import HeadingLogo from "../assets/Heading.png";

const Heading = () => {
  return (
    <div className='flex justify-between'>
      <div className="">
        <div className="ml-7 flex space-x-5">
          <img src={HeadingLogo} className='max-w-16 rounded-full object-cover max-h-20' alt="Heading" />
          <h1 className='font-bold flex items-center font-dancing text-5xl'>
            Only the best recipes!
          </h1>
        </div>
        <h3 className='ml-[115px] opacity-40'>Today's new recipes for you</h3>
      </div>
      <div className="flex items-center space-x-10 mr-5">
        <div className="flex flex-col items-center">
          <h1 className='text-5xl font-dancing font-bold'>168</h1>
          <p className='opacity-30 text-sm'>New Recipes</p>
        </div>
        
        {/* Vertical Border */}
        <div className="border-l-2 border-black h-16 opacity-30"></div> {/* Added this div for vertical line */}
        
        <div className="flex flex-col items-center">
          <h1 className='text-5xl font-dancing font-bold'>120</h1>
          <p className='opacity-30 text-sm'>Popular Recipes</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
