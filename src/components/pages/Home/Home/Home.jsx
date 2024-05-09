import React from 'react';
import './Home..css'
import ChefSection from '../Chefs/ChefSection';
import CategorySection from '../Category/CategorySection';
import Header from '../../Shared/Header/Header';
import LatestRecipeSection from '../LatestRecipe/LatestRecipeSection';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <h1 className='my-4 text-center'>Popular Categories</h1>
            <CategorySection></CategorySection>
            <h1 className='mt-3 text-center'>Famous Chefs</h1>
            <ChefSection></ChefSection>
            <h1 className='my-4 text-center'>Latest Recipes</h1>
            <LatestRecipeSection></LatestRecipeSection>
        </div>
    );
};

export default Home;