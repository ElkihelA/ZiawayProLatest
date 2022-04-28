import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import {
  barOptions1,
  barOptions2,
  barOptions3,
  barOptions4,
  barOptions5,
  barOptions6
} from "./apexBarChartOptions";

class ApexBarChart extends Component {
  state = {};
  render() {
    return (
      <div>
        <Breadcrumb
          routeSegments={[
            { name: "Charts", path: "/charts" },
            { name: "Apex", path: "/apex" },
            { name: "Bar Chart" }
          ]}
        />
        <Row>
          <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
            <SimpleCard className="h-100" title="Basic Bar chart">
              <Chart
                options={barOptions1}
                series={barOptions1.series}
                type={barOptions1.chart.type}
              />
            </SimpleCard>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
            <SimpleCard className="h-100" title="Grouped Bar">
              <Chart
                options={barOptions2}
                series={barOptions2.series}
                type={barOptions2.chart.type}
              />
            </SimpleCard>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
            <SimpleCard
              className="h-100"
              title="Stacked Bars(Fiction Books Sales)"
            >
              <Chart
                options={barOptions3}
                series={barOptions3.series}
                type={barOptions3.chart.type}
              />
            </SimpleCard>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
            <SimpleCard
              className="h-100"
              title="Bar with Negative Values(Mauritius population pyramid 2011)"
            >
              <Chart
                options={barOptions4}
                series={barOptions4.series}
                type={barOptions4.chart.type}
              />
            </SimpleCard>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
            <SimpleCard className="h-100" title="Custom DataLabels Bar">
              <Chart
                options={barOptions5}
                series={barOptions5.series}
                type={barOptions5.chart.type}
              />
            </SimpleCard>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="mb-4">
            <SimpleCard
              className="h-100"
              title="Patterned Bar(Compare Sales Strategy)"
            >
              <Chart
                options={barOptions6}
                series={barOptions6.series}
                type={barOptions6.chart.type}
              />
            </SimpleCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ApexBarChart;
