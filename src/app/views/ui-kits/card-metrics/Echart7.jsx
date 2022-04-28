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
            name: "Email Subscription",
            value: 80,
            ...echartOptions.pieLabelOff,
            itemStyle: {
              borderColor: "#4CAF50"
            }
          },
          {
            name: "Registration",
            value: 20,
            ...echartOptions.pieLabelOff,
            itemStyle: {
              borderColor: "#df0029"
            }
          }
        ]
      }
    ]
  }
};

const Echart7 = ({ height }) => {
  return <ReactEcharts style={{ height: height }} option={option} />;
};

export default Echart7;
