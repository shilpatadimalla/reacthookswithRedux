import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import combinedActions from "./actions/combinedActions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const currentUser = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const user = { name: "John" };

  useEffect(() => {
    dispatch(combinedActions.userActions.logIn(user), []);
  }, []);

  return (
    <div className="App">
      {currentUser.loggedIn ? (
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button
            onClick={() => dispatch(combinedActions.userActions.logOut())}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button
            onClick={() => dispatch(combinedActions.userActions.logIn(user))}
          >
            Login
          </button>
        </>
      )}

      <h1>Count: {counter}</h1>
      <button
        onClick={() => dispatch(combinedActions.counterActions.increment())}
      >
        Increase count
      </button>
      <button
        onClick={() => dispatch(combinedActions.counterActions.decrement())}
      >
        Decrease count
      </button>
    </div>
  );
}

export default App;
