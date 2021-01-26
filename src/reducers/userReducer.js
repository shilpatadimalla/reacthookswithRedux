const userReducer = (initialState = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...initialState,
        user: action.payload,
        loggedIn: true
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: {},
        loggedIn: false
      };
    default:
      return initialState;
  }
};

export default userReducer;
