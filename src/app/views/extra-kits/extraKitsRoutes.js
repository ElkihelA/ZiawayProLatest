import { lazy } from "react";

const UploadForm = lazy(() => import("./UploadForm"));

const AppToastr = lazy(() => import("./AppToastr"));

const LaddaButtons = lazy(() => import("./LaddaButtons"));

const AppLoader = lazy(() => import("./AppLoader"));

const AppSweetAlert = lazy(() => import("./AppSweetAlert"));

const AppDropdown = lazy(() => import("./AppDropdown"));

const AppImageCropper = lazy(() => import("./AppImageCropper"));

const AppTour = lazy(() => import("./AppTour"));

const extraKitsRoutes = [
  {
    path: "/extra-kits/upload",
    component: UploadForm
  },
  {
    path: "/extra-kits/toastr",
    component: AppToastr
  },
  {
    path: "/extra-kits/ladda-buttons",
    component: LaddaButtons
  },
  {
    path: "/extra-kits/loaders",
    component: AppLoader
  },
  {
    path: "/extra-kits/sweet-alert",
    component: AppSweetAlert
  },
  {
    path: "/extra-kits/image-cropper",
    component: AppImageCropper
  },
  {
    path: "/extra-kits/user-tour",
    component: AppTour
  },
  {
    path: "/extra-kits/dropdown",
    component: AppDropdown
  }
];

export default extraKitsRoutes;
