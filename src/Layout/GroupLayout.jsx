import React from 'react';
import { useLoaderData } from 'react-router';


const GroupLayout = () => {
    const Details=useLoaderData();
    console.log(Details)
    return (
        <div className='max-w-4xl mx-auto my-10 '>
            <div className='md:flex gap-5 shadow-2xl rounded-md bg-gradient-to-tl from-gray-50 to-blue-100'>
               <div className='p-4'>
                 <img className='w-[800px] h-[500px] object-cover rounded-2xl' src={Details.photoURL} alt="" />
               </div>
               <div className='p-5 space-y-2 md:space-y-4 md:mt-18'>
                  <p className='font-bold text-lg'>Name : {Details.groupname}</p>
                  <p className='font-semibold text-md'>Members : {Details.members}</p>
                  <p className='font-semibold text-md text-balance'>Location : {Details.location}</p>
                  <p className='font-semibold text-md'>Category : {Details.Category}</p>
                  <p className='font-semibold text-md text-balance'>Description : {Details.description}</p>
                  <p className='font-semibold text-lg'>Date : {Details.date}</p>
                  <button className='btn w-xs bg-blue-800 text-white hover:rounded-2xl hover:bg-blue-500 mt-5 mr-3'>Join group</button>
               </div>
            </div>
        </div>
    );
};

export default GroupLayout;