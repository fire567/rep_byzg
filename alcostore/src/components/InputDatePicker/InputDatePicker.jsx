import React, { Component } from 'react';

import { DatePicker } from 'antd';
import { Label, Wrapper } from './styled';

export default class InputDatePicker extends Component {
  render() {
    const { label, ...antdAttrs } = this.props;
    return (
      <Wrapper>
        <Label>{label}</Label>
        <DatePicker {...antdAttrs} />
      </Wrapper>
    );
  }
}
