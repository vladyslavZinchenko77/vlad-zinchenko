import { FC } from 'react';

import '../../../../public/svg/down-arrow.svg';
import Image from 'next/image';

import './Hero.scss';

const Hero: FC = () => {
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
          <h3 className="header-hero__small-text">Frontend Developer</h3>
          <a
            className="header-hero__btn"
            target="_blank"
            href="https://drive.google.com/file/d/1D6AslG792JdJG4N-G6yZabKeFVCj-qfn/view?usp=sharing"
          >
            <p className="header-hero__btn-text">download CV </p>
            <div className="header-hero__btn-icon">
              <Image
                width={26}
                height={26}
                alt="download"
                src={'/svg/download.svg'}
              />
            </div>
          </a>
          <div className="header-hero__scroll-icon">
            <div className="arrow one">
              <Image
                width={40}
                height={40}
                alt="arrow-down"
                src={'/svg/down-arrow.svg'}
              />
            </div>
            <div className="arrow two">
              <Image
                width={40}
                height={40}
                alt="arrow-down"
                src={'/svg/down-arrow.svg'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
