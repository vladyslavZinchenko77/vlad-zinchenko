import { FC } from 'react';
import './Title.scss';

interface TitleProps {
  text: string;
  id: string;
}

const Title: FC<TitleProps> = ({ text, id }) => {
  return (
    <h1 id={id} className="title">
      {text}
    </h1>
  );
};

export default Title;
