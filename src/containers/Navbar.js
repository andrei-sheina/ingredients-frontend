import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import UserLogin from '../components/UserLogin';

class Navbar extends Component {
  render() {
    return (
      <AppBar iconElementRight={<UserLogin />}/>
    );
  }
}

export default Navbar;
