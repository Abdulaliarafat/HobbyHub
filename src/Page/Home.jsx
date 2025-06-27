import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import FeaturedGroup from '../Components/FeaturedGroup';
import Choose from '../Components/Choose';
import Connection from '../Components/Connection';
import SuccessStories from '../Components/SuccessStories';


const Home = () => {
    const featuredData=useLoaderData()
    return (
        <div className='dark:bg-gray-900 dark:text-white pb-5'>
            <Banner></Banner>
            <FeaturedGroup featuredData={featuredData}></FeaturedGroup>
            <SuccessStories></SuccessStories>
            <Choose></Choose>
            <Connection></Connection>   
        </div>
    );
};

export default Home;