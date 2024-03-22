'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import WorkItem from './WorkItem';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; // Якщо використовуєте ефект coverflow

const SliderComponent = () => {
  const swiperRef = useRef(null);

  //   useEffect(() => {
  //     if (swiperRef.current) {
  //       //   console.log(swiperRef.current.swiper);
  //     }
  //   }, []);

  return (
    <div className="slider-container">
      <Swiper
        ref={swiperRef}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        loop={true}
        effect="coverflow"
        className="mySwiper"
      >
        <SwiperSlide>
          <WorkItem>
            <button>dece</button>
          </WorkItem>
        </SwiperSlide>
        <SwiperSlide>
          <WorkItem>
            <button>dece</button>
          </WorkItem>
        </SwiperSlide>
        <SwiperSlide>
          <WorkItem>
            <button>dece</button>
          </WorkItem>
        </SwiperSlide>
        <SwiperSlide>
          <WorkItem>
            <button>dece</button>
          </WorkItem>
        </SwiperSlide>
        <SwiperSlide>
          <WorkItem>
            <button>dece</button>
          </WorkItem>
        </SwiperSlide>
        <SwiperSlide>
          <WorkItem>
            <button>dece</button>
          </WorkItem>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
