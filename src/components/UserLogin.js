import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class UserLogin extends Component {
  render() {
    return (
      <div>
        <FlatButton label="Login"/>
        <FlatButton label="Sign In"/>
      </div>
    );
  }
}

export default UserLogin;
