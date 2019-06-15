import { createStore, applyMiddleware } from "redux";
import noteReducer from "./noteReducer";
import { combineReducers } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

export default function configureStore() {
  return createStore(
    combineReducers({ noteReducer }),
    applyMiddleware(thunk, logger)
  );
}
