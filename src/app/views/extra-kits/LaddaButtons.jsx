import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import LaddaButton, {
  XL,
  EXPAND_LEFT,
  EXPAND_RIGHT,
  EXPAND_UP,
  EXPAND_DOWN,
  CONTRACT,
  SLIDE_LEFT,
  SLIDE_RIGHT,
  SLIDE_UP,
  SLIDE_DOWN,
  ZOOM_IN,
  ZOOM_OUT
} from "react-ladda";

class LaddaButtons extends Component {
  state = {
    expLeft: false,
    expRight: false,
    expUp: false,
    expDown: false,
    expContract: false,
    expOverlay: false,
    expSlideLeft: false,
    expSlideRight: false,
    expSlideUp: false,
    expSlideDown: false,
    expZoomIn: false,
    expZoomOut: false
  };

  spinnerStyle = [
    EXPAND_LEFT,
    EXPAND_RIGHT,
    EXPAND_UP,
    EXPAND_DOWN,
    CONTRACT,
    SLIDE_LEFT,
    SLIDE_RIGHT,
    SLIDE_UP,
    SLIDE_DOWN,
    ZOOM_IN,
    ZOOM_OUT
  ];

  varianList = ["primary", "success", "warning", "info", "danger"];

  toggle(name) {
    this.setState({
      [name]: !this.state[name]
    });
  }

  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Extra Kits", path: "/extra-kits" },
            { name: "Ladda Buttons" }
          ]}
        ></Breadcrumb>
        <SimpleCard title="basic example" className="mb-4">
          {Object.keys(this.state).map((key, i) => (
            <LaddaButton
              key={i}
              className={`btn btn-${
                this.varianList[i % 5]
              } border-0 mr-2 mb-2 position-relative`}
              loading={this.state[key]}
              progress={0.5}
              onClick={() => this.toggle(key)}
              data-style={this.spinnerStyle[i]}
            >
              Submit
            </LaddaButton>
          ))}
        </SimpleCard>

        <SimpleCard title="defferent size" className="mb-4">
          <p>Small Ladda Button</p>
          {Object.keys(this.state).map((key, i) => (
            <LaddaButton
              key={i}
              className={`btn btn-${this.varianList[i % 5]} 
              border-0 mr-2 mb-2 btn-sm position-relative`}
              loading={this.state[key]}
              onClick={() => this.toggle(key)}
              data-style={this.spinnerStyle[i]}
            >
              Submit
            </LaddaButton>
          ))}

          <p>Large Ladda Button</p>
          {Object.keys(this.state).map((key, i) => (
            <LaddaButton
              key={i}
              className={`btn btn-${this.varianList[i % 5]} 
              border-0 mr-2 mb-2 btn-lg position-relative`}
              loading={this.state[key]}
              onClick={() => this.toggle(key)}
              data-style={this.spinnerStyle[i]}
            >
              Submit
            </LaddaButton>
          ))}
        </SimpleCard>
      </div>
    );
  }
}

export default LaddaButtons;
