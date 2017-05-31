import React, { Component } from 'react';
import List from 'material-ui/List';
import SidebarListItem from './SidebarListItem';

class SidebarList extends Component {
  render() {
    return (
      <List>
        <SidebarListItem displayText="Любимые рецепты"/>
        <SidebarListItem displayText="Мои рецепты"/>
        <SidebarListItem displayText="Добавить рецепт"/>
      </List>
    );
  }
}

export default SidebarList;
