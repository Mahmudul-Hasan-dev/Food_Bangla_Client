import React from 'react';
import { Button, Card, Container,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const Chefs = ({chef}) => {
    
    const {id, Chef_Name,Chef_Picture,Years_of_experience,Numbers_of_recipes,Likes}= chef
    return (
         <Container>
            <Card>
            <LazyLoad height={200}  >
                <Card.Img variant="top" src={Chef_Picture} height={'200px'} rouded />
            </LazyLoad>
                
                    <Card.Body>
                        <Card.Title className='fs-1'>{Chef_Name}</Card.Title>
                        <Card.Text>
                            <h4>Recipes: {Numbers_of_recipes}</h4>
                            <h5>Years of experience: {Years_of_experience}</h5>
                            <p>Likes: {Likes}</p>
                        </Card.Text>
                       <Link to={`/recipe/${id}`}> <Button variant="primary">View Recipes</Button></Link>
                    </Card.Body>
            </Card>
         </Container>               
           
               
 

     
    );
};

export default Chefs;