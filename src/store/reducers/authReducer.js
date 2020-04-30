import { authApi } from '../../services/api/api';

const SET_IS_AUTH = 'auth/SET_IS_AUTH';
const SET_USER = 'auth/SET_USER';

const initialState = {
  isAuth: false,
  user: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.isAuth };
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  };
};

// Action creators

const setIsAuth = (isAuth) => {
  return { type: SET_IS_AUTH, isAuth };
};
const setUser = (user) => {
  return { type: SET_USER, user };
};

// Thunk creators

export const register = (formData) => async (dispatch) => {
  const data = await authApi.postRegisterData(formData);
  if (data.resultCode === 1) {
    login(data.user)(dispatch);
  };
};

export const login = (formData) => async (dispatch) => {
  const data = await authApi.postLoginData(formData);
  if (data.resultCode === 1) {
    localStorage.setItem('token', data.token);
    dispatch(setIsAuth(true));
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setIsAuth(false));
  dispatch(setUser(null));
};

export const getUserData = (setLoading) => async (dispatch) => {
  if (localStorage.token) {
    const data = await authApi.getUserData();
    if (data.resultCode === 1) {
      dispatch(setIsAuth(true));
      dispatch(setUser(data.user));
    } else {
      logout()(dispatch);
    };
  };
  setLoading();
};