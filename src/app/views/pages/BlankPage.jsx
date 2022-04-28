import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import {
  Accordion,
  Card,
  AccordionToggle,
  AccordionCollapse
} from "react-bootstrap";
import { classList } from "@utils";

class BlankPage extends Component {
  state = {
    openItem: "",
    questionList: [
      "Where can I buy Gull React from?",
      "Do I have right to use it in another template?",
      "What are the benefits that will be provided?",
      "How long shall I get support?"
    ]
  };

  setOpenItem = name => {
    if (name === this.state.openItem) {
      this.setState({ openItem: "" });
    } else this.setState({ openItem: name });
  };

  render() {
    let { openItem, questionList } = this.state;

    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Pages", path: "/pages" },
            { name: "Blank Page" }
          ]}
        ></Breadcrumb>
      </div>
    );
  }
}

export default BlankPage;
