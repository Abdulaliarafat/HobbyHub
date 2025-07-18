import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router';
import { AuthContext } from '../Authentication/AuthProvider';
import DashboardCharts from '../DeshBoard/DashboardCharts';
import { MdGroup } from 'react-icons/md';
import { FaHome, FaLayerGroup, FaPlusSquare } from 'react-icons/fa';
import logo from '/25c50e104102623.Y3JvcCwyOTUyLDIzMDksNTU1LDA.png'

const DeshboardLayout = () => {
    const { user } = useContext(AuthContext);

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        ` flex items-center gap-2 font-medium text-md ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`
                    }
                >
                    <FaHome className="text-blue-500" /> Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/deshboard/DeshallGroup"
                    className={({ isActive }) =>
                        `flex items-center gap-2 font-medium text-md ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`
                    }
                >
                    <FaLayerGroup className="text-green-600" /> All Groups
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/deshboard/create"
                    className={({ isActive }) =>
                        `flex items-center gap-2 font-medium text-md ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`
                    }
                >
                    <FaPlusSquare className="text-purple-600" /> Create Group
                </NavLink>
            </li>
            {user && (
                <li>
                    <NavLink
                        to={`/deshboard/mygroup/${user.email}`}
                        className={({ isActive }) =>
                            `flex items-center gap-2 font-medium text-md ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`
                        }
                    >
                        <MdGroup className="text-orange-500" /> My Groups
                    </NavLink>
                </li>
            )}
        </>
    );

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar for mobile */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 font-semibold text-lg">Dashboard</div>
                </div>

                {/* Page content */}
                <div className="p-4">
                    <p className="text-center font-bold text-3xl mb-4 px-2 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-md">
                        Quick Access Panel
                    </p>
                    <Outlet />
                    <DashboardCharts />
                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                 
                <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4 space-y-5 ">
                    <div className='flex justify-baseline items-center gap-2 bg-blue-700 w-full rounded-2xl p-2 mb-2 '>
                                        <img className='md:w-16 w-13  md:mb-0 rounded-full' src={logo} alt="" />
                                        <h1 className='font-bold text-white text-2xl '>HobbyHub</h1>
                                    </div>
                    <h1 className="text-center text-xl font-semibold border-b-2 pb-4 mb-2 border-gray-300  lg:block">
                        Dashboard
                    </h1>
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default DeshboardLayout;
