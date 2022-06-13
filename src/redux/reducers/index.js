import courseReducer from './course';
import userReducer from './user';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  courseState: courseReducer,
  userState: userReducer,
});

export default allReducers;
