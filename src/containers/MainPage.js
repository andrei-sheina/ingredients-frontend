import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SearchForm from './SearchForm';
import RecipesList from './RecipesList';

class MainPage extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12} md={12}>
              <Navbar />
              <Sidebar />
              <SearchForm />
              <RecipesList />
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default MainPage;
