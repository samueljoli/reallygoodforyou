import React, { Component } from 'react';
import styled from 'styled-components';
import { Row } from 'antd';

const Container = styled.div`
  height: 400px;
  width: 80%;
`;

class Home extends Component {
  render() {

    return (
      <Row
        type="flex"
        justify="center"
        style={{ backgroundColor: 'white' }}
      >
        <Container />
      </Row>
    );
  }
}

export default Home;
