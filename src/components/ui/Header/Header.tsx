'use client';
import { FC, useState } from 'react';
import './Header.scss';

const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <p className="header__logo-text">CV Landing Page</p>
        </div>
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map((item) => (
              <li key={item.id} className="header__menu-item">
                <a href={`#${item.id}`} className="header__menu-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="header__burger"
        >
          <div className={`header__burger-icon ${isOpenMenu ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <nav className={`header__burger-menu ${isOpenMenu ? 'open' : ''}`}>
        <ul className="header__burger-menu--list">
          {menuItems.map((item) => (
            <li key={item.id} className="header__burger-menu--item">
              <a href={`#${item.id}`} className="header__burger-menu--link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const menuItems = [
  { id: 'home', title: 'home' },
  { id: 'summary', title: 'summary' },
  { id: 'skills', title: 'skills' },
  { id: 'works', title: 'works' },
  { id: 'education', title: 'education' },
  { id: 'contacts', title: 'contacts' },
];
