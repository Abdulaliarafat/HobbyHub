import React, { use } from 'react';
import { NavLink, Outlet } from 'react-router';
import { AuthContext } from '../Authentication/AuthProvider';
import Stac from '../DeshBoard/Stac';

const DeshboardLayout = () => {
    const { user } = use(AuthContext)
    const links = <>
        <li><NavLink to='/deshboard' className={({ isActive }) => `md:ml-5 font-medium text-md  ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>Home</NavLink></li>
        <li><NavLink to='/deshboard/DeshallGroup' className={({ isActive }) => `md:ml-5 font-medium text-md   ${isActive ? 'bg-blue-500 text-white' : ' hover:bg-blue-500 hover:text-white'}`}>All Groups</NavLink></li>
        <li><NavLink to='/deshboard/create' className={({ isActive }) => `md:ml-5 font-medium text-md    ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>Create group </NavLink></li>
        {user && <li><NavLink to={`/deshboard/mygroup/${user?.email}`} className={({ isActive }) => `md:ml-5 font-medium text-md   ${isActive ? 'bg-blue-500 text-white' : ' hover:bg-blue-500 hover:text-white'}`}>My Groups </NavLink></li>}
    </>
    return (
       <div className="lg:flex bg-gray-50">
    {/* board */}
    <div className="border-2 border-gray-200 w-full lg:h-70 lg:mt-10  lg:w-1/5 flex justify-center md:justify-start items-start md:mr-9 mt-4 md:mt-3 rounded-2xl shadow-xl lg:ml-5 ">
        <ul className="menu w-full lg:space-y-8 lg:block flex md:justify-evenly mt-5 mx-3 flex-row  space-y-5 ">
            {links}
        </ul>
    </div>

    {/* content */}
    <div className="w-full lg:w-4/5">
        <div>
             <Stac />
            <Outlet />
        </div>
    </div>
</div>

    );
};

export default DeshboardLayout;