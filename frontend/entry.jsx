import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hey Lacks</h1>, root);
});
