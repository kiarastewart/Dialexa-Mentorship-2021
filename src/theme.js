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
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "8px 16px",
        margin: "16px"
      },
      outlined: {
        borderWidth: "3px"
      },
      "&:hover": {}
    }
  },
  props: {
    MuiButton: {
      disableRipple: true
    }
  }
});

export default theme;
