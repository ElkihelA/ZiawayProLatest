import React, { Fragment } from "react";
import { Alert, Button } from "react-bootstrap";

const DangerAlert = () => {
  const [showAlert, setShowAlert] = React.useState(true);

  return (
    <Fragment>
      {showAlert && (
        <Alert variant="danger" dismissible onClose={() => setShowAlert(false)}>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      )}
      {!showAlert && (
        <Button variant="success" onClick={() => setShowAlert(true)}>
          Show Alert
        </Button>
      )}
    </Fragment>
  );
};

export default DangerAlert;
