import React from 'react';

import Image from 'next/image';

import htmlSvg from '../../../../public/svg/html.svg';
import cssSvg from '../../../../public/svg/css.svg';
import jsSvg from '../../../../public/svg/js.svg';
import tsSvg from '../../../../public/svg/typescript.svg';
import sasstSvg from '../../../../public/svg/sass.svg';
import lessSvg from '../../../../public/svg/less.svg';
import antSvg from '../../../../public/svg/ant-design.svg';
import muiSvg from '../../../../public/svg/mui.svg';
import styleCompSvg from '../../../../public/svg/styledcomponents.svg';
import reactSvg from '../../../../public/svg/React-icon.svg';
import nextSvg from '../../../../public/svg/nextjs.svg';
import gitSvg from '../../../../public/svg/git.svg';

export type IconType =
  | 'html'
  | 'css'
  | 'js'
  | 'ts'
  | 'sass'
  | 'less'
  | 'ant'
  | 'mui'
  | 'styleComponents'
  | 'react'
  | 'next'
  | 'git';

const SvgIcon: React.FC<{
  type: IconType;
  height?: number;
  width?: number;
  onClick?: () => void;
}> = ({ type, height, width, onClick }) => {
  const source = {
    html: htmlSvg,
    css: cssSvg,
    js: jsSvg,
    ts: tsSvg,
    sass: sasstSvg,
    less: lessSvg,
    ant: antSvg,
    mui: muiSvg,
    styleComponents: styleCompSvg,
    react: reactSvg,
    next: nextSvg,
    git: gitSvg,
  }[type];

  return (
    <Image
      loading="lazy"
      src={source}
      height={height}
      width={width}
      alt={type}
    />
  );
};

export default SvgIcon;
