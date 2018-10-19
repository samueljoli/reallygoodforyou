import React, { Component } from 'react';
import styled from 'styled-components';
import { Row } from 'antd';

import SeedScene from '../../objects/Scene.js';
import { WebGLRenderer, PerspectiveCamera, Scene, Vector3 } from 'three';

const Container = styled.div`
  width: 400px;
  height: 400px;
  background-color: red;
`;

class Home extends Component {
  componentDidMount() {
    this.width = this.mount.clientWidth;
    this.height = this.mount.clientHeight;

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      1000
    );
    this.renderer = new WebGLRenderer({ antialias: true });
    this.seedScene = new SeedScene();


    // camera
    this.camera.position.set(6,3,-10);
    this.camera.lookAt(new Vector3(0,0,0));

    // renderer
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x7ec0ee, 1);
    this.mount.appendChild(this.renderer.domElement);

    // handle resize
    this.windowResizeHandler();
    window.addEventListener('resize', this.windowResizeHandler);

    this.scene.add(this.seedScene);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  animate = (timestamp) => {
    this.renderer.render(this.scene, this.camera);
    this.seedScene.update && this.seedScene.update(timestamp);
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = window.requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    window.cancelAnimationFrame(this.frameId);
  }

  windowResizeHandler = () => {
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  render() {
    return (
      <Row type="flex" justify="center"> 
        <Container
          className="testing"
          ref={(mount) => {
            this.mount = mount;
          }}
        >
        </Container>
      </Row>
    );
  }
}

export default Home;
