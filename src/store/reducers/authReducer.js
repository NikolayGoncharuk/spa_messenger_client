import { authApi } from '../../services/api/api';

const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_USER = 'SET_USER';

const initialState = {
  isAuth: false,
  isFetching: false,
  user: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.isAuth };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  };
};

// Action Creators

const setIsAuth = (isAuth) => {
  return { type: SET_IS_AUTH, isAuth };
};
const setIsFetching = (isFetching) => {
  return { type: SET_IS_FETCHING, isFetching };
};
const setUser = (user) => {
  return { type: SET_USER, user };
};

// Thunk Creators

export const register = (data) => (dispatch) => {
  authApi.postRegisterData(data).then(data => {
    if (data.resultCode === 1) {
      login(data.user)(dispatch);
    };
  });
};

export const login = (data) => (dispatch) => {
  authApi.postLoginData(data).then(data => {
    if (data.resultCode === 1) {
      localStorage.setItem('token', data.token);
      dispatch(setIsAuth(true));
    };
  });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setIsAuth(false));
  dispatch(setUser(null));
};

export const getUserData = () => (dispatch) => {
  if (localStorage.token) {
    dispatch(setIsFetching(true));
    authApi.getUserData().then(data => {
      dispatch(setIsFetching(false));
      if (data.resultCode === 1) {
        dispatch(setIsAuth(true));
        dispatch(setUser(data.user));
      } else {
        logout()(dispatch);
      };
    });
  };
};

export default usersReducer;