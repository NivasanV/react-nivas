import React from 'react';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title} 
    </li>
  );

  return (
    <ol>{listItems}</ol>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function manageClick(){
    setCount(count - 1);
  }

  return (
    <>
      <button class='btn btn-danger'>{count} times</button>
      <br/>
      <button onClick={handleClick} class='btn btn-success'>
        +
      </button>
      <button onClick={manageClick} class='btn btn-success'>
        -
      </button>
    </>
  );
}


export default function App2(){
  return(
    <div>
      <ShoppingList/>
      <MyButton/>
    </div>
  );
}