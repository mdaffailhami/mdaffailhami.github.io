import React from "react";
import Home from "./home";
import Article, { CRUDNodeJSON } from "./article";

function Router() {
  const routes = [
    { path: "/", component: <Home /> },
    { path: "/article", component: <Article /> },
    { path: "/article/crud-node-json", component: <CRUDNodeJSON /> },
  ];

  const path = window.location.pathname.toLowerCase();
  const route = routes.find((route) => route.path == path);

  // If not found
  if (route == undefined) {
    window.location.pathname = "/";
  }

  return route.component;
}

export default Router;
