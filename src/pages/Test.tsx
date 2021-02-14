
import React, {Component, useState, Fragment, createRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import { renderIntoDocument } from 'react-dom/test-utils';
import { render } from '@testing-library/react';


const Api = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


type TestProps = {
    name:string,
    age:number, 
    admin:boolean
}

const Test = ({name, age, admin}: TestProps)=>(
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{typeof(admin)}</p>
    </div>
) //<--

const Tester : React.FC<TestProps> = ({name, age, admin}) => 
    <h1>Test me!</h1>
 //

const Tester2 = ({nom, prenom}) => <h1>hello, {nom} {prenom}</h1>
 
const Tester3 = (props) => (
  
    <div>
      <h1>Bonjour, monde !</h1>
      <h2>Il est {props.name}.</h2>
    </div>
  )

//functional component avec useState
// function Tester4() {
//   const [date, setDate] = useState(new Date());
//   const test = <h2>Il est {date.toLocaleTimeString()}.</h2>;
//   return(
//     <div>
//         <h1>Bonjour, monde !</h1>
//         {test}
//         <button onClick={()=>setDate(new Date())}>Click to update time</button>
//     </div>
//   ) 
// }

const lol = "test"



export default Test;