import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menubar.css'
import { AuthContext } from '../../../../providers/AuthProviders';
import ActiveLink from '../ActiveLink/ActiveLink';

const MenuBar = () => {
    const {user, logOut}= useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
       
                <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" >
                    <Container>
                        <Navbar.Brand className='fs-3' href="/">Food Bangla</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                          
                                <ActiveLink to="/">Home </ActiveLink>
                                <ActiveLink to="/about">About</ActiveLink>
                                <ActiveLink to="/blog">Blog</ActiveLink>
                                
                            </Nav>
                            <Nav>
                            { user &&
                               
                                 <Image src={user.photoURL} title={user.displayName} roundedCircle height={'50px'} className='me-2' />
                     }
                
                                { user ?
                            <Button onClick={handleLogOut} variant="dark">Logout</Button>  :
                           <Link to='/login'>
                            <Button variant="dark">Login</Button>
                           </Link>
                           }
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
       
    );
};

export default MenuBar;