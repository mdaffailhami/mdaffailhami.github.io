import React from "react";
import image from "../../../assets/images";

// function Navbar() {
class Navbar extends React.Component {
  componentDidMount() {
    // const navItems = document.querySelectorAll("#navbar ul li a");
    // navItems.forEach((navItem) => {
    //   navItem.addEventListener("mouseenter", () => {
    //     navItem.style.color = "#bbb";
    //   });
    //   navItem.addEventListener("mouseleave", () => {
    //     navItem.style.color = "#fff";
    //   });
    // });
  }
  render() {
    return (
      <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={image.profile} alt="..." />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-8 mb-lg-0">
              <NavItem text="Articles" href="#articles" />
              <NavItem text="Projects" href="#projects" />
              <NavItem text="Programming Skills" href="#skills" />
              <NavItem text="QnA" href="#qna" />
              <NavItem text="Social Media" href="#socmeds" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href={props.href}>
        {props.text}
      </a>
    </li>
  );
}

export default Navbar;
