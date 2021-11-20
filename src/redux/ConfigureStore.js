import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import continentReducer, { getContinent } from './continent/continentReducer';

const reducer = combineReducers({
  continentReducer,
});
const store = createStore(
  reducer,

  applyMiddleware(thunk, logger),
);
store.dispatch(getContinent());

export default store;
