import React from 'react';
import './NavigationItem.css';

const NavigationItem = ({ children, link, active }) => {
  return (
    <li className="NavigationItem">
      <a href={link} className={active ? 'active' : null}>
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
