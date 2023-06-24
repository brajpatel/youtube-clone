import { useEffect, useState } from "react";
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

    const signIn = async () => {
        let provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider);
    }

    const signOut = () => {
        signOut(getAuth());
    }

    useEffect(() => {
        if(!!getAuth().currentUser) {
            setSignedIn(true);
        }
    }, [user])

    return (
        <AuthContext.Provider value={{ signIn, signOut, signedIn }}>
            {props.chidlren}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };