import React from 'react';
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const notify = () => toast('the recipe is your favorite');
const Recipe = ({recipe}) => {
    const {id,recipe_name, ingredients,cooking_method,rating,image}=recipe
    return (
       <Container className='my-5'>
           <Card >
        <Card.Img variant="top" src={image} height={'200px'} />
        <Card.Body>
        <Card.Title className='fs-2'>{recipe_name}</Card.Title>
        <ListGroup>
          <ListGroup.Item as="li" active >Ingredients</ListGroup.Item>
          {ingredients.map(items=>
              <ListGroup.Item as="li">{items}</ListGroup.Item>
          )}
        
        </ListGroup>
          <Card.Text>
         <span className="fs-4"> Cooking Method :</span> {cooking_method}
          </Card.Text>
          <h5></h5>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between' >
        <div className='d-flex align-items-center'>
          <Rating style={{ maxWidth: 100 }}
             value={Math.round(rating)} readOnly />
          <span>{rating}</span>
        </div >
          <Button onClick={notify} variant='danger'>Favorite</Button>   
          <ToastContainer />
        </Card.Footer>
      </Card>
       </Container>
    );
};

export default Recipe;