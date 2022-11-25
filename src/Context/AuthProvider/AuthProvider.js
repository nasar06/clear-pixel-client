import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
console.log(auth)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()

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

    //update Profile name
    const UpdateProfileName =(userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)
    }

    //login with google
    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
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
        UpdateProfileName,
        loginWithGoogle,
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