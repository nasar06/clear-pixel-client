import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import TopNavbar from '../pages/shared/TopNavbar/TopNavbar';

const DashboardLayOut = () => {
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
                        <Link className='mb-5 text-xl font-bold underline' to='/dashboard/myOrders'>My Orders</Link>
                        <Link className='mb-5 text-xl font-bold underline' to='/dashboard/myProducts'>My Products</Link>
                        {/* <Link className='mb-5 text-xl font-bold underline' to='/dashboard/myWishlist'>My WishList</Link> */}
                        <Link className='mb-5 text-xl font-bold underline' to='/dashboard/addProduct'>Add Product</Link>
                        
                        
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayOut;