import React, { useEffect, useState } from 'react';
import Header from './Header';
import RecipieCard from './RecipieCard';
import mockData from '../constants/mockdata';
import Heading from './Heading';
import CardHoc from "./CardHoc";
import withAdditionalData from './CardHoc';


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const fetchRecipes = () => {
      setTimeout(() => {
        setRecipes(mockData); 
        setLoading(false); 
      }, 1000); 
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const EnhancedRecipieCard = withAdditionalData(RecipieCard);
  return (
    <div className="bg-[#FCF4F1] ml-5">
      <Header setSearchQuery={setSearchQuery} /> {/* Pass search query handler to Header */}
      
      <div className="mt-5">
        <Heading />
      </div>
      
      {loading ? (
        <div className="text-center text-xl text-gray-600">Loading...</div>
      ) : (
        <>
    
          {filteredRecipes.length === 0 ? (
            <div className="text-center text-xl text-gray-600">
              No items found for "{searchQuery}"
            </div>
          ) : (
            <div className="grid  gap-1 grid-cols-4">
              {filteredRecipes.map((recipe,index) => (
                <EnhancedRecipieCard
                  key={recipe.id}
                  index={index}
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
        </>
      )}
    </div>
  );
};

export default Home;
