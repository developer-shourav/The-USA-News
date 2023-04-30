import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <p>Loading... </p>
    }

    if(user){
        return children
    }

        return <Navigate state={{from :location}} to='/login'  replace> </Navigate>

};

export default PrivetRoutes;


/**
 * STEPS FOR MAKING PRIVET ROUTES
 * 1. Check user login or not
 * 2. If your logged in , then allow them to visit the route.
 * 3. Else redirect the user to the login page.
 * 4. Setup the privet Router / Protected Router
 * 5. Handle Loading
 * 6.  
 */