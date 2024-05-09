import React from 'react';
import { Card, Container } from 'react-bootstrap';

const LatestRecipe = ({recipe}) => {
    const {id, recipe_name, image} = recipe;

    return (
       <Container className='mb-5' >
         <Card >
            <Card.Img variant="top" src={image} height={'200px'} />
             <Card.Body>
            <Card.Title className='text-center'>{recipe_name}</Card.Title>
        </Card.Body>
      </Card>
       </Container>
    );
};

export default LatestRecipe;