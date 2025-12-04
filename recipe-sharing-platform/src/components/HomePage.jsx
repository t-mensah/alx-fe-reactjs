


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mockRecipes from '../data.json'; // Adjust the path if necessary

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // In a real app, you might fetch data, but here we load the mock data directly
    setRecipes(mockRecipes);
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Recipe Sharing Platform</h1>
      
      {/* Responsive Grid Layout with Tailwind CSS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          // Wrap the entire card in a Link to make it clickable
          <Link 
            to={`/recipe/${recipe.id}`} 
            key={recipe.id} 
            className="block"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
              {/* Ensure the image URL is correct and resolves to an actual image */}
              <img 
                className="w-full h-48 object-cover" 
                src={recipe.image} 
                alt={recipe.title} 
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{recipe.title}</h2>
                <p className="text-gray-600 mb-4">{recipe.summary}</p>
                <span className="text-blue-500 hover:text-blue-600 font-semibold">
                  View Recipe
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;