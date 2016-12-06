import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { thunk } from '../middleware/thunk';

export function configureStore(preloadedState = {}) {
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
}
