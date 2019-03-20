import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="container">
         <Header />
        <div className="body">
          <Sidebar />
          <div className="content">

          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

