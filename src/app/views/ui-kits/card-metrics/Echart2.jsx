import React from "react";
import ReactEcharts from "echarts-for-react";
import { echartOptions } from "@gull";

const option = {
  ...echartOptions.defaultOptions,
  ...{
    series: [
      {
        data: [6, 4, 7, 4, 6, 4, 1],
        ...echartOptions.smoothLine,
        lineStyle: {
          color: "#df0029",
          ...echartOptions.lineShadow
        },
        itemStyle: {
          color: "#df0029"
        }
      }
    ]
  }
};

const Echart2 = ({ height }) => {
  return <ReactEcharts style={{ height: height }} option={option} />;
};

export default Echart2;
