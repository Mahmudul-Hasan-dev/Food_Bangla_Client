import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import MenuBar from '../pages/Shared/MenuBar/MenuBar';

const Main = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;