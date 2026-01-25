import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', marginTop: '20px', backgroundColor: '#f0f0f0', justifyContent: 'center' }}>
            <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Home</Link>
            <Link to="/RecipeDetails" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>RecipeDetails</Link>
            <Link to="/EditRecipe" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>EditRecipe</Link>
            <Link to="/DeleteRecipe" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>DeleteRecipe</Link>
        </nav>
    );
}

export default NavBar;