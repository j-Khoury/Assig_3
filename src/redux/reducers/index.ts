import { combineReducers } from 'redux';
import taskReducer from './taskReducers';

const rootReducer = combineReducers({
  tasks: taskReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;