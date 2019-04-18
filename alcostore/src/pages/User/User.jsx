import React, { Component } from 'react';
import axios from 'axios';

import InputText from '../../components/InputText/InputText';
import {
  Wrapper,
  Header,
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
    sex: '',
  };

  componentDidMount() {
    axios.get('http://localhost:3000/user').then(response => {
      const { name, town, sex } = response.data;
      this.setState({ name, town, sex });
    });
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleTownChange = event => {
    this.setState({ town: event.target.value });
  };

  handleSexChange = event => {
    this.setState({ sex: event.target.value });
  };

  handleSubmit = () => {
    const { name, town, sex } = this.state;
    axios.put('http://localhost:3000/user', {
      name,
      town,
      sex,
    });
  };

  render() {
    const { name, town, sex } = this.state;
    return (
      <Wrapper>
        <Header>Введите данные</Header>
        <InputText
          onChange={this.handleNameChange}
          value={name}
          label="Имя"
          required
        />
        <InputText
          onChange={this.handleTownChange}
          value={town}
          label="Город"
        />
        <select onChange={this.handleSexChange} value={sex}>
          <option value={1}>мужской</option>
          <option value={2}>женский</option>
          <option value={3}>не определен</option>
        </select>
        <Bottom>
          <Button onClick={this.handleSubmit}>Сохранить</Button>
        </Bottom>
      </Wrapper>
    );
  }
}
