import RecipeList from "./RecipeList";
import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  return <button onClick={() => deleteRecipe(recipeId)}>Delete</button>;

};

export default DeleteRecipeButton;
