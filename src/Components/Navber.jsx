import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '/25c50e104102623.Y3JvcCwyOTUyLDIzMDksNTU1LDA.png'
import { FaFacebook, FaInstagram, FaLinkedin, } from 'react-icons/fa';
import { IoLogoWhatsapp, IoMdContact } from 'react-icons/io';
import { AuthContext } from '../Authentication/AuthProvider';
import Swal from 'sweetalert2';
import Loading from './Loading';
const Navber = () => {
    const { user, logOut,loading } = use(AuthContext)
   if(loading){
    return <Loading></Loading>
   }
    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "Logout successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(error => {
                console.log(error)
            })
    }
    const link = (
        <>
            <li><NavLink to='/' className={({ isActive }) => `ml-5 font-medium text-md md:text-white ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>Home</NavLink></li>
            <li><NavLink to='/allGroup' className={({ isActive }) => `ml-5 font-medium text-md  md:text-white ${isActive ? 'bg-blue-500 text-white' : ' hover:bg-blue-500 hover:text-white'}`}>All Groups
            </NavLink></li>
            <li><NavLink to='/createGroup' className={({ isActive }) => `ml-5 font-medium text-md   md:text-white ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>Create group </NavLink></li>
            <li><NavLink to={`/myGroup/${user?.email}`} className={({ isActive }) => `ml-5 font-medium text-md  md:text-white ${isActive ? 'bg-blue-500 text-white' : ' hover:bg-blue-500 hover:text-white'}`}>My Groups </NavLink></li>

        </>
    )
    return (
        <div className="shadow-sm border p-2  bg-blue-900 ">
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
                <div>
                    {user ? (
                        <Link to="" className="relative group inline-block">
                            <img
                                className="w-15 mr-3 mt-1 bg-white rounded-xl"
                                src={user.photoURL}
                                alt=''
                            />
                            <span className="absolute right-4 transform -translate-x-1/2 -top-1.5
                           bg-gray-200 bg-opacity-75 text-blue-600 font-bold text-xs px-8 py-4 rounded-full
                           opacity-0 group-hover:opacity-100
                           pointer-events-none
                           whitespace-nowrap
                           transition-opacity duration-300">
                                {user.displayName}
                            </span>
                        </Link>
                    ) : (
                        <IoMdContact color="white" size={60} />
                    )}
                </div>
            </div>
            <div className='flex py-3'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white hover:text-blue-600 hover:rounded-2xl mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-1 shadow">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <div className='flex justify-baseline items-center'>
                        <img className='w-10 rounded-full md:w-20' src={logo} alt="" />
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
                    {
                        user ? <Link onClick={handleSignOut} className="btn bg-blue-500 hover:rounded-2xl text-white">LogOut</Link> : <Link to='/authlayout/login' className="btn bg-blue-500 hover:rounded-2xl text-white">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;