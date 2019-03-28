import React, { Component } from 'react';
import { Link } from 'react-router';

import { Wrapper } from './styled.js';

export default class Sidebar extends Component {
  render() {
    return (
      <Wrapper>
        <Link to="/">Главная</Link>
        <p />
        <Link to="glintwain">Глинтевейн</Link>
        <p />
        <a href="javascript:void(0)">Вермут</a>
      </Wrapper>
    );
  }
}
