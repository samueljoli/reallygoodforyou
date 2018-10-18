import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 100px;
  width: 100px;
  height: 100px;
  backgroundColor: red;
`;

class Home extends Component {
  componentDidMount() {
    alert('I did mount');
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
