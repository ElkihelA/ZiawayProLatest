import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import BasicModal from "./BasicModal";
import SimpleCard from "@gull/components/cards/SimpleCard";
import ScrollableModal from "./ScrollableModal";

class AppModal extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "UI Kits", path: "/uikits" },
            { name: "Modals" }
          ]}
        ></Breadcrumb>

        <div className="row mb-4">
          <div className="col-md-6">
            <SimpleCard title="basic modal" className="mb-4">
              <BasicModal></BasicModal>
            </SimpleCard>
          </div>
          <div className="col-md-6">
            <SimpleCard title="Vertically centered modal" className="mb-4">
              <BasicModal
                centered={true}
                name="Launch centered modal"
              ></BasicModal>
            </SimpleCard>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <SimpleCard title="Optional sizes" className="mb-4">
              <div className="d-flex flex-wrap flex-row">
                <div className="mr-2">
                  <BasicModal size="sm" name="Launch small modal"></BasicModal>
                </div>
                <div className="mr-2">
                  <BasicModal size="lg" name="Launch large modal"></BasicModal>
                </div>
                <div className="mr-2">
                  <BasicModal
                    size="xl"
                    name="Launch extra large modal"
                  ></BasicModal>
                </div>
              </div>
            </SimpleCard>
          </div>
          <div className="col-md-6">
            <SimpleCard title="scrollable modal" className="mb-4">
              <ScrollableModal></ScrollableModal>
            </SimpleCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AppModal;
