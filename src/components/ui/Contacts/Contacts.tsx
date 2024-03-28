import { FC } from 'react';

import Title from '@/components/common/Title/Title';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

import './Contacts.scss';

const contacts = [
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
  return (
    <section className="contacts">
      <Title text="My contacts" />
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
