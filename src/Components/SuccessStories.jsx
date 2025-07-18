import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const SuccessStories = () => {
 const [successStoriesData, setSuccessStoriesData] = useState([]);

  useEffect(() => {
    fetch('/SuccessStory.json') // make sure it's in public/
      .then(res => res.json())
      .then(data => setSuccessStoriesData(data));
  }, []);
    return (
        <div>
            <section className="py-12 bg-white dark:bg-gray-900 ">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-5">Success Trips: Stories & Inspirations</h2>
                    <p className="text-center text-gray-600 mb-15 dark:text-white">
                        Discover how hobbies helped real users grow skills, confidence, and community connections.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-2">
                        {successStoriesData.map(story => (
                            <div key={story.id} className="flex flex-col rounded-xl shadow-2xl p-5 bg-blue-50">
                                <div className="flex-1 items-center gap-10 mb-4">
                                    <img
                                        src={story.photo}
                                        alt={story.name}
                                        className="w-14 h-20_ rounded-sm object-cover"
                                    />
                                    <div className='flex-1'>
                                        <h4 className="text-lg font-bold dark:text-black">{story.name}</h4>
                                        <span className="text-sm text-blue-500 font-medium">{story.category}</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mb-3">
                                    {story.snippet.slice(0, 80)}...
                                </p>
                                <Link to={`/story/${story.id}`} className=" text-blue-500 text-md font-bold hover:text-blue-800 hover:underline">Read story</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;