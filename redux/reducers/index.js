import jobSearchReducer from "./jobSearch";
import signupReducer from "./signup";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  jobSearch: jobSearchReducer,
  signup: signupReducer,
});
