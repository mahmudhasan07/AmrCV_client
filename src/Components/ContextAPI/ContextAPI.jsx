import React, { createContext, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../User_Info/Firebase.config';


export const Context = createContext()
const ContextAPI = () => {
    const [loading, setloading] = useState(true);

    const auth = getAuth(app)

    const data = "hello"
    return <Context.Provider value={data}>

    </Context.Provider>

};

export default ContextAPI;