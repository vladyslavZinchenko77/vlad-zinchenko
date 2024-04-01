'use client';
import React, { FC, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Btn from '@/components/common/Btn/Btn';
import Image from 'next/image';
import ScrollIcon from '@/components/common/ScrollIcon/ScrollIcon';
import './Hero.scss';

const Hero: FC = () => {
  const [changingText, setChangingText] = useState<string>('Frontend');
  const words: string[] = ['Frontend', 'Markup', 'Web'];
  let currentWordIndex: number = 0;
  let currentLetterIndex: number = 0;

  useEffect(() => {
    gsap.from('.header-hero__main-text, .header-hero__small-text, #btn', {
      opacity: 0,
      y: 50,
      duration: 2,
      delay: 1,
      stagger: 0.2,
    });
    gsap.to('.header-hero__main-text, .header-hero__small-text, #btn', {
      opacity: 1,
      y: 0,
      duration: 2,
      delay: 1,
      stagger: 0.2,
    });

    const interval = setInterval(() => {
      if (currentLetterIndex === words[currentWordIndex].length) {
        setTimeout(() => {
          currentWordIndex = (currentWordIndex + 1) % words.length;
          currentLetterIndex = 0;
        }, 3000); // задержка перед сменой слова
      } else {
        setChangingText(
          words[currentWordIndex].slice(0, currentLetterIndex + 1)
        );
        currentLetterIndex++;
      }
    }, 100); // интервал между буквами

    return () => clearInterval(interval);
  }, []);

  const linkToCv =
    'https://drive.google.com/file/d/1D6AslG792JdJG4N-G6yZabKeFVCj-qfn/view?usp=sharing';

  return (
    <section className="header-hero">
      <div className="header-hero__video-bg">
        <video
          id="hd"
          className="video-full-hd"
          src="/video/full_hd.mp4"
          autoPlay
          muted={true}
          loop={true}
        ></video>
        <div className="effects"></div>
        <div className="header-hero__content">
          <h2 className="header-hero__main-text">Vladyslav Zinchenko</h2>
          <h3 className="header-hero__small-text">
            <span className="changing-text">{changingText}</span>
            <span className="static-text">Developer</span>
          </h3>
          <Btn
            id="btn"
            styles={{ marginTop: 24 }}
            isLink={true}
            href={linkToCv}
          >
            download CV{' '}
            <Image
              width={26}
              height={26}
              alt="download"
              src={'/svg/download.svg'}
            />
          </Btn>
          <ScrollIcon />
        </div>
      </div>
    </section>
  );
};

export default Hero;
