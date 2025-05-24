import React from 'react';
import Navber from '../Components/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ThemeProvider } from '../Context/ThemeContext';

const Root = () => {
    return (
        <ThemeProvider>
            <div className=''>
            <header>
                <Navber></Navber>
            </header>
            <main className=''>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
        </ThemeProvider>
    );
};

export default Root;