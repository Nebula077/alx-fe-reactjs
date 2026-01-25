import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <Router>
    <div>
      <NavBar />
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
    </Router>
  );
}

export default App;