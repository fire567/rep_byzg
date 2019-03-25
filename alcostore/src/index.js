import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';

import App from './components/App/App.jsx';
import HomePage from './pages/Home/Home.jsx';


ReactDOM.render((
  <Router history={browserHistory} >
    <Route component={App} >
      <Route path="/" component={HomePage}  />
    </Route>
  </Router>
  ),
  document.getElementById('root')
);

