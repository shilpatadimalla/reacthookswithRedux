const counterReducer = (initialState = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return initialState + 1;
    case "DECREMENT":
      return initialState - 1;
    default:
      return initialState;
  }
};

export default counterReducer;
