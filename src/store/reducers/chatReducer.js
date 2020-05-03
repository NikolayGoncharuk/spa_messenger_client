import { chatApi } from '../../services/api/api';
import { getUsers } from './usersReducer';

const SET_DIALOGS = 'chat/SET_DIALOGS';
const SET_MESSAGES = 'chat/SET_MESSAGES';

const initialState = {
  dialogs: [],
  messages: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DIALOGS:
      return { ...state, dialogs: action.dialogs };
    case SET_MESSAGES:
      return { ...state, messages: action.messages };
    default:
      return state;
  };
};

// Action creators

const setDialogs = (dialogs) => {
  return { type: SET_DIALOGS, dialogs };
};

const setMessages = (messages) => {
  return { type: SET_MESSAGES, messages };
};

// Thunk creators

export const getDialogs = () => async (dispatch) => {
  const data = await chatApi.getDialogs();
  if (data.resultCode === 1) {
    data.dialogs.forEach((item) => {
      let date = new Date(+item.date);
      item.date = date.toLocaleString("ru", {
        month: 'short',
        day: 'numeric',
      });
    });
    dispatch(setDialogs(data.dialogs));
  };
};

export const postMessage = ({ to, body }) => async (dispatch) => {
  const data = await chatApi.postMessage({ to, body });
};

export const getMessages = (id) => async (dispatch) => {
  const data = await chatApi.getMessages(id);
  if (data.resultCode === 1) {
    data.messages.forEach((item) => {
      let date = new Date(+item.date);
      item.date = date.toLocaleString("ru", {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    });
    dispatch(setMessages(data.messages));
  };
};

export const initializeMessenger = (setLoading) => async (dispatch) => {
  if (localStorage.token) {
    await getDialogs()(dispatch);
    await getUsers()(dispatch);
  };
  setLoading();
};