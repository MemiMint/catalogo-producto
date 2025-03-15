import { lazy } from "react";
import { RouteProps } from "react-router";

const Home = lazy(() => import("../home"));
const ProductPage = lazy(() => import("../product"));

export const ROUTES: RouteProps[] = [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/product/:pid",
    element: <ProductPage />,
  },
  {
    path: "/product/:pid/edit",
    element: <>Product Edit</>,
  },
  {
    path: "/product/create",
  },
];
