import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import App2 from './App2';
import Test from './Test.tsx';
import Test2 from './Test2.tsx';
import CreditCardField from './Test.tsx';
import Tester from './Test.tsx';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import Tester2 from './Test';
import Tester3 from './Test';
import Tester4 from './Test';
import Routes from './routes';


ReactDOM.render(
  
  <Routes /> /*va render l'index.tsx dans le dossier /routes*/
  //< Tester4 />
  ,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
