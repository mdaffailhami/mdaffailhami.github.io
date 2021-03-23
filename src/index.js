import React, { Component } from "react";
import { render } from "react-dom";
import { Article, Home } from "./pages";
import icon from "./assets/icons";

class App extends Component {
  componentDidMount() {
    console.log("componentDidMount()");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }
  render() {
    console.log("render()");

    // Default App Title & App Icon
    document.title = "Daffa Ilhami";
    document.getElementById("app-icon").setAttribute("href", icon.appIcon);

    // App Router
    const path = window.location.pathname.toLowerCase();
    if (path == "/") {
      return <Home />;
    }
    if (path == "/article") {
      return <Article />;
    }
    // Not found page
    return <Home />;
    // return <a href="/article">uwu</a>;
  }
}

render(<App />, document.getElementById("app"));
