import React from "react";
import ReactEcharts from "echarts-for-react";
import { echartOptions } from "@gull";

const option = {
  ...echartOptions.defaultOptions,
  ...{
    series: [
      {
        type: "bar",
        barWidth: 6,

        itemStyle: {
          color: "#ff9800",
          ...echartOptions.lineShadow
        },
        data: [
          {
            name: "Bar 1",
            value: 40
          },
          {
            name: "Bar 2",
            value: 60,
            itemStyle: {
              color: "#4CAF50"
            }
          },
          {
            name: "Bar 3",
            value: 80
          },
          {
            name: "Bar 4",
            value: 70
          },
          {
            name: "Bar 5",
            value: 60
          },
          {
            name: "Bar 6",
            value: 70
          },
          {
            name: "Bar 7",
            value: 80
          },
          {
            name: "Bar 8",
            value: 40
          },
          {
            name: "Bar 9",
            value: 70,
            itemStyle: {
              color: "#4CAF50"
            }
          }
        ]
      }
    ]
  }
};

const Echart9 = ({ height }) => {
  return <ReactEcharts style={{ height: height }} option={option} />;
};

export default Echart9;
