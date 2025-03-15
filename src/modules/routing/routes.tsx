import { lazy } from "react";
import { RouteProps } from "react-router";

const HomePage = lazy(() => import("../home"));
const ProductPage = lazy(() => import("../product"));
const CreateProductPage = lazy(() => import("../create-product"));
const EditProductPage = lazy(() => import("../edit-product"));

export const ROUTES: RouteProps[] = [
  {
    path: "/",
    element: <HomePage />,
    index: true,
  },
  {
    path: "/product/:pid",
    element: <ProductPage />,
  },
  {
    path: "/product/:pid/edit",
    element: <EditProductPage />,
  },
  {
    path: "/product/create",
    element: <CreateProductPage />,
  },
];
