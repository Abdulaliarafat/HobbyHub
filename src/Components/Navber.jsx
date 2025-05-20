import React from 'react';
import { NavLink } from 'react-router';
import logo from '/3047.png'
import { FaFacebook, FaFileContract, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { IoLogoWhatsapp, IoMdContact } from 'react-icons/io';
const Navber = () => {
    const link = (
        <>
            <li><NavLink to='/' className={({ isActive }) => `ml-5 font-medium text-md text-white ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>Home</NavLink></li>
            <li><NavLink to='/' className={({ isActive }) => `ml-5 font-medium text-md  text-white ${isActive ? 'bg-blue-400 text-white' : ' hover:bg-blue-500 hover:text-white'}`}>All Groups
            </NavLink></li>
            <li><NavLink to='/' className={({ isActive }) => `ml-5 font-medium text-md   text-white ${isActive ? 'bg-blue-400 text-white' : ' hover:bg-blue-500 hover:text-white'}`}>Create Group </NavLink></li>
            <li><NavLink to='/' className={({ isActive }) => `ml-5 font-medium text-md  text-white ${isActive ? 'bg-blue-400 text-white' : ' hover:bg-blue-500 hover:text-white'}`}>My Groups </NavLink></li>

        </>
    )

    return (
        <div className="shadow-sm border p-2  bg-blue-900">
            <div className='flex justify-between items-center mb-3'>
                <div>
                    <input type="checkbox" defaultChecked className="toggle bg-white toggle-xl md:ml-3" />
                </div>
                <div className='flex justify-center items-center gap-1 md:gap-3'>
                    <h1 className='font-semibold text-white'>Follow on :</h1>
                    <FaFacebook color='white'></FaFacebook>
                    <FaInstagram color='white'></FaInstagram>
                    <FaLinkedin color='white'></FaLinkedin>
                    <IoLogoWhatsapp color='white'></IoLogoWhatsapp>
                </div>
                <div >
                    <IoMdContact  color='white' size={60}/>
                </div>
            </div>
            {/* main */}
            <div className='flex'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-blue-600 hover:rounded-2xl mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                link
                            }
                        </ul>
                    </div>
                   <div className='flex justify-baseline items-center'>
                     <img className='w-10 lg:w-30 rounded-2xl md:w-20' src={logo} alt="" />
                    <a className="text-xl font-bold text-white ml-2"> HobbyHub</a>
                   </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-blue-500 hover:rounded-2xl text-white">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;