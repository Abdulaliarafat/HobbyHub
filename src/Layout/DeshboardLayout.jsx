import React, { use } from 'react';
import { NavLink, Outlet } from 'react-router';
import { AuthContext } from '../Authentication/AuthProvider';
import DashboardCharts from '../DeshBoard/DashboardCharts';

const DeshboardLayout = () => {
    const { user } = use(AuthContext)
    const links = <>
        <li><NavLink to='/' className={({ isActive }) => `lg:ml-0 md:ml-5 font-medium text-md  ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>Home</NavLink></li>
        <li><NavLink to='/deshboard/DeshallGroup' className={({ isActive }) => `lg:ml-0 md:ml-5 font-medium text-md   ${isActive ? 'bg-blue-500 text-white' : ' hover:bg-blue-500 hover:text-white'}`}>All Groups</NavLink></li>
        <li><NavLink to='/deshboard/create' className={({ isActive }) => `lg:ml-0 md:ml-5 font-medium text-md    ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>Create group </NavLink></li>
        {user && <li><NavLink to={`/deshboard/mygroup/${user?.email}`} className={({ isActive }) => `lg:ml-0 md:ml-5 font-medium text-md   ${isActive ? 'bg-blue-500 text-white' : ' hover:bg-blue-500 hover:text-white'}`}>My Groups </NavLink></li>}
    </>
    return (
        <div>
            <p className='text-center font-bold text-3xl mx-4 my-2 px-2 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-md'>Quick Access Panel</p>
            <div className="lg:flex bg-gray-50">
                {/* board */}
                <div className="border-2 border-gray-200 w-full lg:h-110  lg:w-1/5 flex justify-center md:justify-start items-start md:mr-9 mt-4 md:mt-3 rounded-2xl shadow-xl lg:ml-5 sticky z-50 top-0 bg-gray-50 ">
                    <ul className="menu w-full lg:space-y-8 lg:block flex md:justify-evenly mt-5 mx-3 flex-row  space-y-5 ">
                        <h1 className='md:hidden hidden lg:block text-center text-xl font-semibold border-b-2 pb-5 border-gray-300'>Dashboard</h1>
                        {links}
                    </ul>
                </div>

                {/* content */}
                <div className="w-full lg:w-4/5">
                    <div>
                        <Outlet />
                        <DashboardCharts></DashboardCharts>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DeshboardLayout;