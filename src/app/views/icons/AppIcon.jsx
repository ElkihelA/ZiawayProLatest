import React, { Component } from "react";
import { Breadcrumb, SimpleCard, CodeViewer } from "@gull";
import { iconList } from "./iconsMind";

class AppIcon extends Component {
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[{ name: "Home", path: "/" }, { name: "Icons" }]}
        ></Breadcrumb>
        <SimpleCard title="Usage" className="mb-4">
          <code>&lt;i className="i-Add-Cart">&lt;/i></code>
        </SimpleCard>

        <SimpleCard>
          <div className="row">
            {iconList.map(i => (
              <div key={i} className="col-sm-2 text-center mb-3">
                <i className={`text-20 i-${i}`}></i>
                <p>i-{i}</p>
              </div>
            ))}
          </div>
        </SimpleCard>
      </div>
    );
  }
}

export default AppIcon;
