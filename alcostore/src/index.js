import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './style.global';
import App from './components/App/App';
import HomePage from './pages/Home/Home';
import GlintwainPage from './pages/Glintwain/Glintwain';
import VermutPage from './pages/Vermut/Vermut';

ReactDOM.render(
  <div>
    <GlobalStyle />
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="glintwain" component={GlintwainPage} />
        <Route path="vermut" component={VermutPage} />
      </Route>
    </Router>
  </div>,
  document.getElementById('root')
);
