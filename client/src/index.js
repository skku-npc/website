import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Club_learning from './Club_learning';
import Menu from './components/Menu';
import Control from './components/Control';

ReactDOM.render(
  <React.StrictMode>
    <Club_learning />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
