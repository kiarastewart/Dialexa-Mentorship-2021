import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme"; //trying to import theme into index

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
