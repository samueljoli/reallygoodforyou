import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import history from '../helpers/history';
import Home from '../components/Home';

import Container from '../components/Container';

import '../helpers';
import './app.css';

const { Content } = Layout;

const App = () => {
  return (
    <Router history={history}>
        <Container>
          <Route exact path="/" component={Home} />
        </Container>
    </Router>
  );
};

export default App;
