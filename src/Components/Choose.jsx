import React, { use } from 'react';
const ChoosePro = fetch('/choose.json').then(res => res.json())
const Choose = () => {
    const choose = use(ChoosePro)
    // console.log(choose)
    return (
        <div className='max-w-5xl mx-auto my-15'>
            <h1 className='text-3xl font-bold text-center mb-5'>Grouping Places
                            </h1 >
                            <p className='dark:text-white text-center font-medium text-md text-gray-600 text-balance mt-2 mb-10'> Grouping places helps organize locations by similarities,<br /> making it easier to study and understand geography</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mx-5 '>
                
                {
                    choose.map(data =>
                        <div key={data.id} className='p-5 bg-blue-50 shadow-2xl rounded-lg'>
                            
                             <div>
                                <img className='mx-auto w-70 h-40 rounded-2xl object-cover' src={data.img} alt="" />
                            </div>
                            <div className='flex justify-evenly  lg:justify-between items-center p-2'>
                                <p className='font-semibold text-md dark:text-black'>{data.title}</p>
                               <a href={data.link}>
                                 <button className='btn bg-blue-600 text-white hover:rounded-2xl'>Video</button>
                               </a>
                            </div>
                           </div>
                    )
                }
            </div>
        </div>
    );
};

export default Choose;