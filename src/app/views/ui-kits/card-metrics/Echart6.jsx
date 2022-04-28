import React from "react";
import ReactEcharts from "echarts-for-react";
import { echartOptions } from "@gull";

const option = {
  ...echartOptions.defaultOptions,
  ...{
    series: [
      {
        type: "pie",
        itemStyle: echartOptions.pieLineStyle,
        data: [
          {
            name: "Running",
            value: 40,
            ...echartOptions.pieLabelOff,
            itemStyle: {
              borderColor: "#ff9800"
            }
          },
          {
            name: "Completed",
            value: 60,
            ...echartOptions.pieLabelOff,
            itemStyle: {
              borderColor: "#4CAF50"
            }
          }
        ]
      }
    ]
  }
};

const Echart6 = ({ height }) => {
  return <ReactEcharts style={{ height: height }} option={option} />;
};

export default Echart6;
