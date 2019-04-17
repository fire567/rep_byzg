import React, { Component } from 'react';
import axios from 'axios';

import {
  Wrapper,
  Header,
  Name,
  InputName,
  Town,
  InputTown,
  Bottom,
  Input,
  Button,
} from './styled.js';

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
      <Wrapper>
        <Header>Введите данные</Header>
        <div>
          <Name>Имя*</Name>
          <InputName>
            <Input onChange={this.handleNameChange} value={name} />
          </InputName>
        </div>
        <div>
          <Town>Город*</Town>
          <InputTown>
            <Input onChange={this.handleTownChange} value={town} />
          </InputTown>
        </div>
        <Bottom>
          <Button onClick={this.handleSubmit}>Сохранить</Button>
        </Bottom>
      </Wrapper>
    );
  }
}
