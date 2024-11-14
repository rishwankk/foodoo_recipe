// src/pages/Recipes.js
import React, { useEffect, useState } from 'react';
import Food1 from "../assets/food/food1.png";
import Food2 from "../assets/food/food2.png";
import RecipieCard from '../components/RecipieCard';
// Mock data array
const recipes = [
  {
    id: 1,
    image: Food1,
    title: "Noodle chicken soup",
    difficulty: "Intermediate",
    time: 25,
    calories: 95,
    foodType: "Meat",
    rating: 4,
  },
  {
    id: 2,
    image: Food1,
    title: "Salad with raw tuna",
    difficulty: "Advanced",
    time: 25,
    calories: 95,
    foodType: "Fish",
    rating: 5,
  },
  {
    id: 3,
    image: Food1,
    title: "Pasta with spinach",
    difficulty: "Beginner",
    time: 20,
    calories: 80,
    foodType: "Veg",
    rating: 3,
  },
  {
    id: 4,
    image: Food1,
    title: "Cucumber salad",
    difficulty: "Advanced",
    time: 15,
    calories: 50,
    foodType: "Veg",
    rating: 4,
  },
  {
    id: 5,
    image: Food1,
    title: "Masala tofu",
    difficulty: "Beginner",
    time: 30,
    calories: 90,
    foodType: "Veg",
    rating: 5,
  },
  {
    id: 6,
    image: Food2,
    title: "Pork medallions",
    difficulty: "Advanced",
    time: 40,
    calories: 150,
    foodType: "Meat",
    rating: 4,
  },
  {
    id: 7,
    image: Food2,
    title: "Fruit bowl",
    difficulty: "Intermediate",
    time: 10,
    calories: 60,
    foodType: "Veg",
    rating: 3,
  },
  {
    id: 8,
    image: Food2,
    title: "Grilled salmon",
    difficulty: "Intermediate",
    time: 35,
    calories: 120,
    foodType: "Fish",
    rating: 5,
  },
  {
    id: 9,
    image: Food2,
    title: "Chicken Caesar wrap",
    difficulty: "Beginner",
    time: 20,
    calories: 110,
    foodType: "Meat",
    rating: 4,
  },
  {
    id: 10,
    image: Food2,
    title: "Vegetable stir-fry",
    difficulty: "Intermediate",
    time: 25,
    calories: 100,
    foodType: "Veg",
    rating: 5,
  },
];

const Recipes = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    // Simulate an API call with a timeout
    const fetchRecipes = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      setRecipeList(recipes); // Set the mock data
    };

    fetchRecipes();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      
    </div>
  );
};

export default Recipes;
