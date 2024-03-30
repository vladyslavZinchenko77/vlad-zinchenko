'use client';
import { FC, useState } from 'react';
import './BurgerIcon.scss';

interface BurgerIconProps {
  isOpenMenu: boolean;
  setIsOpenMenu: (value: boolean) => void;
}

const BurgerIcon: FC<BurgerIconProps> = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <div onClick={() => setIsOpenMenu(!isOpenMenu)} className="header__burger">
      <div className={`header__burger-icon ${isOpenMenu ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BurgerIcon;
