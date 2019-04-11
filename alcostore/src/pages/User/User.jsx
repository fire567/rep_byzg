import React, { Component } from 'react';
import axios from 'axios';

export default class UserPage extends Component {
  state = {
    name: '',
    town: '',
  };

  componentDidMount() {
    axios.get('http://localhost:3000/user').then(response => {
      const { name, town } = response.data;
      this.setState({ name, town });
    });
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleTownChange = event => {
    this.setState({ town: event.target.value });
  };

  handleSubmit = () => {
    const { name, town } = this.state;
    axios.put('http://localhost:3000/user', {
      name,
      town,
    });
  };

  render() {
    const { name, town } = this.state;
    return (
      <div>
        <div>
          <label>Имя</label>
          <input onChange={this.handleNameChange} value={name} />
        </div>
        <div>
          <label>Город</label>
          <input onChange={this.handleTownChange} value={town} />
        </div>
        <div>
          <button onClick={this.handleSubmit}>Сохранить</button>
        </div>
      </div>
    );
  }
}
