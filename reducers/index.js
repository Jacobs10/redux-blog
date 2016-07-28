import { combineReducers } from 'redux'
import PostsReducer from './reducer_posts.js'

const rootReducer = combineReducers({
  posts: PostReducer
})

export default rootReducer














import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer,
});

export default rootReducer;
