'use client';
import React, { FC } from 'react';
import { Fragment } from 'react';

import Image from 'next/image';

import Title from '@/components/common/Title/Title';

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
  return (
    <section className="skills">
      <Title id="skills-title" text="skills" />
      <div className="skills__container">
        <div className="skills__wrap">
          {skills.map((skill, index) => (
            <Fragment key={index}>
              <div className="skills__wrap-item">
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
