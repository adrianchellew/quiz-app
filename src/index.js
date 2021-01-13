import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Quiz from './Quiz';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Quiz />
  </React.StrictMode>,
  document.getElementById('root')
);
