import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    
    const [user, setUser] = useState(null);
    
    const createEmailPassUser = ( email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUserWithEmail = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect( () => {
       const unSubscribe =  onAuthStateChanged( auth , loggedUser => {
          console.log('logged in user inside auth state observer', loggedUser)
          setUser(loggedUser)
        })

        return () => {
             unSubscribe();
        }
    }, [])

    
    const authInfo = {
        user,
        createEmailPassUser,
        signInUserWithEmail,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;