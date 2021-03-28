import React, { Component } from "react";
import { Navbar, Footer } from "../../components";
import {
  Articles,
  Carousel,
  Gif,
  Profile,
  Skills,
  Socmeds,
  Projects,
  QnA,
  ContactMe,
} from "./components";

class Home extends Component {
  _isMounted = false;

  state = {
    isMobile: false,
  };

  componentDidMount() {
    console.log("componentDidMount()");
    this._isMounted = true;

    // Check the device is mobile or desktop
    this.checkDevice();
    window.addEventListener("resize", () => this.checkDevice());
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");

    this._isMounted = false;

    window.removeEventListener("resize", () => this.checkDevice());
  }

  checkDevice() {
    if (this._isMounted) {
      if (window.innerWidth >= 768) {
        this.setState({ isMobile: false });
      } else {
        this.setState({ isMobile: true });
      }
    }
  }

  render() {
    console.log("render()");
    const { isMobile } = this.state;

    return (
      <div id="home-page">
        <Navbar />
        <Carousel isMobile={isMobile} />
        <Profile isMobile={isMobile} />
        <div
          id="content"
          style={{
            marginTop: 42,
            marginRight: isMobile ? "auto" : null,
            marginLeft: isMobile ? "auto" : null,
            backgroundColor: isMobile ? "rgb(33, 37, 43)" : null,
            padding: isMobile ? 30 : null,
            paddingTop: isMobile ? 15 : null,
            borderRadius: isMobile ? 10 : null,
            display: isMobile ? null : "flex",
            flexDirection: isMobile ? null : "row",
            justifyContent: isMobile ? null : "space-evenly",
          }}
        >
          <div
            id="left-side"
            style={{
              borderRadius: 10,
              marginBottom: isMobile ? 65 : null,
              width: isMobile ? null : 800,
              backgroundColor: isMobile ? null : "rgb(39, 43, 51)",
              padding: isMobile ? null : 30,
              paddingTop: isMobile ? null : 15,
            }}
          >
            <Gif />
            <Articles isMobile={isMobile} />
            <Projects isMobile={isMobile} />
            <QnA />
          </div>
          <div
            id="right-side"
            style={{
              borderRadius: 10,
              width: isMobile ? null : 320,
              height: isMobile ? null : "fit-content",
              backgroundColor: isMobile ? null : "rgb(35, 46, 53)",
              border: isMobile ? null : "1px solid #fff",
              padding: isMobile ? null : 30,
            }}
          >
            <Skills isMobile={isMobile} />
            <Socmeds />
          </div>
        </div>
        <ContactMe isMobile={isMobile} />
        <Footer />
      </div>
    );
  }
}

export default Home;
