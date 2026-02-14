import React from 'react'
import { useState } from 'react'

function AddRecipeForm() {

  const [formData, setFormData] = React.useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '',
    cooking_instructions: '',
  });
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  return (
    <div className='container mx-auto w-full max-w-xl p-4 bg-gray-100 rounded-lg shadow-md'>
      <h3 className='text-center text-xl font-bold mb-4'>Add New Recipe</h3>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        <label htmlFor="summary">Summary:</label>
        <textarea id="summary" name="summary" value={formData.summary} onChange={handleInputChange} className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleInputChange} className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleInputChange} className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        <label htmlFor="cooking_instructions">cooking Instructions:</label>
        <textarea id="cooking_instructions" name="cooking_instructions" value={formData.cooking_instructions} onChange={handleInputChange} className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipeForm