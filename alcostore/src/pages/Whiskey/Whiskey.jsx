import React, { Component } from 'react';

import DrinkItem from '../../components/DrinkItem/DrinkItem';
import drinkItems from './drinkItems.json';

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
