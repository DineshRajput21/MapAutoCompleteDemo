import {combineReducers} from 'redux';
import mapScreenReducer from '../src/screens/MapScreen/reducer';

const primeReducer = combineReducers({
  mapScreenReducer,
});

export default (state, action) => primeReducer(state, action);
