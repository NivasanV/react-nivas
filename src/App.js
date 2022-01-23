import React from 'react';
import './style.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
const user = {
  firstName: 'nivasan',
  lastName: 'Perez',
};

const element = <h1 className="greeting">Hello, world!</h1>;

const element1 = (
  <a href="https://www.reactjs.org" target="blank">
    {' '}
    link{' '}
  </a>
);
const element2 = React.createElement('h1', { className: 'hello' }, 'Nivasan');

function App() {
  return (
    <div>
      {element}
      {element1}
      {element2}
      <p>
        <img src="" alt="nivasan" />
      </p>
    </div>
  );
}
export default App;
