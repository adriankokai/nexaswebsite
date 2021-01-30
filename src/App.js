import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './website/home';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={home} />
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(null, mapDispatchToProps)(App)
