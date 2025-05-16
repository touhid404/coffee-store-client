import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../firebase/firebase.config';
const AuthProvider = ({children}) => {





    // Create User
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // Sign In 

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

   


    const userInfo = {
        createUser,
        signIn
        
    };
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;