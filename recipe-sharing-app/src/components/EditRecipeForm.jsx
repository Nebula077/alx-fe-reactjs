import AddRecipeForm from "./AddRecipeForm";
import React, { useState } from "react";

const EditRecipeForm = ({ recipe, onSave }) => {
    const [title, setTitle] = useState(recipe.title);
    const [ingredients, setIngredients] = useState(recipe.ingredients);
    const [instructions, setInstructions] = useState(recipe.instructions);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({ ...recipe, title, ingredients, instructions });
    };  

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>   
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            </div>
            <div>
                <label>Instructions:</label>
                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
            </div>
            <button type="submit">Save</button>
        </form>
    );
}

export default EditRecipeForm;