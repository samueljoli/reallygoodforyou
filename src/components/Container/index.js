import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

import MenuButtons from '../MenuButtons';

const { Content } = Layout;

class Container extends Component {
  render() {
    return (
      <Layout>
        <MenuButtons />
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
};

export default Container;

