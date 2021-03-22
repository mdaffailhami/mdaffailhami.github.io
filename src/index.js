import React from "react";
import { render } from "react-dom";
import { Home } from "./pages";
import image from "./assets/images";
// import { Alert, Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
function App() {
  const appIcon = document.createElement("link");
  appIcon.rel = "shortcut icon";
  appIcon.type = "image/x-icon";
  appIcon.href = image.profile;

  document.head.appendChild(appIcon);
  return (
    <>
      <Home />
    </>
  );
}

render(<App />, document.getElementById("app"));
