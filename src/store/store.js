import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// Reducers
import usersReducer from './reducers/usersReducer';
import themeReducer from './reducers/themeReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  users: usersReducer,
  theme: themeReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;