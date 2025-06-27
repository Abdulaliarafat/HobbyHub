import React, { use } from 'react';
import { NavLink, Outlet } from 'react-router';
import { AuthContext } from '../Authentication/AuthProvider';
import Stac from '../DeshBoard/Stac';


const DeshboardLayout = () => {
    const { user } = use(AuthContext)
    const links = <>
        <li><NavLink to='/' className={({ isActive }) => `md:ml-5 font-medium text-md  ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>Home</NavLink></li>
        <li><NavLink to='/deshboard/DeshallGroup' className={({ isActive }) => `md:ml-5 font-medium text-md   ${isActive ? 'bg-blue-500 text-white' : ' hover:bg-blue-500 hover:text-white'}`}>All Groups</NavLink></li>
        <li><NavLink to='/deshboard/create' className={({ isActive }) => `md:ml-5 font-medium text-md    ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>Create group </NavLink></li>
        <li><NavLink to={`/deshboard/mygroup/${user?.email}`} className={({ isActive }) => `md:ml-5 font-medium text-md   ${isActive ? 'bg-blue-500 text-white' : ' hover:bg-blue-500 hover:text-white'}`}>My Groups </NavLink></li>
    </>
    return (
       <div className="md:flex">
    {/* board */}
    <div className="w-full md:w-1/5 flex justify-center md:justify-start items-start md:mx-4 mt-4 md:mt-6 rounded-2xl shadow-xl">
        <ul className="menu w-full md:block flex mt-5 mr-3 flex-row space-y-10 ">
            {links}
        </ul>
    </div>

    {/* content */}
    <div className="w-full md:w-4/5">
        <div>
            <Stac />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
</div>

    );
};

export default DeshboardLayout;