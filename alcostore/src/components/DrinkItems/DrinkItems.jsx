import React, { Component } from 'react';

import DrinkItem from '../../components/DrinkItem/DrinkItem';
import { Wrapper } from './styled.js';

export default class DrinkItems extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.drinkItems.map((drinkItem, i) => (
          <DrinkItem key={i} item={drinkItem} />
        ))}
      </Wrapper>
    );
  }
}
