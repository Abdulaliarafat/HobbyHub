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
                   pagination={{clickable:true}}
                  modules={[Navigation,Pagination]}
                >
            <SwiperSlide>
                <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover' src={img1} alt="slide-1" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover' src={img2} alt="slide-2" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover' src={img3} alt="slide-3" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover' src={img4} alt="slide-3" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover' src={img5} alt="slide-3" />
            </SwiperSlide>
        </Swiper>
        </div >
    );
};

export default Banner;