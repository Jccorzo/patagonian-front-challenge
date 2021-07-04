import { combineReducers } from 'redux';
import postReducer from './post';
import commentReducer from './comment';

export default combineReducers({
    posts: postReducer,
    comments: commentReducer,
});