import { FC } from 'react';
import { TitleProps } from '@/types/commonTypes';
import './Title.scss';

const Title: FC<TitleProps> = ({ text, id }) => {
  return (
    <h1 id={id} className="title">
      {text}
    </h1>
  );
};

export default Title;
