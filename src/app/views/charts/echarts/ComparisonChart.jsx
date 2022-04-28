import React from "react";
import ReactEcharts from "echarts-for-react";

const ComparisonChart = ({ height, color = [] }) => {
  const option = {
    legend: {
      borderRadius: 0,
      orient: "horizontal",
      x: "right",
      data: ["Online", "Offline"]
    },
    grid: {
      left: "8px",
      right: "8px",
      bottom: "0",
      containLabel: true
    },
    tooltip: {
      show: true,
      backgroundColor: "rgba(0, 0, 0, .8)"
    },
    xAxis: [
      {
        type: "category",
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec"
        ],
        axisTick: {
          alignWithLabel: true
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: "${value}"
        },
        min: 0,
        max: 100000,
        interval: 25000,
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          interval: "auto"
        }
      }
    ],

    series: [
      {
        name: "Online",
        data: [
          35000,
          69000,
          22500,
          60000,
          50000,
          50000,
          30000,
          80000,
          70000,
          60000,
          20000,
          30005
        ],
        label: { show: false, color: "#0168c1" },
        type: "bar",
        barGap: 0,
        color: "#bcbbdd",
        smooth: true,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: -2,
            shadowColor: "rgba(0, 0, 0, 0.3)"
          }
        }
      },
      {
        name: "Offline",
        data: [
          45000,
          82000,
          35000,
          93000,
          71000,
          89000,
          49000,
          91000,
          80200,
          86000,
          35000,
          40050
        ],
        label: { show: false, color: "#639" },
        type: "bar",
        color: "#7569b3",
        smooth: true,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: -2,
            shadowColor: "rgba(0, 0, 0, 0.3)"
          }
        }
      }
    ]
  };

  return <ReactEcharts style={{ height: height }} option={option} />;
};

export default ComparisonChart;
