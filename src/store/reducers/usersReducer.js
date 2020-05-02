import { usersApi } from '../../services/api/api';

const SET_USERS = 'users/SET_USERS';

const initialState = {
  users: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state, users: action.users,
      };
    default:
      return state;
  };
};

// Action creators

const setUsers = (users) => {
  return { type: SET_USERS, users };
};

// Thunk creators

export const getUsers = () => async (dispatch) => {
  const data = await usersApi.getUsers();
  if (data.resultCode === 1) {
    dispatch(setUsers(data.users));
  };
};