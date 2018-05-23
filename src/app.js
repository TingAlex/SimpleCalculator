import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Calculator from "./components/Calculator";

const store = configureStore();
store.subscribe(() => {
  const state = store.getState()
  console.log("state is"+state);
});
const jsx = (
  <Provider store={store}>
    <Calculator />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
