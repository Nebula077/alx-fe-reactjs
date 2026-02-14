import React, { useState, useEffect } from 'react'
import data from '../data.json'

function HomePage() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setRecipes(data)
    setLoading(false)
  }, [])

  return (
    <div>
      <h3 className='text-blue-500 text-2xl md:text-3xl flex justify-center '>Recipe Sharing Platform</h3>
        {loading ? (
          <p>Loading recipes...</p>
        ) : (
          recipes.map(recipe => (
            <div key={recipe.id} className='container mx-auto p-4 border-2 shadow-amber-100 border-gray-300 rounded-lg mb-4 flex flex-col items-center bg-amber-100 hover:bg-amber-200 transition duration-300 top-1.5 xl:w-1/2 xl:grid-cols-3 lg:w-1/2 lg:grid-cols-3 md:w-full md:grid-cols-2 sm:w-full sm:grid-cols-1'>
              <h2 className='font-medium text-neutral-900'>{recipe.title}</h2>
              <p>{recipe.summary}</p>
              <img src={recipe.image} alt={recipe.title} className='w-48 h-48 object-cover rounded'/>
            </div>
          ))
        )}
    </div>
  )
}

export default HomePage