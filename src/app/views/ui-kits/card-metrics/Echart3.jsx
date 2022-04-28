import React from "react";
import ReactEcharts from "echarts-for-react";
import { echartOptions } from "@gull";

const option = {
  ...echartOptions.defaultOptions,
  ...{
    series: [
      {
        data: [2, 2, 7, 4, 6, 4, 8],
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

const Echart3 = ({ height }) => {
  return <ReactEcharts style={{ height: height }} option={option} />;
};

export default Echart3;
