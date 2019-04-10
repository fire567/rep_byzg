import React, { Component } from 'react';
import axios from 'axios';

import DrinkItem from '../../components/DrinkItem/DrinkItem';

export default class VermutPage extends Component {
  state = {
    drinkItems: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3000/vermut').then(response => {
      this.setState({ drinkItems: response.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.drinkItems.map((drinkItem, i) => (
          <DrinkItem key={i} item={drinkItem} />
        ))}
      </div>
    );
  }
}
