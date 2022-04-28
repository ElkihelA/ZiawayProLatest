import { lazy } from "react";

const CardWidget = lazy(() => import("./CardWidget"));

const StatisticsWidget = lazy(() => import("./StatisticsWidget"));

const ListWidget = lazy(() => import("./ListWidget"));

const AppWidget = lazy(() => import("./AppWidget"));

const WeatherWidget = lazy(() => import("./WeatherWidget"));

const widgetsRoute = [
  {
    path: "/widgets/card",
    component: CardWidget
  },
  {
    path: "/widgets/statistics",
    component: StatisticsWidget
  },
  {
    path: "/widgets/list",
    component: ListWidget
  },
  {
    path: "/widgets/app",
    component: AppWidget
  },
  {
    path: "/widgets/weather-app",
    component: WeatherWidget
  }
];

export default widgetsRoute;
