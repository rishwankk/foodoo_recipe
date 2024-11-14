import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import RecipieCard from './RecipieCard';
import mockData from '../constants/mockdata';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulate an API call with a timeout
    const fetchRecipes = () => {
      setTimeout(() => {
        setRecipes(mockData); // Set the mock data after a delay
        setLoading(false); // Set loading to false once data is fetched
      }, 1000); // Delay of 1000ms (1 second)
    };

    fetchRecipes();
  }, []);

  return (
    <div className="bg-[#FCF4F1] ml-5">
      <div>
        <Heading />
      </div>

      {/* Show a loading message or spinner if loading */}
      {loading ? (
        <div className="text-center text-xl text-gray-600">Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {recipes.map((recipe) => (
            <RecipieCard
              key={recipe.id} // Use a unique key for each item
              image={recipe.image}
              title={recipe.title}
              difficulty={recipe.difficulty}
              time={recipe.time}
              calories={recipe.calories}
              foodType={recipe.foodType}
              rating={recipe.rating}
              icon={recipe.icon}

             
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
