import React, { Component } from 'react';
import axios from 'axios';

import InputText from '../../components/InputText/InputText';
import InputSelect from '../../components/InputSelect/InputSelect';

import {
  Wrapper,
  Header,
  Town,
  InputTown,
  Bottom,
  Input,
  Button,
  SelectWrapper,
} from './styled.js';

export default class UserPage extends Component {
  state = {
    name: '',
    town: '',
    sex: '',
  };

  componentDidMount() {
    axios.get('http://localhost:3000/user').then(response => {
      const { name, town, sex, payment } = response.data;
      this.setState({ name, town, sex, payment });
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

  handlePayChange = event => {
    this.setState({ payment: event.target.value });
  };

  handleSubmit = () => {
    const { name, town, sex, payment } = this.state;
    axios.put('http://localhost:3000/user', {
      name,
      town,
      sex,
      payment,
    });
  };

  render() {
    const { name, town, sex, payment } = this.state;
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
        <SelectWrapper>
          <InputSelect
            onChange={this.handleSexChange}
            value={sex}
            label="Пол"
          />
          <InputSelect
            onChange={this.handlePayChange}
            value={payment}
            label="Способ оплаты"
          />
        </SelectWrapper>
        <Bottom>
          <Button onClick={this.handleSubmit}>Сохранить</Button>
        </Bottom>
      </Wrapper>
    );
  }
}
