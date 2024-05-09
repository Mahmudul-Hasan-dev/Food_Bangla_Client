import React, { useEffect, useState } from 'react';
import LatestRecipe from './LatestRecipe';

const LatestRecipeSection = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://food-bangla-server-phi.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='latestRecipe-container' >

            {recipes &&
                recipes.map(recipe => <LatestRecipe

                    key={recipe.id}
                    recipe={recipe}
                > </LatestRecipe>


                )
            }

        </div>
    );
};

export default LatestRecipeSection;
