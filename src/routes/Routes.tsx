import { RouteObject } from "react-router-dom";
import Index from "../pages/Index";
import Home from "../pages/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];
