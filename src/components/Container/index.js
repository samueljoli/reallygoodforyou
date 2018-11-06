import React, { Component } from 'react';
import { Layout } from 'antd';

import MenuButtons from '../MenuButtons';

const { Content } = Layout;

class Container extends Component {
  render() {
    const { location } = this.props.history;

    return (
      <Layout>
        <MenuButtons location={location}/>
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
};

export default Container;

