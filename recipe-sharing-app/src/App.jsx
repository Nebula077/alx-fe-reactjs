import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import { Route } from "react-router-dom";
import DeleteRecipeButton from "./components/DeleteRecipeButton";

const App = () => {

<Routes>
      <Route path="/RecipeDetails" element={<RecipeDetails />} />
      <Route path="/EditRecipe" element={<EditRecipeForm />} />
      <Route path="/DeleteRecipe" element={<DeleteRecipeButton />} />
</Routes>


  return (
    <div>
      <NavBar />
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;