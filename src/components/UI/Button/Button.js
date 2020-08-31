import React from 'react';
import './Button.css';

const Button = ({ clicked, children, btnType }) => {
  return (
    <button className={['Button', btnType].join(' ')} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
