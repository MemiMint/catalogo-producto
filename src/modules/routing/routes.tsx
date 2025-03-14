import { RouteProps } from "react-router";

export const ROUTES: RouteProps[] = [
  {
    path: "/",
    element: <>Home</>,
    index: true,
  },
  {
    path: "/product/:pid",
    element: <>Product page</>,
  },
  {
    path: "/product/:pid/edit",
    element: <>Product Edit</>,
  },
  {
    path: "/product/create",
  },
];
