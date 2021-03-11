import React from 'react';
import { scroller } from 'react-scroll';

export const Navbar = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className="Navbar">
      <div className="logo"></div>
      <div className="links">
        <div className="link link1">Etusivu</div>
        <div className="link link2" onClick={scrollToSection.bind(null, 'bl1')}>
          Meistä
        </div>
        <div className="link link3" onClick={scrollToSection.bind(null, 'bl2')}>
          Palvelut
        </div>
        <div className="link link4" onClick={scrollToSection.bind(null, 'bl3')}>
          Tuotteet
        </div>
        <div className="link link5" onClick={scrollToSection.bind(null, 'bl4')}>
          Lahjakortti
        </div>
        <div className="link link6" onClick={scrollToSection.bind(null, 'bl5')}>
          Yhteystiedot
        </div>
      </div>
    </div>
  );
};
