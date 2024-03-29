'use client';
import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Header.scss';

const Header: FC = () => {
  const menuItemsRef = useRef<HTMLUListElement>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (menuItemsRef.current) {
      const menuItems = menuItemsRef.current.children;
      gsap.from(menuItems, {
        opacity: 0,
        y: -50,
        delay: 4,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      });
      gsap.to(menuItems, {
        opacity: 1,
        delay: 4,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      });
    }
  }, []);

  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__logo">
          <p className="header__logo-text">CV Landing Page</p>
        </div>
        <nav className="header__menu">
          <ul ref={menuItemsRef} className="header__menu-list">
            {menuItems.map((item) => (
              <li key={item.id} className="header__menu-item">
                <a
                  href={`#${item.id}`}
                  className="header__menu-link"
                  onClick={() => {
                    scrollToSection(item.sectionId);
                  }}
                >
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
  { id: 'homeLink', title: 'home', sectionId: 'header' },
  { id: 'summaryLink', title: 'summary', sectionId: 'summary' },
  { id: 'skillsLink', title: 'skills', sectionId: 'skills' },
  { id: 'worksLink', title: 'projects', sectionId: 'projects' },
  { id: 'contactsLink', title: 'contacts', sectionId: 'contacts' },
];
