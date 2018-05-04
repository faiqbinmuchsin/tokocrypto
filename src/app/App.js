import React, { Component } from 'react';
import './App.css';

import Home from '../page/home';

import {
  Container
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Home />
        </Container>
      </div>
    );
  }
}

export default App;
