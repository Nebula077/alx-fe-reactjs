 import useRecipeStore from './recipeStore';
 import EditRecipeForm from './EditRecipeForm';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    if (recipes.length === 0) {
      return <p>No recipes found.</p>;
    }




    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3> 
            <p>{recipe.description}</p>
            <input type="checkbox" /><button className='delete' onClick={() => deleteRecipe(recipe.id)}>Delete</button><button className='edit' onClick={() => editRecipe(recipe.id, { title: 'Updated Title', description: 'Updated Description' })}>Edit</button>
            <hr />
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;