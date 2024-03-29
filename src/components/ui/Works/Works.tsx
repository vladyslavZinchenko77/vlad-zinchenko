'use client';
import React, { FC, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Title from '@/components/common/Title/Title';
import FingerAnimation from '@/components/common/FingerAnimation/FingerAnimation';
import './Works.scss';

const Works: FC = () => {
  const [SliderComponent, setSliderComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    const loadSliderComponent = async () => {
      const sliderModule = await import('./SliderComponent');
      setSliderComponent(() => sliderModule.default);
    };

    loadSliderComponent();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.works',
        start: 'top 80%',
        toggleActions: 'restart none none none',
      },
    });

    tl.fromTo(
      '#works-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        '.slider-component',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.5'
      )
      .fromTo(
        '#finger-animation',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 },
        '-=0.5'
      );
  }, []);

  return (
    <section className="works">
      <Title id="works-title" text="projects" />
      <div className="slider-component">
        {SliderComponent && <SliderComponent />}
      </div>
      <FingerAnimation id="finger-animation" />
    </section>
  );
};

export default Works;
