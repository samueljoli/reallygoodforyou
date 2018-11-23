import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../helpers/history';

import Home from '../components/Home';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Container from '../components/Container';

import '../helpers';
import './app.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Container history={history}>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cultclassic" component={() => window.location = 'https://cultclassic2.splashthat.com/'} />
        </Container>
      </Router>
    );
  }
}

export default App;
