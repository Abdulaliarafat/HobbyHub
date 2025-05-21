import React from 'react';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import Login from '../Page/Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navber></Navber>
            </header>
            <main>
           <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;