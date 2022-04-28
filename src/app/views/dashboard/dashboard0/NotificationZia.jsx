import React, { useState } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";

const NotificationZia = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="light">
        <Alert.Heading>Recommandation ou Notification Zia</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr className="my-3" />
        <div className="d-flex justify-content-start">
          <Button
            className="btn-rounded m-1"
            onClick={() => setShow(false)}
            variant="primary"
          >
            ok
          </Button>
          <Button
            className="btn-rounded m-1"
            onClick={() => setShow(false)}
            variant="warning"
          >
            Annuler
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default NotificationZia;
