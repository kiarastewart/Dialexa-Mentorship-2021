import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const Buttons = ({ variant, color, children, size }) => {
  return (
    <Button variant={variant} color={color} size={size}>
      {children}
    </Button>
  );
};

Buttons.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string
};

export default Buttons;
