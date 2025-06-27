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
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 ,pauseOnMouseEnter:true}}
                modules={[Navigation,Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[380px] object-cover' src={img1} alt="slide-1" />
                        <div className='absolute md:right-50 bottom-10 md:bottom-25 space-y-2'>
                            <h1 className='font-bold text-2xl md:text-4xl text-white text-center'> The Thrill of Outdoor <br /> Cycling Adventures</h1>
                            <p className='text-center'>
                                <span className=' font-medium test-xs md:font-bold text-white'>
                                    <Typewriter
                                        words={["Cycling through nature refreshes my mind and brstrengthens my body daily"]}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[380px] object-cover' src={img2} alt="slide-1" />
                        <div className='absolute md:right-55 bottom-10 md:bottom-25 space-y-1 '>
                            <h1 className='font-bold text-2xl md:text-4xl text-white text-center'> Discover Freedom on<br />Remote Hiking Trails</h1>
                            <p className='text-center'>
                                <span className=' font-medium test-xs md:font-bold text-white'>
                                    <Typewriter
                                        words={["Hiking uphill rewards effort with peace, views, and total clarity."]}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[380px] object-cover' src={img3} alt="slide-1" />
                        <div className='absolute md:right-35 bottom-8 md:bottom-25 space-y-1 md:mr-60'>
                            <h1 className='font-bold text-2xl md:text-4xl text-white text-center '>Fishing for Quiet<br />  Moments and Peace </h1>
                            <p className='text-center'>
                                <span className=' font-medium test-xs md:font-bold text-white text-balance'>
                                    <Typewriter
                                        words={["Fishing offers patience, reflection, calm water, and nature’s gentle rhythm."]}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[380px] object-cover' src={img4} alt="slide-1" />
                        <div className='absolute md:right-65 bottom-10 md:bottom-25 space-y-2  md:mr-25'>
                            <h1 className='font-bold text-2xl md:text-4xl text-white text-center'> Climbing High to Conquer <br />Every Challenge</h1>
                            <p className='text-center'>
                                <span className=' font-medium test-xs md:font-bold text-white'>
                                    <Typewriter
                                        words={["Climbing teaches strength, focus, trust, and celebrates small bold progress."]}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[380px] object-cover' src={img5} alt="slide-1" />
                        <div className='absolute md:right-65 bottom-10 md:bottom-25 space-y-2 md:mr-24'>
                            <h1 className='font-bold text-2xl md:text-4xl text-white text-center'> Reading Books to Open <br /> New Worlds</h1>
                            <p className='text-center'>
                                <span className=' font-medium test-xs md:font-bold text-white'>
                                    <Typewriter
                                        words={["Reading inspires imagination, expands knowledge, and brings comfort every time."]}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Banner;