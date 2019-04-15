import React, { Component } from 'react';
import axios from 'axios';

import DrinkItems from '../../components/DrinkItems/DrinkItems';

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
    return <DrinkItems drinkItems={this.state.drinkItems} />;
  }
}
