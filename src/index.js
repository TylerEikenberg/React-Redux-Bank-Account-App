import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/**
 * Import createStore from redux
 * import combineReducers from redux
 * import the reducer we made from from the store dir
 * import Provider from react-redux
 */

/**
 * import applyMiddleware
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import balanceReducer from "./store/balanceReducer";
import loanReducer from "./store/loanReducer";
import { Provider } from "react-redux";

// import thunk
import thunk from "redux-thunk";

// Start by creating the store using createStore and passing our reducer to it
// This store manages the entire apps state

// combine reducers by passing them in the store using combineReducers and putting them together into one object

// pass applyMiddleware as second arg to store, pass thunk to applyMiddleware
const store = createStore(
  combineReducers({
    balanceReducer,
    loanReducer
  }),
  applyMiddleware(thunk)
);

// Next, wrap <App> with <Provider> and pass our store as a prop
// Now our store is globally available
// goto homepage
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/**
 *
 *
 *
 *
 *
 *
 *
 */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
