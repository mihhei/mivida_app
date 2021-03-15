import React, { useEffect, useState } from 'react';
import { Links } from './links';

export const SlidingMenu = () => {
  const [show, setShow] = useState('');

  useEffect(() => {
    setShow(' show');
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow('');
    } else {
      setShow(' show');
    }
  };

  return (
    <>
      <div className={'slidingMenu' + show}>
        <Links />
      </div>
    </>
  );
};
