import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const InformationModal = ({ title, body, show, handleClose, ...props }) => {
  return (
    <Modal show={show} onHide={handleClose} centered {...props}>
      <Modal.Header closeButton>
        <Modal.Title>{title || "Information"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

InformationModal.prototype = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default InformationModal;
