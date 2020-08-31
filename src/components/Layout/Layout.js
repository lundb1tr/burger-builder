import React, { useState } from 'react';
import Aux from '../../hoc/auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(true);
  return (
    <Aux>
      <Toolbar />
      <SideDrawer
        open={showSideDrawer}
        closed={() => setShowSideDrawer(false)}
      />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
