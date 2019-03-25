import React  from 'react';
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';

import App from './components/App/App.jsx';
import HomePage from './pages/Home/Home.jsx';
import GlintwainPage from './pages/Glintwain/Glintwain.jsx';

ReactDOM.render((
  <Router history={browserHistory} >
    <Route component={App} >
      <Route path="/" component={HomePage}  />
      <Route path="glintwain" component={GlintwainPage}  />
    </Route>
  </Router>
  ),
  document.getElementById('root')
);
