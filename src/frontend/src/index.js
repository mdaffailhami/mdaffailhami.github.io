import React from "react";
import { render } from "react-dom";
import icon from "./assets/icons";
import Router from "./pages/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import variables from "./variables";

function App() {
  // Default App Title & App Icon
  document.title = "Daffa Ilhami";
  document.getElementById("app-icon").setAttribute("href", icon.appIcon);

  // Ngepost Visit History ke database
  fetch("https://api.ipify.org/")
    .then((res) => res.text())
    .then((ipv4) => {
      fetch(variables.env.BACKEND_URL + "/api/visit-history", {
        method: "POST",
        body: JSON.stringify({ ipv4 }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((reason) => console.log("ERROR:", reason));
    })
    .catch((reason) => console.log("ERROR:", reason));

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
