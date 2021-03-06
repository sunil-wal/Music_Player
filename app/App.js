import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes {...this.props} />
      </Router>
    );
  }
}

export default App;
