import React from "react";
import { Article, Home } from ".";

function Router() {
  const routes = [
    { path: "/", component: <Home /> },
    { path: "/article", component: <Article /> },
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
