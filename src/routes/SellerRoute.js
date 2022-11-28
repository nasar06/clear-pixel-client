import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useSeller from '../Hooks/seller/useSeller';
import Loader from '../pages/shared/Loader/Loader';

const SellerRoute = ({ children }) => {
    const { user, isLoading, signOutUser } = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const location = useLocation()


    if (isLoading && isSellerLoading && isLoading) {
        return <Loader></Loader>
    }

    if (user && isSeller) {
        return children
    }

    signOutUser()
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;