'use client';
import React, { FC, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Title from '@/components/common/Title/Title';
import './Summary.scss';

const Summary: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log('useEffect triggered');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.summary',
        start: 'top 80%',
        toggleActions: 'play none none none',
        onEnter: () => console.log('ScrollTrigger entered'),
        onLeave: () => console.log('ScrollTrigger left'),
      },
    });

    console.log('Timeline created');

    tl.fromTo(
      '#summary-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        '.summary__content-text',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.5'
      )
      .fromTo(
        '.summary__content-img',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 },
        '-=0.5'
      );
  }, []);

  return (
    <section className="summary">
      <Title text="summary" id="summary-title" />
      <div className="summary__container">
        <div className="summary__content">
          <p className="summary__content-text">
            Hi!👋🏻 I am Frontend Developer. The main framework I work with is
            React, but if necessary, I'm not afraid of learning something new.
            When writing code, I use TypeScript. I also have experience working
            with the CMS Strapi. I know how to work in a team, am able to make
            the right decisions quickly, have a deeply analytical mindset,
            sociable, fast learner.
          </p>
          <Image
            className="summary__content-img"
            src="/img/avatar.jpg"
            alt="avatar"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Summary;
