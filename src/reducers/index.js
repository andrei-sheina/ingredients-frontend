import { combineReducers } from 'redux';
import auth from './auth';
import search from './search';
import recepies from './recepies';

const ingridientsApp = combineReducers({
  auth,
  search,
  recepies
})

export default ingridientsApp;
