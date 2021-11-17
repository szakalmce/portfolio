import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./Assets/GlobalStyles";
import Root from "./Views/Root";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
