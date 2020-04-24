const initialState = {
  darkMode: true,
  typography: {},
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default themeReducer;