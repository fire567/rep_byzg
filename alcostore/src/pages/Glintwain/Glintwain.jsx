import React, { Component } from 'react';

import drinkItems from './drinkItems.json';
import DrinkItem from './DrinkItem';

export default class GlintwainPage extends Component {
  render() {
    return <DrinkItem item={drinkItems[0]} />;
  }
}
