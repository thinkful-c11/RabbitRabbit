import React from 'react';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';
import App from './App';
import './index.css';

ReactDOM.render(
  <CheeseList cheeses={[
    'Bath Blue',
    'Barkham Blue',
    'Buxton Blue'
  ]} />,
  document.getElementById('root')
);
