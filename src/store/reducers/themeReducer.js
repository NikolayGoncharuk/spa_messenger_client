const SET_DARK_MODE = 'theme/SET_DARK_MODE';

const initialState = {
  darkMode: true,
  typography: {},
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state, darkMode: !state.darkMode,
      };
    default:
      return state;
  };
};

// Action Reducer

export const setDarkMode = () => {
  return { type: SET_DARK_MODE };
};

export default themeReducer;