import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import TopNavbar from '../pages/shared/TopNavbar/TopNavbar';

const Main = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;