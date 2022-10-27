import React, { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
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


    const authInfo = { user, providerLogin, logOut }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
