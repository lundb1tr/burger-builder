import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = ({ currentHeight }) => {
  return (
    <div className="Logo" style={{ height: currentHeight }}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
