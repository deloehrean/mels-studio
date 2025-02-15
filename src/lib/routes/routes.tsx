import React, { lazy } from "react";

import { RoutePathDefinition } from "src/lib/routes/RoutePathDefinition";

const Home = lazy(() => import("src/pages/Home"));
const NotFound = lazy(() => import("src/pages/NotFound"));

export const routes: RoutePathDefinition[] = [
  { path: "/", element: <Home />, title: "Their Space", index: true },
  { path: "*", element: <NotFound />, title: "Not Found" },
];
