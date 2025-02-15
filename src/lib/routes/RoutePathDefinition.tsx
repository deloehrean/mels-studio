import { RouteObject } from "react-router-dom";

export type RoutePathDefinition = RouteObject & {
  title: string;
  path: string;
  subtitle?: string;
  nav?: boolean;
  startIcon?: string;
  endIcon?: string;
  tree?: string;
  parent?: string;
  children?: RoutePathDefinition[];
  protected?: boolean;
};
