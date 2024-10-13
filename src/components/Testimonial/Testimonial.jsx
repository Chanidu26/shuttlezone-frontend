import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { HiStar } from 'react-icons/hi';
import avatar from '../../assets/images/avatar-icon.png';
const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper modules={[Pagination]} spaceBetween={30}  slidesPerView={1} pagination={{ clickable: true }}
           breakpoints = {{
            640:{
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768:{
              slidesPerView: 2,
              spaceBetween:20,
            },
            1024:{
              slidesPerView: 3,
              spaceBetween: 30,
            },
           }}
           >
           <SwiperSlide>
            <div className='py-[30px] px-5 rounded-[13px]'>
                <img src={avatar} alt=""/>
                <div><h4 className='text-[18px] leading-[30px] font-semibold'>Sahan Kavinda</h4></div>
            </div>
           </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial