import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()

    if(user && user?.uid){
        return children
    }
    return <Navigate to='/login' state={{form: location}}></Navigate>
};

export default PrivetRoute;