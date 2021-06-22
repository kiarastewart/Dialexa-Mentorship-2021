import React from "react";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "./theme";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Buttons variant="contained" color="primary" size="large">
        Dialexa Mentorship 2021
      </Buttons>

      <Buttons variant="text" color="primary">
        Dialexa Mentorship 2021
      </Buttons>

      <Buttons variant="outlined" color="primary" size="small">
        Dialexa Mentorship 2021
      </Buttons>
    </ThemeProvider>
  );
}
