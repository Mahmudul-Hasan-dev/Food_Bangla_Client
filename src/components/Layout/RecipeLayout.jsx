import React from 'react';
import MenuBar from '../pages/Shared/MenuBar/MenuBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const RecipeLayout = () => {
    return (
        <div>
           <MenuBar></MenuBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;