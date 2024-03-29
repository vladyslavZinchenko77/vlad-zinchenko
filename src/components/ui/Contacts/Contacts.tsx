'use client';
import { FC, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ContactItemType } from '@/types/commonTypes';

import Title from '@/components/common/Title/Title';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

import './Contacts.scss';

const contacts: ContactItemType[] = [
  { icon: <LocationOnIcon />, title: 'Location', text: 'Ukraine' },
  { icon: <PhoneIphoneIcon />, title: 'Phone', text: '+38 (098) 253 2614' },
  {
    icon: <EmailIcon />,
    title: 'E-mail',
    text: 'vladyslav.zinchenko@gmail.com',
  },
  {
    icon: <TelegramIcon />,
    title: 'Telegram',
    text: '@vlad_zinchenko92',
  },
];

const Contacts: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    console.log('useEffect triggered');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contacts',
        start: 'top',
        toggleActions: 'restart none none none',
        onEnter: () => console.log('ScrollTrigger entered'),
        onLeave: () => console.log('ScrollTrigger left'),
      },
    });

    console.log('Timeline created');

    tl.fromTo(
      '#contacts-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    contacts.forEach((_, index) => {
      tl.fromTo(
        `.contacts__wrap-item:nth-child(${index + 1})`,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        index * 0.5 // Задержка для каждого контакта
      );
    });
  }, []);
  return (
    <section className="contacts">
      <Title id="contacts-title" text="My contacts" />
      <div className="contacts__container">
        <div className="contacts__wrap">
          {contacts.map((item, index) => {
            return (
              <div key={index} className="contacts__wrap-item">
                <div className="contacts__wrap-item--icon">{item.icon}</div>
                <div className="contacts__wrap-item--wrapper">
                  <h3 className="contacts__wrap-item--title">{item.title}</h3>
                  <p className="contacts__wrap-item--link">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
