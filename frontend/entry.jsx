import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';
import { login } from './actions/sessions_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preLoadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preLoadedState);
  } else {
    store = configureStore();
  }

  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
