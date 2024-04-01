import { FC } from 'react';
import './Logo.scss';

const Logo: FC = () => {
  return (
    <a href="#" className="logo__wrap">
      <div className="logo">
        <p className="left">&lt;</p>
        <p className="slash">/</p>
        <p className="right">&gt;</p>
      </div>
    </a>
  );
};

export default Logo;
