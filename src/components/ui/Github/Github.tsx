'use client';
import { FC, useEffect } from 'react';
import Title from '@/components/common/Title/Title';
import Image from 'next/image';
import gitHubImg from '../../../../public/img/logo-github.png';
import contributionsImg from '../../../../public/img/contributions.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Github.scss';

const Github: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.github',
        start: 'top 80%',
        toggleActions: 'restart none none none',
      },
    });

    tl.fromTo(
      '#github-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        '.github__content-logo',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 },
        '-=0.5'
      )
      .fromTo(
        '.github__content img',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.5'
      );
  }, []);

  return (
    <section className="github">
      <Title
        style={{ color: '#ffffff' }}
        text="GitHub activity in 2024 (April)"
        id="github-title"
      />
      <div className="github__content">
        <div className="github__content-logo">
          <Image
            loading="lazy"
            width={200}
            height={200}
            src={gitHubImg}
            alt="github"
          />
          <a href="https://github.com/vladyslavZinchenko77" target="_blank">
            Visit GitHub profile
          </a>
        </div>
        <Image
          loading="lazy"
          width={950}
          height={226}
          src={contributionsImg}
          alt="contrubutions in 2024"
        />
      </div>
    </section>
  );
};

export default Github;
