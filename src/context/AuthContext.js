import React, { useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';

const AuthContext = React.createContext();

function AuthContextProvider(props) {
    const [signedIn, setSignedIn] = useState(false);
    const [user, setUser] = useState(undefined);

    const signInUser = async () => {
        setSignedIn(true);
        // let provider = new GoogleAuthProvider();
        // await signInWithPopup(getAuth(), provider);
    }

    const signOutUser = () => {
        setSignedIn(false);
        // signOut(getAuth());
    }

    onAuthStateChanged(getAuth(), (user) => {
        user ? setSignedIn(true) : setSignedIn(false);
    })

    return (
        <AuthContext.Provider value={{ signInUser, signOutUser, signedIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };