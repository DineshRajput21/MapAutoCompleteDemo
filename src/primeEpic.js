import {combineEpics} from 'redux-observable';
import {mapScreenEpic} from './screens/MapScreen/epic';

export default combineEpics(mapScreenEpic);
