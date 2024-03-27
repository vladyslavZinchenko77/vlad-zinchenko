'use client';
import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Header.scss';

const Header: FC = () => {
  const menuItemsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (menuItemsRef.current) {
      const menuItems = menuItemsRef.current.children;
      gsap.from(menuItems, {
        y: -50,
        delay: 4,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      });
      gsap.to(menuItems, {
        delay: 4,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      });
    }
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <p className="header__logo-text">CV Landing Page</p>
        </div>
        <nav className="header__menu">
          <ul ref={menuItemsRef} className="header__menu-list">
            {menuItems.map((item) => (
              <li key={item.id} className="header__menu-item">
                <a href={`#${item.id}`} className="header__menu-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
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
