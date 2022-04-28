import React from "react";
import ReactEcharts from "echarts-for-react";
import { echartOptions } from "@gull";

const option = {
  ...echartOptions.defaultOptions,
  ...{
    series: [
      {
        data: [30, 40, 20, 50, 40, 80, 90],
        ...echartOptions.smoothLine,
        lineStyle: {
          color: "#4CAF50",
          ...echartOptions.lineShadow
        },
        itemStyle: {
          color: "#4CAF50"
        }
      }
    ]
  }
};

const Echart1 = ({ height }) => {
  return <ReactEcharts style={{ height: height }} option={option} />;
};

export default Echart1;
