'use client';
import React, { FC, useState, useMemo } from 'react';
import { Fragment } from 'react';
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
import './Skills.scss';

const skills = [
  { name: 'html', icon: htmlSvg },
  { name: 'css', icon: cssSvg },
  { name: 'sass', icon: sasstSvg },
  { name: 'less', icon: lessSvg },
  { name: 'ant', icon: antSvg },
  { name: 'mui', icon: muiSvg },
  { name: 'js', icon: jsSvg },
  { name: 'ts', icon: tsSvg },
  { name: 'style-components', icon: styleCompSvg },
  { name: 'react', icon: reactSvg },
  { name: 'next.js', icon: nextSvg },
];

const Skills: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const parallaxOffset = useMemo(() => {
    return {
      x: (mousePosition.x - window.innerWidth / 2) / 20,
      y: (mousePosition.y - window.innerHeight / 2) / 20,
    };
  }, [mousePosition]);

  return (
    <section className="skills" onMouseMove={handleMouseMove}>
      <h2 className="skills__title">My skills</h2>
      <div className="skills__container">
        <div className="skills__wrap">
          {skills.map((skill, index) => (
            <Fragment key={index}>
              <div
                className="skills__wrap-item"
                style={{
                  transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
                }}
              >
                <Image
                  src={skill.icon}
                  width={150}
                  height={150}
                  alt={skill.name}
                />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
