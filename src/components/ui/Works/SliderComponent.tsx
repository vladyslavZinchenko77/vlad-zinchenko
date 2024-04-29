'use client';
import React from 'react';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { Swiper, SwiperSlide } from 'swiper/react';
import { WorkItemInterface } from '@/types/commonTypes';
import WorkItem from './WorkItem';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const works: WorkItemInterface[] = [
  {
    title: 'Franny',
    description: 'Service for automation of tax returns filing',
    imgUrl: '/img/work5.png',
    colorClassName: 'green',
    projectLink: 'https://getfranny.com/',
  },
  {
    title: 'Shoppy',
    description: '',
    imgUrl: '/img/work11.png',
    colorClassName: 'purple',
    projectLink: 'https://shoppy.bndigital.dev/',
  },

  {
    title: 'Dmytro Sablin',
    description: 'Website for a civil construction engineer',
    imgUrl: '/img/work7.png',
    colorClassName: 'red',
    projectLink: 'https://dsablin-engineer.vercel.app/',
  },
  {
    title: 'Istep computers school',
    description: 'Page for computer science school',
    imgUrl: '/img/work9.png',
    colorClassName: 'grey',
    projectLink: 'https://istep-computer-graphics-and-design-x12z.vercel.app/',
  },
  {
    title: 'Knife Town',
    description: 'Small online knife shop',
    imgUrl: '/img/work10.png',
    colorClassName: 'yellow',
    projectLink: 'https://knife-town-h7wv.vercel.app/',
  },
];

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
