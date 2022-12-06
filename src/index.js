import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import App2 from './App2';
import Props from './components/Props';

ReactDOM.render(
  <>
    {
      <App2 /> /*
    <App />
    <Props color="Red" msg='my favarite' /> */
    }
  </>,

  document.getElementById('root')
);
