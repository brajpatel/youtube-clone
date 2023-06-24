import React, { useEffect, useState } from "react";

// FIREBASE INITIALISATION
import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// CREATION SIGN IN CONTEXT
const AuthContext = React.createContext();

function AuthContextProvider(props) {
    const [signedIn, setSignedIn] = useState(false);
    const [user, setUser] = useState(undefined);

    const signInUser = async () => {
        // setSignedIn(true);
        let provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider)
                .then((res) => setUser(res.user));
    }

    const signOutUser = () => {
        // setSignedIn(false);
        signOut(getAuth());
    }

    useEffect(() => {
        if(!user) return;

        setUser({
            name: user.displayName,
            photo: user.photoURL
        })
    }, [user])

    onAuthStateChanged(getAuth(), (user) => {
        user ? setSignedIn(true) : setSignedIn(false);
    })

    return (
        <AuthContext.Provider value={{ signInUser, signOutUser, signedIn, user }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };