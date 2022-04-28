import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";

class AppLoader extends Component {
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Home", path: "/" },
            { name: "Extra Kits", path: "/extra-kits" },
            { name: "Loader" }
          ]}
        ></Breadcrumb>
        <SimpleCard title="Ripple Spinners" className="mb-4">
          <div className="p-3">
            <span className="spinner-glow spinner-glow-primary mr-5"></span>
            <span className="spinner-glow spinner-glow-secondary mr-5"></span>
            <span className="spinner-glow spinner-glow-warning mr-5"></span>
            <span className="spinner-glow spinner-glow-danger mr-5"></span>
            <span className="spinner-glow spinner-glow-success mr-5"></span>
            <span className="spinner-glow spinner-glow-info mr-5"></span>
            <span className="spinner-glow spinner-glow-light mr-5"></span>
            <span className="spinner-glow spinner-glow-dark mr-5"></span>
          </div>
        </SimpleCard>

        <SimpleCard title="Loading Spinners" className="mb-4">
          <div className="p-3">
            <div className="spinner spinner-primary mr-3"></div>
            <div className="spinner spinner-secondary mr-3"></div>
            <div className="spinner spinner-warning mr-3"></div>
            <div className="spinner spinner-danger mr-3"></div>
            <div className="spinner spinner-success mr-3"></div>
            <div className="spinner spinner-info mr-3"></div>
            <div className="spinner spinner-light mr-3"></div>
            <div className="spinner spinner-dark mr-3"></div>
          </div>
        </SimpleCard>

        <SimpleCard title="Bubble Spinners" className="mb-4">
          <div className="spinner-bubble spinner-bubble-primary m-5"></div>
          <div className="spinner-bubble spinner-bubble-secondary m-5"></div>
          <div className="spinner-bubble spinner-bubble-warning m-5"></div>
          <div className="spinner-bubble spinner-bubble-danger m-5"></div>
          <div className="spinner-bubble spinner-bubble-success m-5"></div>
          <div className="spinner-bubble spinner-bubble-info m-5"></div>
          <div className="spinner-bubble spinner-bubble-light m-5"></div>
          <div className="spinner-bubble spinner-bubble-dark m-5"></div>
        </SimpleCard>

        <SimpleCard title="Bubble Spinners" className="mb-4">
          <div className="loader-bubble loader-bubble-primary m-5"></div>
          <div className="loader-bubble loader-bubble-secondary m-5"></div>
          <div className="loader-bubble loader-bubble-success m-5"></div>
          <div className="loader-bubble loader-bubble-warning m-5"></div>
          <div className="loader-bubble loader-bubble-danger m-5"></div>
          <div className="loader-bubble loader-bubble-info m-5"></div>
          <div className="loader-bubble loader-bubble-light m-5"></div>
          <div className="loader-bubble loader-bubble-dark m-5"></div>
        </SimpleCard>
      </div>
    );
  }
}

export default AppLoader;
