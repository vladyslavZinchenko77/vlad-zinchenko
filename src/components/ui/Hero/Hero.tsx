import { FC } from 'react';
import Btn from '@/components/common/Btn/Btn';
import Image from 'next/image';
import ScrollIcon from '@/components/common/ScrollIcon/ScrollIcon';

import './Hero.scss';

const Hero: FC = () => {
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
          <h3 className="header-hero__small-text">Frontend Developer</h3>
          <Btn styles={{ marginTop: 24 }} isLink={true} hRef={linkToCv}>
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
