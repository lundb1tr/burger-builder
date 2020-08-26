import React from 'react';
import Aux from '../../hoc/auxiliary';
import './Layout.css';

const Layout = props => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
