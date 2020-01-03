import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/**
 * Import createStore from redux
 * import the reducer we made from from the store dir
 * import Provider from react-redux
 */
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";

// Start by creating the store using createStore and passing our reducer to it
// This store manages the entire apps state
const store = createStore(reducer);

// Next, wrap <App> with <Provider> and pass our store as a prop
// Now our store is globally available
// goto homepage
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
