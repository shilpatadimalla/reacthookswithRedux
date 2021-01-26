import { combineReducers } from "redux";

import userReducer from "./userReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counterReducer,
  userReducer
});

export default rootReducer;
