import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { WebGLRenderer, PerspectiveCamera, Scene, Vector3 } from 'three';

import SeedScene from '../../objects/Scene.js';
import media from '../../helpers/media';

const Container = styled.div`
  height: 400px;
  width: 80%;
`;

class Home extends Component {
  render() {

    return (
      <Row type="flex" justify="center"> 
        <Container />
      </Row>
    );
  }
}

export default Home;
