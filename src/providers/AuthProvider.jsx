import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()



    const createUser = (email, password) =>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email,password)
    }
    const googleSignIn =() =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user:',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unSubscribe();
        }

    }, [])



    const authInfo= {
        user,
        createUser,
        logOut,
        googleSignIn,
        logIn,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;