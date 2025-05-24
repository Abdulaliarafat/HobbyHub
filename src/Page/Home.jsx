import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import FeaturedGroup from '../Components/FeaturedGroup';
import Choose from '../Components/Choose';


const Home = () => {
    const featuredData=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <FeaturedGroup featuredData={featuredData}></FeaturedGroup>
            <Choose></Choose>
        </div>
    );
};

export default Home;