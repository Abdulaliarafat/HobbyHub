import React from 'react';
import { Link } from 'react-router';
import animationData from '../../src/assets/Animation - 1748104139184 (1).json'
import Lottie from 'lottie-react';

const Error = () => {
    return (
        <div>
            <div className='rounded-2xl mt-40 md:mt-0 '>
            <div className='space-y-2 md:space-y-3 max-w-4xl  rounded-2xl  md:mx-auto flex flex-col justify-center items-center'>
            <Lottie animationData={animationData} ></Lottie>
           <p className='font-extrabold text-5xl text-blue-400 text-center text-balance'>404-Page Not found</p>
           <p className='font-medium text-lg text-blue-300 text-center text-balance'>Oop's the page you are looking dosn't exist</p>
           <Link to={'/'}>
            <button className='py-2 px-3 font-medium text-white rounded-xl bg-blue-500 hover:bg-red-700 hover:text-white'>Go back Home</button>
            </Link>
        </div>
        </div>
        </div>
    );
};

export default Error;