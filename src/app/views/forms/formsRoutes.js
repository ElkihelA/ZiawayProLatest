import { lazy } from "react";

const FormBasic = lazy(() => import("./FormBasic"));

const ActionBarForm = lazy(() => import("./ActionBarForm"));

const LayoutForm = lazy(() => import("./LayoutForm"));

const MultiColumnForms = lazy(() => import("./MultiColumnForms"));

const InputGroupForm = lazy(() => import("./InputGroupForm"));

const FormValidation = lazy(() => import("./FormValidation"));

const FormsWizard = lazy(() => import("./FormsWizard"));

const TagInput = lazy(() => import("./TagInput"));

const FormEditor = lazy(() => import("./FormEditor"));

const formsRoutes = [
  {
    path: "/forms/basic",
    component: FormBasic
  },
  {
    path: "/forms/action-bar",
    component: ActionBarForm
  },
  {
    path: "/forms/layouts",
    component: LayoutForm
  },
  {
    path: "/forms/multi-column-forms",
    component: MultiColumnForms
  },
  {
    path: "/forms/input-group",
    component: InputGroupForm
  },
  {
    path: "/forms/form-validation",
    component: FormValidation
  },
  {
    path: "/forms/forms-wizard",
    component: FormsWizard
  },
  {
    path: "/forms/form-editor",
    component: FormEditor
  },
  {
    path: "/forms/tag-input",
    component: TagInput
  }
];

export default formsRoutes;
