import React, { useState, Fragment } from "react";
import { Modal, Button, useCallback } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AcceptCallModal = ({ show, setShow, data }) => {
  const history = useHistory();

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>InComing Call </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Incoming Call from Aziz</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => history.push("/incomingVideo")}
          >
            Accept
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Reject
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default AcceptCallModal;
