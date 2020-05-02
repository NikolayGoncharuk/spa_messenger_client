import { chatApi } from '../../services/api/api';
import { getUsers } from './usersReducer';

const SET_DIALOGS = 'chat/SET_DIALOGS';

const initialState = {
  dialogs: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DIALOGS:
      return { ...state, dialogs: action.dialogs };
    default:
      return state;
  };
};

// Action creators

const setDialogs = (dialogs) => {
  return { type: SET_DIALOGS, dialogs };
};

// Thunk creators

export const getDialogs = () => async (dispatch) => {
  const data = await chatApi.getDialogs();
  if (data.resultCode === 1) {
    dispatch(setDialogs(data.dialogs));
  };
};

export const initialMessenger = (setLoading) => async (dispatch) => {
  if (localStorage.token) {
    await getDialogs()(dispatch);
    await getUsers()(dispatch);
  };
  setLoading();
};