import React from 'react';
import { useRouteError } from "react-router-dom";
import image from '../../assets/404.png'
const ErrorPage = () => {
    const error = useRouteError();
    return (
        
        <div className='text-center'>
           <img src={image} alt="" width={'100%'}/>
        <h2 className='text-danger'>Oops!
        <br /> Sorry, an unexpected error has occurred.
        </h2>

        <h4>
          <i>{error.statusText || error.message}</i>
        </h4>
      
      </div>
    );
};

export default ErrorPage;