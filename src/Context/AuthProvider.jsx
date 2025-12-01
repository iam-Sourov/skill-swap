import React, { useEffect, useState } from 'react';
import { auth, googleProvider } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthContext';



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);

    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const AuthInfo = {
        user,
        setUser,
        signUp,
        logIn,
        LogOut,
        googleLogIn,
        loading,
        setLoading,
        updateUser,
    }
    return (
        <AuthContext value={AuthInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;