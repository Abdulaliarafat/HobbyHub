import React from 'react';
import CountUp from 'react-countup';

const Stac = () => {   
    

    return (
        <div className=' flex justify-evenly my-10 gap-2'>
           <div className="p-4 rounded-xl shadow-md text-white bg-gradient-to-r from-blue-300 to-orange-300 md:w-60 lg:w-90 ">
             <h2 className="text-xl font-bold text-center">All group Arrived</h2>
            <p className="text-3xl mt-2 font-bold text-center">
             10
            </p>
           </div>
           <div className="p-4 rounded-xl shadow-md text-white bg-gradient-to-r from-blue-300 to-orange-300 md:w-60 lg:w-90">
             <h2 className="text-xl font-bold text-center">My group Arrived</h2>
            <p className="text-3xl mt-2 font-bold text-center">
               9
            </p>
           </div>

        </div>
    );
};

export default Stac;
