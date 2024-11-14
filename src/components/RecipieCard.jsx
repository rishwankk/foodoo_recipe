import React from 'react';
import Button from './Button';

const Card = ({ image, title, difficulty, time, calories, foodType, rating, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-56 mt-12 hover:scale-110">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-full -mt-10 mb-4 object-cover border-4 border-white shadow-lg"
      />
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(difficulty)}`}>
        {difficulty}
      </span>
      <div className="flex justify-between w-full text-gray-600 text-sm mt-4 mb-2">
        <div className="flex flex-col items-center">
          <span>{time} </span>
          <span>Min</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{calories} </span>
          <span>Kcal</span>
        </div>
        <div className="flex flex-col items-center">
          {/* Directly render the icon */}
          {icon}
          <span>{foodType}</span>
        </div>
      </div>
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`text-red-500 ${index < rating ? '' : 'opacity-30'}`}>
            ★
          </span>
        ))}
      </div>
      <Button
        className={`mt-4 py-2 border-t-[1px] font-mono border-black text-black rounded-lg shadow-xl w-full hover:bg-[#DB3529] hover:text-white `}
        label="Start Cooking"
      />
    </div>
  );
};

// Helper function to get difficulty color
const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-200 text-green-700';
    case 'Intermediate':
      return 'bg-yellow-200 text-yellow-700';
    case 'Advanced':
      return 'bg-red-200 text-red-700';
    default:
      return 'bg-gray-200 text-gray-700';
  }
};

export default Card;
