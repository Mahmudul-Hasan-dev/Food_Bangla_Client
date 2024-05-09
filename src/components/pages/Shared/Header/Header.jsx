import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="banner">
                 <h1 className='banner-text py-3  text-center'>Food Bangla</h1>
                 <h1 className='banner-text2 text-white text-center'>Enjoy Cooking</h1>
                 <h2 className='text-light text-center'>
                    "Browse through over 100 tasty recipes"
                 </h2>
            </div>
        </div>
    );
};

export default Header;