import React from 'react'

function AddRecipeForm() {

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
  };


  return (
    <div className='container mx-auto w-full max-w-xl p-4 bg-gray-100 rounded-lg shadow-md'>
      <h3 className='text-center text-xl font-bold mb-4'>Add New Recipe</h3>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        <label htmlFor="summary">Summary:</label>
        <textarea id="summary" name="summary" className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea id="ingredients" name="ingredients" className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        <label htmlFor="cooking-instructions">cooking Instructions:</label>
        <textarea id="cooking-instructions" name="cooking-instructions" className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipeForm