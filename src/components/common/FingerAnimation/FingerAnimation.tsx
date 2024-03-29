import { FC } from 'react';

import Image from 'next/image';

import './FingerAnimation.scss';

interface FingerAnimProps {
  id: string;
}

const FingerAnimation: FC<FingerAnimProps> = ({ id }) => {
  return (
    <div id={id} className="finger">
      <Image width={31} height={31} alt="finger" src={'/svg/finger.svg'} />
    </div>
  );
};

export default FingerAnimation;
