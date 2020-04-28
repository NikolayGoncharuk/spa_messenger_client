import { authApi } from '../../services/api/api';

const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

const initialState = {
  isAuth: false,
  userId: null,
  firstName: null,
  lastName: null,
  avatar: null,
  email: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.isAuth };
    case SET_PROFILE_DATA:
      return {
        ...state,
        userId: action.user._id,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        avatar: null,
        email: action.user.email,
      };
    default:
      return state;
  };
};

// Action Creators

const setIsAuth = (isAuth) => {
  return { type: SET_IS_AUTH, isAuth };
};

const setProfileData = (user) => {
  return { type: SET_PROFILE_DATA, user };
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
};

export const getProfileData = () => (dispatch) => {
  if (localStorage.token) {
    authApi.getProfileData().then(data => {
      if (data.resultCode === 1) {
        dispatch(setIsAuth(true));
        dispatch(setProfileData(data.user));
      } else {
        logout()(dispatch);
      };
    });
  };
};

export default usersReducer;