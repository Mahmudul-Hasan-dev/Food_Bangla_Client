import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeSection from '../Recipe/RecipeSection';

const ChefRecipe = () => {
    
    const chefRecipes = useLoaderData();
    const { Chef_Name,Chef_Picture,Years_of_experience,Numbers_of_recipes,Likes,Bio } = chefRecipes
    return (
        <Container>
            <h1>Chef's Recipe</h1>
            <div className="card my-3 bg-light" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={Chef_Picture} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{Chef_Name}</h3>
                        <p className="card-text">{Bio}</p>
                        <h4>Recipes: {Numbers_of_recipes}</h4>
                            <h5>Years of experience: {Years_of_experience}</h5>
                            <p>Likes: {Likes}</p>
                    </div>
                    </div>
                </div>
            </div>
          <RecipeSection></RecipeSection>
        </Container>
    );
};

export default ChefRecipe;