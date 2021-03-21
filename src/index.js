import React from "react";
import { render } from "react-dom";
import { Home } from "./pages";

// import { Alert, Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

render(<App />, document.getElementById("app"));
