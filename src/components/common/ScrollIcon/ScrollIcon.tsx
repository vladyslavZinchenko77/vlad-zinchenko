import React, { FC } from 'react';
import Image from 'next/image';

import './ScrollIcon.scss';

const ScrollIcon: FC = () => {
  return (
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
  );
};

export default ScrollIcon;
