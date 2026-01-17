import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            <Navbar />
            <main style={{
                paddingTop: isHomePage ? '80px' : '100px',
                minHeight: '100vh'
            }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
