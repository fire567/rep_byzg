import React, { Component } from 'react';

import { Wrapper } from './styled.js';

export default class InputCheck extends Component {
  render() {
    return (
      <Wrapper>
        <label>
          <input type="checkbox" /> {this.props.label}
        </label>
      </Wrapper>
    );
  }
}
