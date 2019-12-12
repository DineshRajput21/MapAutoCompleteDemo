import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import primeReducer from './primeReducer';
import primeEpic from './primeEpic';

const epicMiddleware = createEpicMiddleware();
export default createStore(primeReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(primeEpic);
