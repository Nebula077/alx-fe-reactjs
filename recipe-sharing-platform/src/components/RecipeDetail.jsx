import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import data from '../data.json'
import { useState, useEffect } from 'react'

function RecipeDetail() {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setRecipes(data)
        setLoading(false)
    }, [])  

    const showRecipe = () => {
        const recipe = recipes.find(r => r.id === parseInt(id))
        if (!recipe) {
            return <p>Recipe not found</p>
        }
        return (
            <div className='container mx-auto p-4 content-between border-amber-50 rounded-2xl bg-gray-500 lg:w-1/2 md:w-full sm:w-full'>
                <h2 className='font-sans text-2xl text-green-400 p-1.5 mx-auto content-center'>{recipe.title}</h2>
                <p className='font-serif justify-center p-0.5 mx-auto'>{recipe.summary}</p>
                <img src={recipe.image} alt={recipe.title} className='p-1.5 w-48 h-48 rounded-2xl mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out'/>
                <h4 className='text-blue-400 font-bold p-1.5 hover:text-blue-600 hover:translate-y-1'>Cooking Instructions</h4>
                <p>{recipe.cooking_instructions}</p>
            </div>
        )
    }

  return (
    <div>{loading ? <p>Loading...</p> : showRecipe()} </div>
  )
}

export default RecipeDetail