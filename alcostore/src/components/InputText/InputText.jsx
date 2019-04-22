import React, { Component } from 'react';

import { Label, InputWrapper, Input, Required } from './styled.js';

export default class InputText extends Component {
  render() {
    const { onChange, value, label, required } = this.props;
    return (
      <div>
        <Label>
          {label}
          {required && <Required>*</Required>}

          <InputWrapper>
            <Input onChange={onChange} value={value} />
          </InputWrapper>
        </Label>
      </div>
    );
  }
}
