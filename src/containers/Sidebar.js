import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import SidebarList from '../components/SidebarList';

class Sidebar extends Component {
  render() {
    return (
      <Drawer open={false}>
        <SidebarList />
      </Drawer>
    );
  }
}

export default Sidebar;
