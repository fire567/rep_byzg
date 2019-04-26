import React, { Component } from 'react';

import { Wrapper } from './styled.js';

export default class InputCheck extends Component {
  render() {
    const { onChange, label, value } = this.props;
    return (
      <Wrapper>
        <label>
          <input checked={value} onChange={onChange} type="checkbox" /> {label}
        </label>
      </Wrapper>
    );
  }
}
