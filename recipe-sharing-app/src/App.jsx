import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import { Route } from "react-router-dom";
import DeleteRecipeButton from "./components/DeleteRecipeButton";
import SearchBar from "./components/SearchBar";
import RecommendationsList from "./components/RecommendationsList";
import FavoritesList from "./components/FavoritesList";


const App = () => {

<Routes>
      <Route path="/RecipeDetails" element={<RecipeDetails />} />
      <Route path="/EditRecipe" element={<EditRecipeForm />} />
      <Route path="/DeleteRecipe" element={<DeleteRecipeButton />} />
      <Route path="/RecommendationsList" element={<RecommendationsList />} />
      <Route path="/FavoritesList" element={<FavoritesList />} />
</Routes>


  return (
    <div style={{ display: 'inline-block', justifyContent: 'space-between', gap: '20px', alignItems: 'center' }}>

      <NavBar />
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;