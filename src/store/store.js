import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// Reducers
import authReducer from './reducers/authReducer';
import usersReducer from './reducers/usersReducer';
import chatReducer from './reducers/chatReducer';
import themeReducer from './reducers/themeReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  auth: authReducer,
  users: usersReducer,
  chat: chatReducer,
  theme: themeReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;