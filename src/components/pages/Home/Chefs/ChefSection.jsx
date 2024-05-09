import React, { useEffect, useState } from 'react';
import Chefs from './Chefs';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://food-bangla-server-phi.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='chefs-container my-4 mx-5'>

            {
                chefs.map(chef => <Chefs
                    key={chef.id}
                    chef={chef}
                ></Chefs>)
            }
        </div>
    );
};

export default ChefSection;