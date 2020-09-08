import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxiliary/auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

const SideDrawer = ({ open, closed }) => {
  const attachedClasses = ['SideDrawer', 'Close'];

  if (open) {
    attachedClasses.pop();
    attachedClasses.push('Open');
  }

  return (
    <Aux>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <Logo currentHeight="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
