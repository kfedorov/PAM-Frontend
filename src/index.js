/* Utils */
import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "react-router";

/* Components */
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

/* Style */
import "./index.css";
import "react-select/dist/react-select.css";

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById("root")
);
