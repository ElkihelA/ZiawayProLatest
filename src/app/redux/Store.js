import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers/RootReducer";
import { getFirebase } from "react-redux-firebase";
import logger from "redux-logger";

const initialState = {};

const middlewares = [thunk.withExtraArgument(getFirebase)];
let devtools = (x) => x;

if (
  process.env.NODE_ENV !== "production" &&
  process.browser &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
  middlewares.push(logger)
}

export const Store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middlewares), devtools)
);
