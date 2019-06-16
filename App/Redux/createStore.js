import { createStore, applyMiddleware } from "redux";
import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

export default function configureStore() {
  return createStore(
    combineReducers({ todoReducer }),
    applyMiddleware(thunk, logger)
  );
}
