import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#304FFE", //default
      dark: "#0026CA", //for dark mode
      light: "7A7CFF" //for light mode
    }
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  shape: {
    borderRadius: 36
  }
});

export default theme;
