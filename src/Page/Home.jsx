import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import FeaturedGroup from '../Components/FeaturedGroup';


const Home = () => {
    const featuredData=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <FeaturedGroup featuredData={featuredData}></FeaturedGroup>
        </div>
    );
};

export default Home;