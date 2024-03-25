'use client';
import React, { useState, useEffect, FC } from 'react';
import './Title.scss';

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  const [printedText, setPrintedText] = useState('');

  useEffect(() => {
    const printEffect = () => {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index <= text.length) {
          setPrintedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 100); // скорость печати, можно изменить по желанию
      return () => clearInterval(intervalId);
    };

    printEffect();
  }, [text]);

  return <h1 className="title">{printedText}</h1>;
};

export default Title;
