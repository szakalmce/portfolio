import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./Assets/GlobalStyles";
import Root from "./Views/Root";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
