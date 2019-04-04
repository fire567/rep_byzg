import React, { Component } from 'react';
import axios from 'axios';

import DrinkItem from '../../components/DrinkItem/DrinkItem';

export default class WhiskeyPage extends Component {
  state = {
    drinkItems: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3000/whiskey').then(response => {
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
