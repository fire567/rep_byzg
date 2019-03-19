import React, { Component } from 'react';

import './Sidebar.css'

export default class Sidebar extends Component {
  render(){
    return(
      <div className="sidebar">
        <a href="javascript:void(0)">Главная</a>
        <p />
        <a href="javascript:void(0)">Глинтевейн</a>
        <p />
        <a href="javascript:void(0)">Вермут</a>
      </div>
    )
  }
}