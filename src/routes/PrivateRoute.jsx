import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
}
export default PrivateRoute;