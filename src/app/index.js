import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../helpers/history';
import Home from '../components/Home';
import Work from '../components/Work';

import Container from '../components/Container';

import '../helpers';
import './app.css';

const App = () => {
  return (
    <Router history={history}>
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
      </Container>
    </Router>
  );
};

export default App;
