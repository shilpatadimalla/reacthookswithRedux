const logIn = userObj => {
  return {
    type: "LOGIN",
    payload: userObj
  };
};

const logOut = () => {
  return {
    type: "LOGOUT"
  };
};

export default {
  logIn,
  logOut
};
