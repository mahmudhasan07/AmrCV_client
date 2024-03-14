import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../User_Info/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const Context = createContext()
const ContextAPI = ({ children }) => {
    const [loading, setloading] = useState(true);
    const [user, setuser] = useState(null);

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const userSign = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const userGoogleLogIn = ()=>{
        setloading(true)
        return signInWithPopup(auth,provider)
    }

    const updateUser = (name, photo) => {
        setloading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const userLogOut = () => {
        setloading(true)
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (customer) => {
            setloading(false)
            setuser(customer)
            if (customer?.email) {
                console.log(customer.email);
                
            }
        })
    }, [auth]);

    const data = { userSign, userLogin, userLogOut, updateUser, loading, user, userGoogleLogIn }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

};

export default ContextAPI;