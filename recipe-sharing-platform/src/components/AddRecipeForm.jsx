import React from 'react'
import { useState } from 'react'

function AddRecipeForm() {

  const [formData, setFormData] = React.useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.summary.trim()) {
      newErrors.summary = 'Summary is required';
    }
    if (!formData.image.trim()) {
      newErrors.image = 'Image URL is required';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    }
    if (!formData.steps.trim()) {
      newErrors.steps = 'Steps are required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    } else {
      console.log('Form validation failed');
    }
  };

const handleInputChange = (e) => {
    const { name } = e.target;
    const value = e.target.value;
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
        {errors.title && <p className='text-red-500 text-sm mb-4'>{errors.title}</p>}
        <label htmlFor="summary">Summary:</label>
        <textarea id="summary" name="summary" value={formData.summary} onChange={handleInputChange} className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        {errors.summary && <p className='text-red-500 text-sm mb-4'>{errors.summary}</p>}
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleInputChange} className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        {errors.image && <p className='text-red-500 text-sm mb-4'>{errors.image}</p>}
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleInputChange} className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        {errors.ingredients && <p className='text-red-500 text-sm mb-4'>{errors.ingredients}</p>}
        <label htmlFor="steps">Steps:</label>
        <textarea id="steps" name="steps" value={formData.steps} onChange={handleInputChange} className='border-2 border-gray-300 rounded-lg p-2 mb-4 w-full' />
        {errors.steps && <p className='text-red-500 text-sm mb-4'>{errors.steps}</p>}
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'>Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipeForm