import React from 'react';
import { useLoaderData } from 'react-router';

const SuccessStoryDetail = () => {
    const story=useLoaderData()
    console.log(story)
    return (
       <div className="max-w-3xl md:mx-auto my-15 mx-5 shadow-2xl">
      <img
        src={story.photo}
        alt={story.name}
        className="w-full h-104 object-cover rounded-xl shadow mb-2 px-4"
      />
      <div className="text-center px-5">
        <h1 className="text-3xl font-bold ">{story.name}</h1>
        <p className="text-blue-500 font-medium mb-1 mt-2">{story.category}</p>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed p-5">{story.snippet}</p>
    </div>
    );
};

export default SuccessStoryDetail;