import React from "react";
import PropTypes from "prop-types";
import { Button, withStyles } from "@material-ui/core/Button";

const styles = () => ({
  default: {
    borderRadius: 0,
    textTransform: "none",
    fontSize: 16,
    fontFamily: "Poppins"
  },

  primary: {
    "&:hover": {}
  }
});

const MentorButton = ({ color, children }) => {
  return (
    <Button variant="contained" color={color} disableElevation>
      {children}
    </Button>
  );
};

MentorButton.propTypes = {
  color: PropTypes.string
};

export default withStyles(styles)(MentorButton);
