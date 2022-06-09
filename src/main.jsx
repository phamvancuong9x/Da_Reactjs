import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store";
import App from "./App";

import ReactDOM from "react-dom";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
