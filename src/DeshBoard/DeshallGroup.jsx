import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
// import { useLoaderData } from 'react-router';

const DeshallGroup = () => {
    // const DeshallGroupData=useLoaderData()
    // console.log(DeshallGroupData)
    
        const [groups, setGroups] = useState([]);
        const [category, setCategory] = useState('');
        const [sortOrder, setSortOrder] = useState('desc');
    
        useEffect(() => {
            axios.get('https://y-flame-eight-20.vercel.app/group/all', {
                params: {
                    category: category || undefined,
                    sortOrder,
                }
            })
                .then(res => setGroups(res.data))
                .catch(err => console.error(err));
        }, [category, sortOrder]);
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h1 className='text-3xl font-bold text-center'>All groups</h1>
           {/* filter and short  */}

            <div className="flex justify-evenly lg:justify-between md:justify-around  mb-6 my-5 md:mx-5">
                <select value={category} onChange={e => setCategory(e.target.value)} className="border px-3 py-1 rounded">
                    <option value="" className='font-semibold'>All Categories</option>
                    <option value="Cycling">🚴‍♀️ Cycling</option>
                    <option value="Running">🥾 Running</option>
                    <option value="Gardening">🌼 Gardening</option>
                    <option value="Drawing">🎨 Drawing & Painting</option>
                    <option value="Cooking">🍳 Cooking</option>
                    <option value="Reading">📖 Reading</option>
                    <option value="Fishing">🎣 Fishing</option>
                </select>

                <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="border px-3 py-1 rounded">
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-0'>
                {
                    groups.map(group =>
                        <div key={group._id} className='flex flex-col shadow-2xl rounded-xl px-4 py-2'>
                            <img className='w-50 h-40 object-cover rounded-2xl mb-4' src={group.photoURL} alt="" />
                            <div className='flex-1 flex justify-around items-center'>
                                <div className=''>
                                    <p className='font-semibold text-md mb-1'>Name : {group.groupname}</p>
                                    <p className='font-medium text-xs'>Join date : {group.date}</p>
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

export default DeshallGroup;