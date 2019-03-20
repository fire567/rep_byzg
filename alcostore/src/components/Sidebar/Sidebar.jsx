import React, { Component } from 'react';

import { Wrapper } from './styled.js';


export default class Sidebar extends Component {
  render(){
    return(
      <Wrapper>
        <a href="javascript:void(0)">Главная</a>
        <p />
        <a href="javascript:void(0)">Глинтевейн</a>
        <p />
        <a href="javascript:void(0)">Вермут</a>
      </Wrapper>
    )
  }
}