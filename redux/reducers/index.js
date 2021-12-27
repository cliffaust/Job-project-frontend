import { combineReducers } from "redux";

import jobSearchReducer from "./jobSearch";
import authenticationReducer from "./auth";

export const reducers = combineReducers({
  jobSearch: jobSearchReducer,
  auth: authenticationReducer,
});
