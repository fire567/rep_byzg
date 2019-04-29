import React, { Component } from 'react';

import { DatePicker } from 'antd';
import { Wrapper } from './styled';

export default class birthDate extends Component {
  render() {
    return (
      <Wrapper>
        <DatePicker />
      </Wrapper>
    );
  }
}
