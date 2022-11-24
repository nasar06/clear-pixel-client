import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
console.log(auth)

const AuthProvider = ({children}) => {

    //create User with Email and password
    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        signUp
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