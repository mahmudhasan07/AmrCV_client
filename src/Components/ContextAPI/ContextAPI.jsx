import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../User_Info/Firebase.config';


export const Context = createContext()
const ContextAPI = ({ children }) => {
    const [loading, setloading] = useState(true);
    const [user, setuser] = useState();

    const auth = getAuth(app)

    const userSign = (email, password) => {
        setloading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setloading(false)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const updateUser = (name, photo) => {
        setloading(false)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const userLogOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (customer) => {
            if (customer.email) {
                console.log(customer.email);
                setuser(customer)
            }
        })
    }, [auth]);

    const data = { userSign, userLogin, userLogOut, updateUser, loading, user }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

};

export default ContextAPI;