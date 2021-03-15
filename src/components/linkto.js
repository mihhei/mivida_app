import React from 'react';
import { scroller } from 'react-scroll';

export const LinkTo = ({linkName, toBlock, scrollTime}) => {
    const scrollToSection = (section, long) => {
        scroller.scrollTo(section, {
          duration: long || 2000,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      };

      return (
        <div
        className="link"
        onClick={scrollToSection.bind(null, toBlock, scrollTime)}
      >
        {linkName}
      </div>
      )
}