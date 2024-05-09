import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub   } from 'react-icons/fa';
import { AuthContext } from '../../../../providers/AuthProviders';

const Login = () => {
    const { signIn,googleSignIn,githubSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError(' ');
            navigate(from, { replace: true })
                
            })
            .catch(error => {
                console.error(error.message);
                setError('wrong credential')
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn() 
        .then(result => {
            const loggerInUser = result.user;
            console.log(loggerInUser);
            setError(' ');
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log('error', error.message);
        })
    }
    const handleGithubSignIn = () =>{
        githubSignIn()
            .then(result => {
                const loggerInUser = result.user;
                console.log(loggerInUser);
                setError(' ');
            navigate(from, { replace: true })
            })
            .catch(error =>{
                console.log('error', error.message);
            })
        }

    return (
        <Container className='w-25 my-4 mx-auto loginForm  '>
            
             <Form onSubmit={handleLogin} className='px-3 pt-3' >
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"placeholder="Password" />
                </Form.Group>
                
                <Button className='mb-4' variant="success" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text  className="text-secondary ">
                Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text >    

            </Form>
            <p className='mt-4'>Or Login With</p>
           <Button onClick={handleGoogleSignIn} className=' mb-2' variant="outline-primary"><FaGoogle  /> Login with Google</Button>
            <Button onClick={handleGithubSignIn} className=' mb-4' variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <br />
            <Form.Text className="text-danger">
            {error}
            </Form.Text>
            
           
        </Container>
    );
};

export default Login;