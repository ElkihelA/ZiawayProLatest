import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import GaugeChart from "react-gauge-chart";

import {
  options1,
  options2,
  options3,
  options4,
  options5,
  options6,
} from "./apexRadialBarChartOptions";

import {
  barOptions1,
  barOptions2,
  barOptions3,
  barOptions4,
  barOptions5,
  barOptions6,
} from "./apexBarChartOptions";

import ApexBarChart from "./ApexBarChart";

class DynamismeImmoChart extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row className="align-items-center">
          <Col lg={12} md={12} sm={12} xs={12} className="mb-4">
            
              <GaugeChart
                id="gauge-chart6"
                nrOfLevels={420}
                arcsLength={[0.3, 0.5, 0.2]}
                colors={["#5BE12C", "#F5CD19", "#EA4228"]}
                percent={0.37}
                arcPadding={0.02}
                
              />

          
          </Col>
          
        
        </Row>
      </div>
    );
  }
}

export default DynamismeImmoChart;
