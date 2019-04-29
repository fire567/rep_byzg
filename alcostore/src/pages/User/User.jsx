import React, { Component } from 'react';
import axios from 'axios';

import InputText from '../../components/InputText/InputText';
import InputSelect from '../../components/InputSelect/InputSelect';
import InputCheck from '../../components/InputCheck/InputCheck';
import birthDate from '../../components/InputDatePicker/InputDatePicker';

import { Wrapper, Header, Bottom, Button, SelectWrapper } from './styled.js';

const SEX_OPTIONS = [
  { value: 1, label: 'мужской' },
  { value: 2, label: 'женский' },
  { value: 3, label: 'не определён' },
];

const PAYMENT_OPTIONS = [
  { value: 1, label: 'картой' },
  { value: 2, label: 'телефоном' },
];

export default class UserPage extends Component {
  state = {
    name: '',
    town: '',
    sex: '',
    eulaConfirm: true,
    notificationConfirm: true,
  };

  componentDidMount() {
    axios.get('http://localhost:3000/user').then(response => {
      const {
        name,
        town,
        sex,
        payment,
        eulaConfirm,
        notificationConfirm,
      } = response.data;
      this.setState({
        name,
        town,
        sex,
        payment,
        eulaConfirm,
        notificationConfirm,
      });
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

  handleEulaConfirmChange = event => {
    this.setState({ eulaConfirm: event.target.checked });
  };

  handleNotificationConfirmChange = event => {
    this.setState({ notificationConfirm: event.target.checked });
  };

  handleSubmit = () => {
    const {
      name,
      town,
      sex,
      payment,
      eulaConfirm,
      notificationConfirm,
    } = this.state;
    axios.put('http://localhost:3000/user', {
      name,
      town,
      sex,
      payment,
      eulaConfirm,
      notificationConfirm,
    });
  };

  render() {
    const {
      name,
      town,
      sex,
      payment,
      eulaConfirm,
      notificationConfirm,
    } = this.state;
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
            options={SEX_OPTIONS}
          />
          <InputSelect
            onChange={this.handlePayChange}
            value={payment}
            label="Способ оплаты"
            options={PAYMENT_OPTIONS}
          />
        </SelectWrapper>
        <InputCheck
          value={eulaConfirm}
          onChange={this.handleEulaConfirmChange}
          label="я согласен с условиями"
        />
        <InputCheck
          value={notificationConfirm}
          onChange={this.handleNotificationConfirmChange}
          label="хочу получать уведомления"
        />
        <birthDate />
        <Bottom>
          <Button onClick={this.handleSubmit}>Сохранить</Button>
        </Bottom>
      </Wrapper>
    );
  }
}
