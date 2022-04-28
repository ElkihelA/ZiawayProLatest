import React, { Component, Fragment } from "react";
import { Alert, Button } from "react-bootstrap";

class SimpleAlert extends Component {
  state = {
    variantList: [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark"
    ],
    showCustomAlert: true
  };

  handleClose = index => {
    let variantList = this.state.variantList.filter((item, i) => i !== index);
    this.setState({ variantList });
  };

  closeCustomAlert = () => {
    this.setState({ showCustomAlert: false });
  };

  render() {
    let { variantList, showCustomAlert } = this.state;

    return (
      <Fragment>
        {showCustomAlert && (
          <Alert
            className="text-center alert-card"
            variant="warning"
            dismissible
            onClose={this.closeCustomAlert}
          >
            Gull makes developent life easier!
            <Button variant="warning" className="btn-rounded ml-3">
              Buy Now
            </Button>
          </Alert>
        )}
        {variantList.map((variant, idx) => (
          <Alert
            key={idx}
            variant={variant}
            dismissible
            onClose={() => this.handleClose(idx)}
          >
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </Fragment>
    );
  }
}

export default SimpleAlert;
