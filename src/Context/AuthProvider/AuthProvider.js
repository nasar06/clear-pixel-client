import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
console.log(auth)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    //create User with Email and password
    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login with email and password
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signOut 
    const signOutUser = ()=>{
        return signOut(auth)
    }

    //observe user
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=> unSubscribe()
    },[])

    const authInfo = {
        signUp,
        loginUser,
        signOutUser,
        user
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;