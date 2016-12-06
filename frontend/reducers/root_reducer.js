import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  forms: ErrorsReducer
});

export default rootReducer;
