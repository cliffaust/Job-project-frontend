import jobSearchReducer from "./jobSearch";
import authenticationReducer from "./auth";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  jobSearch: jobSearchReducer,
  auth: authenticationReducer,
});
