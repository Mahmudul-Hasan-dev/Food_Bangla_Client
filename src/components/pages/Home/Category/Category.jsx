import React from 'react';
import {  Container, Image } from 'react-bootstrap';

const Category = ({category}) => {
    const {id, category_name, image}= category;
    return (
        <Container  className='ms-5 '>
         <span >
            <Image src={image} roundedCircle width={'150px'} height={'150px'}  />
            <h5 className='mt-1 ms-4 ps-1'>{category_name}</h5>
         </span>
          
           
        </Container>
    );
};

export default Category;