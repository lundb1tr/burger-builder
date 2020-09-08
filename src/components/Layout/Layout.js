import React, { useState } from 'react';
import Aux from '../../hoc/auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const toggleSideDrawer = prevState => {
    setShowSideDrawer(!prevState);
  };

  return (
    <Aux>
      <Toolbar openSideDrawer={() => toggleSideDrawer(showSideDrawer)} />
      <SideDrawer
        open={showSideDrawer}
        closed={() => toggleSideDrawer(showSideDrawer)}
      />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
