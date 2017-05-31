import React, { Component } from 'react';
import ListItem from 'material-ui/List/ListItem';

class SidebarListItem extends Component {
  render() {
    return (
      <ListItem primaryText={this.props.displayText} />
    );
  }
}

export default SidebarListItem;
