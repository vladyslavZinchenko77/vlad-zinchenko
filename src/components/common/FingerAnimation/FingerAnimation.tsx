import { FC } from 'react';

import Image from 'next/image';

import './FingerAnimation.scss';

const FingerAnimation: FC = () => {
  return (
    <div className="finger">
      <Image width={31} height={31} alt="finger" src={'/svg/finger.svg'} />
    </div>
  );
};

export default FingerAnimation;
