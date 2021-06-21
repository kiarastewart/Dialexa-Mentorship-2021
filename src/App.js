import React from "react";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "./theme";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Buttons color="primary">Primary</Buttons>
    </ThemeProvider>
  );
}
