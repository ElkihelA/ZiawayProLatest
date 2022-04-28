import React, { Fragment } from "react";
import { Alert, Button } from "react-bootstrap";

const DangerAlert = (props) => {
  const [showAlert, setShowAlert] = React.useState(true);

  return (
    <Fragment>
      {showAlert && props.show && (
        <Alert variant="danger" dismissible onClose={() => setShowAlert(false)} style={{maxWidth:500}}>
         
          <p>
            {props.error}
            
          
          </p>
        </Alert>
      )}
  
    </Fragment>
  );
};

export default DangerAlert;
