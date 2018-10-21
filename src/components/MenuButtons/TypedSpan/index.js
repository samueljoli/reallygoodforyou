import React, { Component } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

class TypedSpan extends Component {
  componentDidMount() {
    const { string } = this.props;
    const options = {
      strings: [string],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destoy();
  }

  componentWillUpdate() {
    this.typed.reset(true);
  }

  render() {
    return (
      <span
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}

export default TypedSpan;
