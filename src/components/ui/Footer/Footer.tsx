import React, { FC } from 'react';
import { SocialsType } from '@/types/commonTypes';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Footer.scss';

const socials: SocialsType[] = [
  {
    icon: <FacebookIcon className="footer__icon" />,
    url: 'https://www.facebook.com/Vladyslav.Zinchenko',
  },
  {
    icon: <LinkedInIcon className="footer__icon" />,
    url: 'https://www.linkedin.com/in/vladyslav-zinchenko-67414a205/',
  },
  {
    icon: <InstagramIcon className="footer__icon" />,
    url: 'https://www.instagram.com/zinchenko_vladyslav/',
  },
  {
    icon: <GitHubIcon className="footer__icon" />,
    url: 'https://github.com/vladyslavZinchenko77',
  },
  {
    icon: <TelegramIcon className="footer__icon" />,
    url: 'https://t.me/vlad_zinchenko92',
  },
];

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {socials.map((item, index) => {
          return (
            <a
              className="footer__link"
              target="_blank"
              key={index}
              href={item.url}
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
