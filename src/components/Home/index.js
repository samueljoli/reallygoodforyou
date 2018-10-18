import React, { Component } from 'react';
import styled from 'styled-components';

import SeedScene from '../../objects/Scene.js';
import { WebGLRenderer, PerspectiveCamera, Scene, Vector3 } from 'three';

const Container = styled.div`
`;

class Home extends Component {
  componentDidMount() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera();
    this.renderer = new WebGLRenderer({ antialias: true });
    this.seedScene = new SeedScene();
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
