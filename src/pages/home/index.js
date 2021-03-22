import React, { Component } from "react";
import "./style.scss";
import { Articles, Carousel, Gif, Navbar, Profile, Skills, Socmeds } from "./components";

class Home extends Component {
  _isMounted = false;
  state = {
    isMobile: false,
  };

  componentDidMount() {
    this._isMounted = true;
    console.log("componentDidMount()");
    // Check mobile or desktop
    this.checkWindowWidth();
    window.addEventListener("resize", () => this.checkWindowWidth());
  }

  componentWillUnmount() {
    this._isMounted = false;
    console.log("componentWillUnmount()");

    // window.removeEventListener("resize", () => this.checkWindowWidth());
  }

  checkWindowWidth() {
    if (this._isMounted) {
      if (window.innerWidth <= 766) {
        this.setState({ isMobile: true });
      } else {
        this.setState({ isMobile: false });
      }
    }
  }

  render() {
    console.log("render()");
    const { isMobile } = this.state;
    return (
      <div id="home-page">
        <Navbar />
        <Carousel height={isMobile ? 222 : 500} />
        <Profile imageWidth={isMobile ? "34%" : 150} />

        <div id="content">
          <div id="left-side">
            <Gif />
            <Articles />
          </div>
          <div id="right-side">
            <Skills />
            <Socmeds />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
