import { FC } from 'react';
import { TitleProps } from '@/types/commonTypes';
import './Title.scss';

const Title: FC<TitleProps> = ({ text, id, style }) => {
  return (
    <h1 id={id} className="title" style={style}>
      {text}
    </h1>
  );
};

export default Title;
