import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ReturnButton = ({ previousStep, isActive }) => {
  return (
    <div className="mt-4">
      <Button
        variant="link"
        type="button"
        disabled={!isActive}
        onClick={() => {
          previousStep();
        }}
      >
        Retour
      </Button>
    </div>
  );
};

ReturnButton.propTypes = {
  previousStep: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ReturnButton;
