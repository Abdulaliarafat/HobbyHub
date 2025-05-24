import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGroup = () => {
    const groupData = useLoaderData()
    console.log(groupData)
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h1 className='text-2xl font-bold text-center'>All groups</h1>
            <p className='text-center font-medium text-md text-gray-600 text-balance mt-2'>Hobbies are fun activities we enjoy in our free time, like reading, painting, or gardening.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    groupData.map(group =>
                        <div key={group._id} className=' shadow-2xl rounded-xl p-5'>
                            <img className='w-90 h-55 object-cover rounded-2xl mb-4' src={group.photoURL} alt="" />
                            <div className='flex justify-between items-center'>
                                <div className=''>
                                    <p className='font-semibold text-lg mb-1'>Name : {group.groupname}</p>
                                <p className='font-medium text-sm'>Join date : {group.date}</p>
                                </div>
                                <div className=''>
                                    <Link to={`/groupLayout/${group._id}`} className='btn bg-blue-500 text-white hover:rounded-2xl'>Details</Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllGroup;