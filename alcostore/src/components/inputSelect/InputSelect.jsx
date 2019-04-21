import React, { Component } from 'react';

import { Label, Select, Wrapper } from './styled.js';

export default class InputSelect extends Component {
  render() {
    const { onChange, value, sex, payment, label } = this.props;
    return (
      <Wrapper>
        {value <= 3 && (
          <div>
            <Label>Пол</Label>
            <Select onChange={onChange} value={value}>
              <option value={1}>мужской</option>
              <option value={2}>женский</option>
              <option value={3}>не определен</option>
            </Select>
          </div>
        )}

        {value > 3 && (
          <div>
            <Label>Способ оплаты</Label>
            <Select onChange={onChange} value={value}>
              <option value={4}>картой</option>
              <option value={5}>телефоном</option>
            </Select>
          </div>
        )}
      </Wrapper>
    );
  }
}
