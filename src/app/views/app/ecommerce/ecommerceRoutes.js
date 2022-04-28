import { lazy } from "react";

const ProductList = lazy(() => import("./ProductList"));

const ProductDetails = lazy(() => import("./ProductDetails"));

const Cart = lazy(() => import("./Cart"));

const Checkout = lazy(() => import("./Checkout"));

const ecommerceRoutes = [
  {
    path: "/ecommerce/products",
    component: ProductList
  },
  {
    path: "/ecommerce/product-details",
    component: ProductDetails
  },
  {
    path: "/ecommerce/cart",
    component: Cart
  },
  {
    path: "/ecommerce/checkout",
    component: Checkout
  }
];

export default ecommerceRoutes;
