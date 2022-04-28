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

class DelaisVenteChart extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="mb-4">
            <Chart
              options={options4}
              series={options4.series}
              type={options4.chart.type}
             style={{height:50}}
              
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DelaisVenteChart;
