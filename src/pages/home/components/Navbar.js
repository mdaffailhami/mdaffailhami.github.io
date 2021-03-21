import React from "react";
import image from "../../../assets/images";

function Navbar() {
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#articles">
                Articles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#skills">
                Programming Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#qna">
                QnA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#socmed">
                Social Media
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
