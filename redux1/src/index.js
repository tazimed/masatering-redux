import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App2 from "./store/App2";

ReactDOM.render(
  <Provider store={store}>
    <App2 />
  </Provider>,
  document.getElementById("root")
);
