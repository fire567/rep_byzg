import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import { Wrapper, Body, Content } from './styled';

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Body>
          <Sidebar />
          <Content>
            {this.props.children}
          </Content>
        </Body>
        <Footer />
      </Wrapper>
    )
  }
}

