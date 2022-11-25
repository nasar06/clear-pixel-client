import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/Admin/useAdmin';
import Loader from '../pages/shared/Loader/Loader';

const AdminRoute = ({children}) => {
    const {user, isLoading, signOutUser} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()


    if(isLoading || isAdminLoading){
        return <Loader></Loader>
    }

    if(user && isAdmin){
        return children
    }

    signOutUser()
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;