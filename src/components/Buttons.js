import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core/Button";

const Buttons = ({ color, children }) => {
  return (
    <Button variant="contained" color={color} disableElevation>
      {children}
    </Button>
  );
};

Buttons.propTypes = {
  color: PropTypes.string
};

export default Buttons;
