import { createContext, useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import  auth  from "../config/firebase.config.js";
// step 1
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // step 4 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // auth create 
    const createUser = (email, password)  =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // step 3
    const userInfo = {
        user,
        loading,
        createUser,
    }
    return (

        // step 2
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;