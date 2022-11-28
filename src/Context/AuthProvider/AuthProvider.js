import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoadin]= useState(true)
    const googleProvider = new GoogleAuthProvider()


    //create User with Email and password
    const signUp = (email, password) =>{
        setIsLoadin(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login with email and password
    const loginUser = (email, password) =>{
        setIsLoadin(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signOut 
    const signOutUser = ()=>{
        setIsLoadin(true)
        return signOut(auth)
    }

    //update Profile name
    const UpdateProfileName =(userInfo)=>{
        setIsLoadin(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    //login with google
    const loginWithGoogle = () =>{
        setIsLoadin(true)
        return signInWithPopup(auth, googleProvider)
    }

    //observe user
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setIsLoadin(false)
        })
        return ()=> unSubscribe()
    },[])


    const authInfo = {
        signUp,
        loginUser,
        signOutUser,
        UpdateProfileName,
        loginWithGoogle,
        user,
        isLoading
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