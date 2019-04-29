import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import InputText from '../../components/InputText/InputText';
import InputSelect from '../../components/InputSelect/InputSelect';
import InputCheck from '../../components/InputCheck/InputCheck';
import InputDatePicker from '../../components/InputDatePicker/InputDatePicker';

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
    birthDate: moment(),
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
        birthDate,
      } = response.data;
      this.setState({
        name,
        town,
        sex,
        payment,
        eulaConfirm,
        notificationConfirm,
        birthDate: moment(birthDate),
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

  handleBirthDateChange = birthDate => {
    this.setState({ birthDate });
  };

  handleSubmit = () => {
    const {
      name,
      town,
      sex,
      payment,
      eulaConfirm,
      notificationConfirm,
      birthDate,
    } = this.state;
    axios.put('http://localhost:3000/user', {
      name,
      town,
      sex,
      payment,
      eulaConfirm,
      notificationConfirm,
      birthDate: birthDate.format(),
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
      birthDate,
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
        <InputDatePicker
          value={birthDate}
          onChange={this.handleBirthDateChange}
        />
        <Bottom>
          <Button onClick={this.handleSubmit}>Сохранить</Button>
        </Bottom>
      </Wrapper>
    );
  }
}
