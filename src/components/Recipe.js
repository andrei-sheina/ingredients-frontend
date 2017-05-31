import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';

class Recipe extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h3>Card Header</h3>
        </CardHeader>
        <CardMedia>
          <img src="https://placehold.it/200?text=No+Image" alt=""/>
        </CardMedia>
        <CardTitle>
          <p>Card Title</p>
        </CardTitle>
      </Card>
    );
  }
}

export default Recipe;
