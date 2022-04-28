import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "@gull";
import { Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import { options1, options2, options3 } from "./apexRadarChartOptions";
import { options1 as candleStickOption } from "./apexCandleStickChartOptions";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
class ApexRadarChart extends Component {
  state = {};
  render() {
    return (
      <div>
    
        <Row>
      
          <Col lg={12} md={12} sm={12} xs={12} className="mb-0">
           
            <RadarChart
            captions={{
              // columns
              Dynamisme: 'Dynamisme',
              rarete: 'Rareté',
              services: 'Services',
        
            }}
            data={[
              // data
              {
                data: {
                  Dynamisme: 0.7,
                  rarete: .8,
                  services: 0.9,
                 
                },
                meta: { color: '#663399' }
              },
            ]}
            size={300}
          />
        <p>Le radar est un résumé d’investissement visuel dont le score de chaque axe est calculé selon notre modèle d'analyse.</p>
          </Col>
        
       
        </Row>
      </div>
    );
  }
}

export default ApexRadarChart;
