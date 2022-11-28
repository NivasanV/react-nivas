import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

function MyButton() {
  return (
    <button variant="success">I'm a button</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
const details = {
  name:"Nivasan",
  color:'red',
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <p>{details.name} is {details.color} in color</p>
    </>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <div className="avatar">dounload</div>
      <AboutPage/>
      <MyButton />
      <Profile/>
    </div>
  );
}
