import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import icon from "./assets/icons";
import Router from "./pages/Router";

function App() {
  // Default App Title & App Icon
  document.title = "Daffa Ilhami";
  document.getElementById("app-icon").setAttribute("href", icon.appIcon);

  return <Router />;
}

render(<App />, document.getElementById("app"));
