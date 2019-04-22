import React, { Component } from 'react';

import { Label, Select, Wrapper } from './styled.js';

export default class InputSelect extends Component {
  render() {
    const { onChange, value, label, options } = this.props;
    return (
      <Wrapper>
        <div>
          <Label>{label}</Label>
          <Select onChange={onChange} value={value}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>
      </Wrapper>
    );
  }
}
