import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import CheeseList from './components/cheese-list';
import store from './store';
import './index.css';
ReactDOM.render(
  <Provider store={store}>
    <CheeseList cheeses={[
    'Bath Blue',
    'Barkham Blue',
    'Buxton Blue'
    ]} />,
  </Provider>,
  document.getElementById('root')
);