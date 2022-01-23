import React from 'react';
import './style.css';

const element =
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>

function tick() {
  return(
    <div>{element}</div>
  );
}



export default tick;