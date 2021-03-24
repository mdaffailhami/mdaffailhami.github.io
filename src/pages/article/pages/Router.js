import React from "react";
import { CrudNodeJSON } from ".";

function Router() {
  const routes = [{ path: "/article/1-crud-node-json", component: <CrudNodeJSON /> }];

  const path = window.location.pathname.toLowerCase();
  const route = routes.find((route) => route.path == path);

  // If not found
  if (route == undefined) {
    window.location.pathname = "/article";
  }

  return route.component;
}

export default Router;
