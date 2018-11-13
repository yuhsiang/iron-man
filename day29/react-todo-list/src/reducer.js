import { combineReducers } from "redux";

import {
  KEY,
} from './provider/todo/constants';
import reducer from './provider/todo/reducer';

export default combineReducers({
  [KEY]: reducer,
})
