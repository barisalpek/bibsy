import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './components/List';



ReactDOM.render(
  <React.StrictMode>
    <List mainColor='lila' listColor='ljusLila' />
  </React.StrictMode>,
  document.getElementById('root')
);