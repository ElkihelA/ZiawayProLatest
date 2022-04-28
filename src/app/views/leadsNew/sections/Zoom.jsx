import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Modal, Button } from "react-bootstrap";
import { Room } from "./Room";
// import { ZoomMtg } from "@zoomus/websdk";

const Zoom = ({
  show,
  handleClose,
  setShow,
  token,
  setToken,
  key,
  participant,
}) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const handleLogout = useCallback((event) => {
    setToken(null);
  }, []);

  const remoteParticipants = participants.map((participant) => (
    <p key={participant.sid}>{participant.identity}</p>
  ));

  return (
    <Fragment>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Token: {token}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {token && (
            <Room
              roomName="myRoom"
              token={token}
              handleLogout={handleLogout}
              key={key}
              participant={participant}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Zoom;
