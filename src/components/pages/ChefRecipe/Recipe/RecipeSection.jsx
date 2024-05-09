import React, { createContext, useEffect, useState } from 'react';
import Recipe from './Recipe';
import LatestRecipe from '../../Home/LatestRecipe/LatestRecipe';
import { key } from 'localforage';


const RecipeSection = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        fetch('https://food-bangla-server-phi.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='recipe-container' >

            {recipes &&
                recipes.slice(0, 3).map(recipe => <Recipe
                    key={recipe.id}
                    recipe={recipe}
                > </Recipe>,


                )
            }

        </div>
    );
};

export default RecipeSection;