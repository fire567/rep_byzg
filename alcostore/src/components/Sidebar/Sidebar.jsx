import React, { Component } from 'react';
import { Link } from 'react-router';

import { Wrapper } from './styled.js';

export default class Sidebar extends Component {
  render() {
    return (
      <Wrapper>
        <Link to="/">Главная</Link>
        <p />
        <Link to="user">Пользователь</Link>
        <p />
        <Link to="whiskey">Виски</Link>
        <p />
        <Link to="vermut">Вермут</Link>
        <p />
      </Wrapper>
    );
  }
}
