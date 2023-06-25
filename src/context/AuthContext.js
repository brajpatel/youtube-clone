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
    const [user, setUser] = useState({ name: '', photo: ''});

    const signInUser = async () => {
        let provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider);
    }

    const signOutUser = () => {
        signOut(getAuth());
    }

    const getProfilePicUrl = () => {
        return getAuth().currentUser.photoURL || './public/profile_placeholder.png';
    }
    
    // Returns the signed-in user's display name.
    const getUserName = () => {
        return getAuth().currentUser.displayName;
    }

    const authStateObserver = (user) => {
        if (user) {
            setSignedIn(true);
            setUser({
                name: getUserName(),
                photo: getProfilePicUrl()
            })
        }
        else {
            setSignedIn(false);
            setUser({
                name: '',
                photo: ''
            });
        }
      }

    useEffect(() => {
        onAuthStateChanged(getAuth(), authStateObserver);
    }, [])

    return (
        <AuthContext.Provider value={{ signInUser, signOutUser, signedIn, user }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };