import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

class Home extends Component {
  componentDidMount() {
    console.log('Hey');
  }

  render() {
    return (
      <Container>
        <h1> Hello World </h1>
      </Container>
    );
  }
}

export default Home;
