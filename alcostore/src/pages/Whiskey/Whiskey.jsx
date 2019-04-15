import React, { Component } from 'react';
import axios from 'axios';

import DrinkItems from '../../components/DrinkItems/DrinkItems';

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
    return <DrinkItems drinkItems={this.state.drinkItems} />;
  }
}
