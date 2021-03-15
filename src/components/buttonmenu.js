import React, { useState } from 'react';
import { SlidingMenu } from './slidingmenu';

export const ButtonMenu = () => {
  const [menuButton, setMenuButton] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const clickHandler = () => {
    if (!menuButton) {
      setMenuButton(' selected');
      setShowMenu(true);
    } else {
      setMenuButton('');
      setShowMenu(false);
    }
  };
  return (
      <>
    <div className={'menu-btn' + menuButton} onClick={clickHandler}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
    {showMenu && <SlidingMenu />}
    </>
  );
};
