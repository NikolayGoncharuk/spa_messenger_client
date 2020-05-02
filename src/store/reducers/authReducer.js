import { authApi, profileApi } from '../../services/api/api';

const SET_IS_AUTH = 'auth/SET_IS_AUTH';
const SET_PROFILE = 'auth/SET_PROFILE';

const initialState = {
  isAuth: false,
  profile: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.isAuth };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  };
};

// Action creators

const setIsAuth = (isAuth) => {
  return { type: SET_IS_AUTH, isAuth };
};
const setProfile = (profile) => {
  return { type: SET_PROFILE, profile };
};

// Thunk creators

export const register = (formData) => async (dispatch) => {
  const data = await authApi.postRegister(formData);
  if (data.resultCode === 1) {
    login(data.user)(dispatch);
  };
};

export const login = (formData) => async (dispatch) => {
  const data = await authApi.postLogin(formData);
  if (data.resultCode === 1) {
    localStorage.setItem('token', data.token);
    dispatch(setIsAuth(true));
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setIsAuth(false));
  dispatch(setProfile(null));
};

export const getProfile = (setLoading) => async (dispatch) => {
  if (localStorage.token) {
    const data = await profileApi.getProfile();
    if (data.resultCode === 1) {
      dispatch(setIsAuth(true));
      dispatch(setProfile(data.profile));
    } else {
      logout()(dispatch);
    };
  };
  setLoading();
};