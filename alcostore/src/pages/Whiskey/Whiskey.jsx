import React, { Component } from 'react';

import drinkItems from './drinkItems.json';
import DrinkItem from './DrinkItem';

export default class WhiskeyPage extends Component {
  render() {
    return (
      <div>
        {drinkItems.map((drinkItem, i) => (
          <DrinkItem key={i} item={drinkItem} />
        ))}
      </div>
    );
  }
}
