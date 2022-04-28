import { lazy } from "react";

const BasicDataTable = lazy(() => import("./BasicDataTable"));

const DefaultSortedDataTable = lazy(() => import("./DefaultSortedDataTable"));

const MultiColumnOrderingDataTable = lazy(() =>
  import("./MultiColumnOrderingDataTable")
);

const SearchableDataTable = lazy(() => import("./SearchableDataTable"));

const CellEditorDataTable = lazy(() => import("./CellEditorDataTable"));

const dataTableRoute = [
  {
    path: "/data-table/basic",
    component: BasicDataTable
  },
  {
    path: "/data-table/default-sorted",
    component: DefaultSortedDataTable
  },
  {
    path: "/data-table/search",
    component: SearchableDataTable
  },
  {
    path: "/data-table/cell-editor",
    component: CellEditorDataTable
  },
  {
    path: "/data-table/multi-column-ordering",
    component: MultiColumnOrderingDataTable
  }
];

export default dataTableRoute;
