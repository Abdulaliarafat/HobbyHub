import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '/3398d4_e9b980cab90c41edb7c1e895ec6d0051~mv2.webp'
import img2 from '/BB1nMesW.jpeg'
import img3 from '/group-friends-enjoying-fishing-trip_1022456-198343.avif'
import img4 from '/img-4.jpg'
import img5 from '/male-reading.jpg'
import { Navigation, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover opacity-72 ' src={img1} alt="slide-1" />
                        <div className='absolute right-35 bottom-25 space-y-2'>
                            <h1 className='font-bold text-4xl text-white'>The Thrill of Outdoor <br /> Cycling Adventures</h1>
                            <p className='font-bold text-lg  text-white'>Cycling through nature refreshes my mind and brstrengthens my body daily</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover opacity-72 ' src={img2} alt="slide-1" />
                        <div className='absolute right-35 bottom-25 space-y-2 '>
                            <h1 className='font-bold text-4xl text-white'> Discover Freedom on Remote <br /> Hiking Trails</h1>
                            <p className='font-bold text-lg  text-white'>Hiking uphill rewards effort with peace, views, and total clarity.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                     <div className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover opacity-72  ' src={img3} alt="slide-1" />
                        <div className='absolute right-35 bottom-20 space-y-2 mr-60'>
                            <h1 className='font-bold text-4xl text-white'>Fishing for Quiet Moments and Peace </h1>
                            <p className='font-bold text-lg  text-white'>Fishing offers patience, reflection, calm water, and nature’s gentle rhythm.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover opacity-72 ' src={img4} alt="slide-1" />
                        <div className='absolute right-35 bottom-25 space-y-2  mr-25'>
                            <h1 className='font-bold text-4xl text-white'> Climbing High to Conquer Every Challenge</h1>
                            <p className='font-bold text-lg  text-white'>Climbing teaches strength, focus, trust, and celebrates small bold progress.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover opacity-72 ' src={img5} alt="slide-1" />
                        <div className='absolute right-35 bottom-25 space-y-2 mr-24'>
                            <h1 className='font-bold text-4xl text-white'> Reading Books to Open New Worlds</h1>
                            <p className='font-bold text-lg  text-white text-balance'>Reading inspires imagination, expands knowledge, and brings comfort every time.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Banner;