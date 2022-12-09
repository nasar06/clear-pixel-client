import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Loader from '../pages/shared/Loader/Loader';
import TopNavbar from '../pages/shared/TopNavbar/TopNavbar';
import useAdmin from '../Hooks/Admin/useAdmin';
import useSeller from '../Hooks/seller/useSeller'
import { FaCartArrowDown, FaClipboardList, FaHeart, FaPlusSquare, FaRegHandshake, FaRegIdCard, FaUsers, FaUsersCog } from 'react-icons/fa';

const DashboardLayOut = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const [isSeller, isSellerLoader] = useSeller(user?.email)


    if (isAdminLoading && isSellerLoader) {
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
                    <ul className="menu py-4 pr-4 mr-6 w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        {
                            !isAdmin && !isSeller &&
                            <>
                                <Link to='/dashboard/myOrders' className='mb-2 bg-gray-100 p-2 font-bold underline flex items-center justify-between'>My Orders <FaCartArrowDown className='text-primary text-xl' /></Link>
                                <Link to='/dashboard/myWishlist' className='mb-2 bg-gray-100 p-2 font-bold underline flex items-center justify-between'>My WishList <FaHeart className='text-primary text-xl' ></FaHeart></Link>
                            </>
                        }

                        {
                            isSeller &&
                            <>
                                <Link to='/dashboard/addProduct' className='mb-2 bg-gray-100 p-2 font-bold underline flex items-center justify-between'>Add Product <FaPlusSquare className='text-primary text-xl' /></Link>
                                <Link to='/dashboard/myProducts' className='mb-2 bg-gray-100 p-2 font-bold underline flex items-center justify-between' >My Products <FaClipboardList className='text-primary text-xl' /></Link>

                            </>

                        }

                        {
                            isAdmin &&
                            <>
                                <Link to='/dashboard/allSellers' className='mb-2 bg-gray-100 p-2 font-bold underline flex items-center justify-between'>All Sellers <FaUsersCog className='text-primary text-xl' /></Link>
                                <Link to='/dashboard/allBuyers' className='mb-2 bg-gray-100 p-2 font-bold underline flex items-center justify-between'>All Buyers <FaUsers className='text-primary text-xl' /></Link>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayOut;