import React, { useEffect, useState } from 'react';
import Category from './Category';

const CategorySection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://food-bangla-server-phi.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='d-flex justify-content-center align-items-center '>
            {
                categories.map(category => <Category
                    key={category.id}
                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default CategorySection;