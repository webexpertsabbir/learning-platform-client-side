import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() => {

        const unsubsscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser)
            setUser(currentUser)
        })

        return () => {
            unsubsscribe();
        }

    }, [])


    const authInfo = { user, providerLogin, logOut, createUser, signIn, updateUserProfile }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
