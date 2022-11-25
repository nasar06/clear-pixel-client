import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Loader from '../pages/shared/Loader/Loader';
import TopNavbar from '../pages/shared/TopNavbar/TopNavbar';
import useAdmin from '../Hooks/Admin/useAdmin';
import useSeller from '../Hooks/seller/useSeller'

const DashboardLayOut = () => {
    const { user, isLoading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const [isSeller, isSellerLoader] = useSeller(user?.email)


    if (isAdminLoading || isLoading || isSellerLoader) {
        return <Loader></Loader>
    }
    return (
        <div>
            <TopNavbar></TopNavbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        {
                            !isAdmin && !isSeller &&
                        <Link to='/dashboard/myOrders' className='mb-5 text-xl font-bold underline'>My Orders</Link>
                        }

                        {/* <Link className='mb-5 text-xl font-bold underline' to='/dashboard/myWishlist'>My WishList</Link> */}

                        {
                            isSeller &&
                            <>
                                <Link to='/dashboard/addProduct' className='mb-5 text-xl font-bold underline'>Add Product</Link>
                                <Link to='/dashboard/myProducts' className='mb-5 text-xl font-bold underline' >My Products</Link>
                            
                            </>

                        }
                        {
                            isAdmin &&
                            <>
                                <Link to='/dashboard/allSellers' className='mb-5 text-xl font-bold underline'>All Sellers</Link>
                                <Link to='/dashboard/allBuyers' className='mb-5 text-xl font-bold underline'>All Buyers</Link>
                            </>
                        }



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayOut;