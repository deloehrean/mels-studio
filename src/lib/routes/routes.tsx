import React, { lazy } from "react";

import { RoutePathDefinition } from "src/lib/routes/RoutePathDefinition";

const Home = lazy(() => import("src/pages/Home"));
const NotFound = lazy(() => import("src/pages/NotFound"));
const Read = lazy(() => import("src/pages/Read"));
const Write = lazy(() => import("src/pages/Write"));

export const routes: RoutePathDefinition[] = [
  { path: "/", element: <Home />, title: "Their Space", index: true },
  { path: "*", element: <NotFound />, title: "Not Found" },
  { path: "/read", element: <Read />, title: "Kismet", index: true, nav: true },
  { path: "/write", element: <Write />, title: "Theme" },
];
