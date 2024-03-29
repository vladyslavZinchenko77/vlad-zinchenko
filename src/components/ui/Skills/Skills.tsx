'use client';
import React, { FC, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

import Image from 'next/image';
import Title from '@/components/common/Title/Title';
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
  { name: 'git', icon: gitSvg },
  { name: 'react', icon: reactSvg },
  { name: 'next.js', icon: nextSvg },
];

const Skills: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills',
        start: 'top',
        toggleActions: 'restart none none none',
      },
    });

    tl.fromTo(
      '#skills-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    ).fromTo(
      '.skill',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    );
    // .fromTo(
    //   '.skills__wrap-item',
    //   { opacity: 0, y: 50, delay: 1 },
    //   { opacity: 1, y: 0, duration: 1 },
    //   '-=0.5'
    // );

    skills.forEach((_, index) => {
      tl.fromTo(
        `.skills__wrap-item:nth-child(${index + 1})`,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        index * 0.5
      );
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <Title id="skills-title" text="skills" />
      <div className="skills__container">
        <div className="skills__wrap">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="skills__wrap-item">
                <Image
                  src={skill.icon}
                  width={150}
                  height={150}
                  alt={skill.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
