import { lazy } from "react";

const AppAlert = lazy(() => import("./alerts/AppAlert"));

const AppAccordion = lazy(() => import("./accordions/AppAccordion"));

const AppBadge = lazy(() => import("./badges/AppBadge"));

const AppButton = lazy(() => import("./buttons/AppButton"));

const AppTab = lazy(() => import("./tabs/AppTab"));

const AppCard = lazy(() => import("./cards/AppCards"));

const CardMetrics = lazy(() => import("./card-metrics/CardMetrics"));

const AppCarousel = lazy(() => import("./carousel/AppCarousel"));

const AppCollapsible = lazy(() => import("./collapsibles/AppCollapsibles"));

const AppList = lazy(() => import("./lists/AppList"));

const AppPagination = lazy(() => import("./pagination/AppPagination"));

const AppPopover = lazy(() => import("./popover/AppPopover"));

const AppProgressbar = lazy(() => import("./progressbar/AppProgressbar"));

const AppTable = lazy(() => import("./tables/AppTable"));

const AppTooltip = lazy(() => import("./tooltip/AppTooltip"));

const AppModal = lazy(() => import("./modals/AppModal"));

const AppSlider = lazy(() => import("./slider/AppSlider"));

const AppRating = lazy(() => import("./ratings/AppRating"));

const uiKitsRoutes = [
  {
    path: "/uikits/alerts",
    component: AppAlert
  },
  {
    path: "/uikits/accordions",
    component: AppAccordion
  },
  {
    path: "/uikits/badges",
    component: AppBadge
  },
  {
    path: "/uikits/buttons",
    component: AppButton
  },
  {
    path: "/uikits/tabs",
    component: AppTab
  },
  {
    path: "/uikits/cards",
    component: AppCard
  },
  {
    path: "/uikits/cards-metrics",
    component: CardMetrics
  },
  {
    path: "/uikits/carousel",
    component: AppCarousel
  },
  {
    path: "/uikits/collapsibles",
    component: AppCollapsible
  },
  {
    path: "/uikits/lists",
    component: AppList
  },
  {
    path: "/uikits/paginations",
    component: AppPagination
  },
  {
    path: "/uikits/popover",
    component: AppPopover
  },
  {
    path: "/uikits/progressbar",
    component: AppProgressbar
  },
  {
    path: "/uikits/tables",
    component: AppTable
  },
  {
    path: "/uikits/tooltip",
    component: AppTooltip
  },
  {
    path: "/uikits/modals",
    component: AppModal
  },
  {
    path: "/uikits/sliders",
    component: AppSlider
  },
  {
    path: "/uikits/rating",
    component: AppRating
  }
];

export default uiKitsRoutes;
