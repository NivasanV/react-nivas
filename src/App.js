import React from 'react';
import './style.css';

var element = <h2 className="firstAttribute">google</h2>;

var mystyle = {
  fontSize: 50,  
  fontFamily: 'Courier',  
  color: '#003300'
};

var ref="https://www.javatpoint.com/react-components";

function App() {
  return (
    <div>
      <h1 style={mystyle}><a href={ref}>{element}{2+2}</a></h1>
    </div>
  );
}
export default App;
