import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import store from './store';
import reportWebVitals from './reportWebVitals';

import Dashboard from './views/Dashboard';
import Login from './views/Login';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard' component={ Dashboard } />
          <Route path='/login' exact component={ Login } />
          <Redirect from='*' to='/login' />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
