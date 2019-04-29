import React, { Component } from 'react';

import { DatePicker } from 'antd';
import { Wrapper } from './styled';

export default class InputDatePicker extends Component {
  render() {
    return (
      <Wrapper>
        <DatePicker {...this.props} />
      </Wrapper>
    );
  }
}
