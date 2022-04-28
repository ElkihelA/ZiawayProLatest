import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Button } from "react-bootstrap";
import Tour from "reactour";

class AppTour extends Component {
  state = {
    isTourOpen: false,
    steps: [
      {
        selector: "#customizer",
        content: "Click here to change layout, color etc"
      },
      {
        selector: "#buy-gull",
        content: "Click here to buy Gull React"
      }
    ]
  };

  toggleTour = () => {
    this.setState({ isTourOpen: !this.state.isTourOpen });
  };

  render() {
    let { steps, isTourOpen } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Extra Kits", path: "/extra-kits" },
            { name: "User Tour" }
          ]}
        ></Breadcrumb>
        <Button onClick={this.toggleTour}>Start Tour</Button>
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={this.toggleTour}
          rounded={8}
          className="react-tour"
          accentColor="#7f4fb3"
          // prevButton={<Button size="sm">prev</Button>}
          // nextButton={<Button size="sm">next</Button>}
        />
      </div>
    );
  }
}

export default AppTour;
