import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    
    const user = { displayName :"Shourav", };
    
    const createEmailPassUser = ( email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUserWithEmail = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }


    

    
    const authInfo = {
        user,
        createEmailPassUser,
        signInUserWithEmail
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;