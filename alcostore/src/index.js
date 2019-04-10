import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './style.global';
import App from './components/App/App';
import HomePage from './pages/Home/Home';
import WhiskeyPage from './pages/Whiskey/Whiskey';
import VermutPage from './pages/Vermut/Vermut';
import UserPage from './pages/User/User';

ReactDOM.render(
  <div>
    <GlobalStyle />
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="user" component={UserPage} />
        <Route path="whiskey" component={WhiskeyPage} />
        <Route path="vermut" component={VermutPage} />
      </Route>
    </Router>
  </div>,
  document.getElementById('root')
);
