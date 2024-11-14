import React from 'react';
import Button from './Button';
import chef from "../assets/chef3.png";

const withAdditionalData = (Component) => {
  return (props) => {
    if (props.index === 3) {
      return (
        <div className="bg-green-300 rounded-lg w-56 h-72 mt-10 relative overflow-hidden">
          <div className="absolute -top-2 right-0 left-0">
            <Button label="Pro" className="bg-black text-white w-10 m-5 rounded-lg" />
          </div>
          <div className="mt-10 ml-5">
            <h1 className='font-bold text-white font-dancing text-4xl'>
              Mentorship Program
            </h1>
            <p className='text-sm mt-7 w-[90%] ml-4 text-white font-light '>
              A mentorship program is a program where a mentee works with a mentor to develop their skills.
            </p>
          </div>
          <div className="relative mt-5">
            <img
              src={chef}
              className="absolute bottom-[90px] left-48 transform -translate-x-2/4 scale-x-[-1] w-[60%] rounded-lg "
              alt="Chef"
            />
          </div>
        </div>
      );
    }

    return <Component {...props} />;
  };
};

export default withAdditionalData;
