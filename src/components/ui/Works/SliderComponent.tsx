'use client';
import React from 'react';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { Swiper, SwiperSlide } from 'swiper/react';
import { WorkItemInterface } from '@/types/commonTypes';
import { works } from './data';
import WorkItem from './WorkItem';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const SliderComponent = () => {
  const { isDesktop } = useBreakpoints();

  return (
    <div className="slider-container">
      <Swiper
        slidesPerView={isDesktop ? 3 : 1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        loop={true}
        effect="coverflow"
        className="mySwiper"
        style={{ padding: '20px 20px' }}
      >
        {works.map((item, index) => (
          <SwiperSlide key={index}>
            <WorkItem
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
              projectLink={item.projectLink}
              colorClassName={item.colorClassName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
