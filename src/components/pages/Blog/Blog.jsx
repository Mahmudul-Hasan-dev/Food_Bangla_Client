import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='mb-5'>
            <h3 className='py-3'> Blog Page</h3>
        
            <ol>
                <li >
                    <h6> Differences between uncontrolled and controlled components.</h6>
                    
                    <p>
                        Uncontrolled components have control over their own state and  manage the behaviors by themselves.
                            <br />
                            Controlled components' state and behaviors are controlled by their Parent components.
                    </p>
                    
                </li>

                <li>
                    <h6>How to validate React props using PropTypes</h6>
                    <p>
                        Props validation is a tool that will help the developers to avoid future bugs and problems.React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props
                    </p>
                </li>

                <li>
                    <h6> Difference between nodejs and express js  </h6>
                    <p>
                        <b>NodeJS</b> is a javascript runtime environment for running JavaScript programs and is used to build server-side applications. 
                        <br />
                        <b>Express JS</b> is a framework based on Node JS which is used for building web applications.
                    </p>
                </li>

                <li>
                    <h6>What is a custom hook, and why will you create a custom hook?</h6>
                    <p>
                        Custom hook is  a powerful feature of React. It is  mechanism  of gathering common functionality into reusable functions.
                        <br />
                        We will create a custom hook for making code more organized, reusable, and maintainable
                    </p>
                </li>
            </ol>
        
        </Container>
    );
};

export default Blog;