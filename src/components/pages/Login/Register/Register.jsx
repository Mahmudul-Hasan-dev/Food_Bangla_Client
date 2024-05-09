import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProviders';

const Register = () => {
    const [error, setError] = useState('');
    const [success,setSuccess] = useState('');

    const {createUser} = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        setSuccess('')
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

     if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
        createUser(email, password,)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError(' ');
                event.target.reset();
                setSuccess('user has create successfully')
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message)
                
            })
    }
    return (
        <Container className='w-25 my-4 mx-auto loginForm'>
        <Form onSubmit={handleRegister} className='px-3 pt-3 pb-3' >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Photo URL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>

    
            <Button variant="primary" className='mb-4'  type="submit">
                Register
            </Button>
            <br />
            <Form.Text className="text-secondary ">
                Already Have an Account? <Link to="/login">Login</Link>
            </Form.Text>
            <br />
            <Form.Text className="text-success">
                {success}
            </Form.Text>
            <Form.Text className="text-danger">
            {error}
            </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;