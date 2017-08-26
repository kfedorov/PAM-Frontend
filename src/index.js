/* Utils */
import React from "react";
import ReactDOM from "react-dom";

/* Components */
import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "react-tabs/style/react-tabs.css";

/* Style */
import "./index.css";
import "react-select/dist/react-select.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import pamApp from "./redux/reducers";

let store = createStore(pamApp);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
