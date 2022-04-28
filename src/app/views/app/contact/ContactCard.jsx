import React, { Component } from "react";
import { Breadcrumb } from "@gull";

class ContactCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
            { name: "Contact Card" }
          ]}
        ></Breadcrumb>
      </div>
    );
  }
}

export default ContactCard;
