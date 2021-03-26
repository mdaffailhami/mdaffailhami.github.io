import React, { Component } from "react";
import image from "../assets/images";

// function Navbar() {
function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow"
      style={{ zIndex: 99999 }}
    >
      <div className="container">
        <NavbarBrand />
        <HamburgerMenu />
        <NavItems />
      </div>
    </nav>
  );
}

function NavbarBrand() {
  return (
    <a className="navbar-brand" href="#">
      <img src={image.profile} alt="..." style={{ width: 35, borderRadius: "50%" }} />
    </a>
  );
}

function HamburgerMenu() {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

class NavItems extends Component {
  componentDidMount() {
    const navItems = document.querySelectorAll("#navbar ul li a");

    // Ngatur warna NavItem ketika di hover
    navItems.forEach((navItem) => {
      navItem.addEventListener("mouseover", () => {
        navItem.style.color = "#bbb";
      });
      navItem.addEventListener("mouseleave", () => {
        navItem.style.color = "#fff";
      });
    });
  }

  NavItem = (props) => {
    return (
      <li className="nav-item" style={{ marginRight: 10 }}>
        <a className="nav-link active" aria-current="page" href={props.href}>
          {props.text}
        </a>
      </li>
    );
  };

  render() {
    const { NavItem } = this;
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-8 mb-lg-0">
          <NavItem text="Articles" href="#articles" />
          <NavItem text="Projects" href="#projects" />
          <NavItem text="QnA" href="#qna" />
          <NavItem text="Skills" href="#skills" />
          <NavItem text="Socmeds" href="#socmeds" />
        </ul>
      </div>
    );
  }
}

export default Navbar;
