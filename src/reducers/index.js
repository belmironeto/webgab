import { combineReducers } from 'redux';
import sistemasReducer from './sitemasReducer';

const rootReducer = combineReducers({
  sistemas: sistemasReducer,
});

export default rootReducer;
