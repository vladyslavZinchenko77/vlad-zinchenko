'use client';
import React, { FC, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SvgIcon from '@/components/common/SvgIcon/SvgIcon';
import { IconType } from '@/components/common/SvgIcon/SvgIcon';
import { skills } from './dataSkills';

import Title from '@/components/common/Title/Title';
import './Skills.scss';

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
    );

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
      <Title id="skills-title" text="skills" style={{ color: '#ffffff' }} />
      <div className="skills__container">
        <div className="skills__wrap">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="skills__wrap-item">
                <SvgIcon
                  type={skill.name as IconType}
                  height={100}
                  width={100}
                  key={index}
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
