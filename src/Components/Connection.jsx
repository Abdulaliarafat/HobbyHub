import React, { use } from 'react';
 const comunictePromise=fetch('/Connection.json').then(res=>res.json())
const Connection = () => {
    const ComData=use(comunictePromise)
    console.log(ComData);
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h1 className='font-bold text-3xl text-center mb-4'>Understanding Collaboration</h1>
            <p className='font-medium text-gray-500 dark:text-white text-center text-balance'>Collaboration means sharing ideas, respecting others, and working together efficiently.</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mx-5'>
                {
                ComData.map(data=> <div key={data.id} className=' rounded-lg p-5 bg-blue-50 shadow-2xl'>
                            
                             <div>
                                <img className='mx-auto w-70 h-40 rounded-2xl object-cover' src={data.img} alt="" />
                            </div>
                            <div className='flex justify-evenly  lg:justify-between items-center p-2'>
                                <p className='font-semibold text-md dark:text-black'>{data.title}</p>
                               <a href={data.link}>
                                 <button className='btn bg-blue-600 text-white hover:rounded-2xl'>Video</button>
                               </a>
                            </div>
                           </div>)
                }
            </div>
        </div>
    );
};

export default Connection;