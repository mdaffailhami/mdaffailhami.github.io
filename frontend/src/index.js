import React from "react";
import { render } from "react-dom";
import icon from "./assets/icons";
import Router from "./pages/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  // Default App Title & App Icon
  document.title = "Daffa Ilhami";
  document.getElementById("app-icon").setAttribute("href", icon.appIcon);

  return <Router />;
}

function renderApp() {
  render(<App />, document.getElementById("app"));
}

// Mounting pertama
renderApp();

// Mounting ketika tombol back / previous di browser dipencet
window.addEventListener("popstate", renderApp);

export default renderApp;
