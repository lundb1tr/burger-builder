import React from 'react';
import Aux from '../../hoc/auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
