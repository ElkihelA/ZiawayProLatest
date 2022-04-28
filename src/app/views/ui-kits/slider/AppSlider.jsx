import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import SimpleCard from "@gull/components/cards/SimpleCard";
import BasicSlider from "./BasicSlider";
import RangeSlider from "./RangeSlider";
import StepSlider from "./StepSlider";
import MarkSlider from "./MarkSlider";
import MinMaxSlider from "./MinMaxSlider";
import MultiRangeSlider from "./MultiRangeSlider";
import MultiStyledSlider from "./MultiStyledSlider";
import VerticalSlider from "./VerticalSlider";

class AppSlider extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Sliders" }
          ]}
        ></Breadcrumb>

        <div className="row">
          <div className="col-md-6 mb-4">
            <SimpleCard title="Basic slider">
              <BasicSlider></BasicSlider>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-4">
            <SimpleCard title="range slider">
              <RangeSlider></RangeSlider>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-4">
            <SimpleCard title="step slider">
              <StepSlider></StepSlider>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-4">
            <SimpleCard title="mark slider with fixed values">
              <MarkSlider></MarkSlider>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-4">
            <SimpleCard title="slider with minimum and maximum">
              <MinMaxSlider></MinMaxSlider>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-4">
            <SimpleCard title="Multi Range slider">
              <MultiRangeSlider></MultiRangeSlider>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-4">
            <SimpleCard title="Multi Range slider with style">
              <MultiStyledSlider></MultiStyledSlider>
            </SimpleCard>
          </div>
          <div className="col-md-6 mb-4">
            <SimpleCard title="Vertical Slider">
              <VerticalSlider></VerticalSlider>
            </SimpleCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AppSlider;
