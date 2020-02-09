import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { fetchedCommentsReducer, choosedCommentsReducer } from './comments/reducers';

const rootReducer = combineReducers({
  fetchedComments: fetchedCommentsReducer,
  choosedComments: choosedCommentsReducer
});

export default createStore(rootReducer);
