import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const PleaseButton = withStyles({
  root: {
    color: "white",
    textTransform: "none",
    fontSize: 16,
    padding: "8px 24px",
    lineHeight: 1.5,
    backgroundColor: "#3498db",
    borderRadius: "36px",
    fontFamily: ["Poppins"].join(","),
    "&:hover": {
      backgroundColor: "#2980b9",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#2980b9"
    }
  }
})(Button);

const TestButton = withStyles({
  root: {
    color: "#2ecc71",
    fontSize: 16,
    borderWidth: "2px",
    borderColor: "#2ecc71",
    borderRadius: "36px",
    textTransform: "none",
    fontFamily: ["Poppins"].join(","),
    "&:hover": {
      backgroundColor: "#2ecc71",
      color: "white"
    }
  }
})(Button);

const DisabledButton = withStyles({
  fontSize: 16,
  fontFamily: "Poppins"
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <PleaseButton variant="contained" className={classes.margin}>
        Please Work
      </PleaseButton>

      <TestButton variant="outlined" size="small" className={classes.margin}>
        Test
      </TestButton>

      <DisabledButton
        variant="contained"
        disabled
        size="large"
        className={classes.margin}
      >
        Disabled
      </DisabledButton>

      <Button size="small">Default</Button>
      <Button size="medium" color="primary">
        Primary
      </Button>
      <Button size="large" color="secondary">
        Secondary
      </Button>
    </div>
  );
}
