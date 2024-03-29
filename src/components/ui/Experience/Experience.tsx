'use client';
import { FC, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomizedTimeline from './CustomizedTimeline';

import Title from '@/components/common/Title/Title';

import './Experience.scss';

const Experience: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.experience',
        start: 'top',
        toggleActions: 'restart none none none',
      },
    });

    tl.fromTo(
      '#experience-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    ).fromTo(
      '#experience-time-line',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    );
  }, []);

  return (
    <section className="experience">
      <Title id="experience-title" text={'Experience'} />
      <CustomizedTimeline id="experience-time-line" />
    </section>
  );
};

export default Experience;
