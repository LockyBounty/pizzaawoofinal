import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { CookiesProvider } from 'react-cookie';

import reportWebVitals from './reportWebVitals';

import Routes from './routes';


ReactDOM.render(
  <CookiesProvider>
  <Routes /> 
  </CookiesProvider>
  /*va render l'index.tsx dans le dossier /routes*/
  //< Tester4 />
  ,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
