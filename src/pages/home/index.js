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

    // Check the device is mobile or desktop
    this.checkDevice();
    window.addEventListener("resize", () => this.checkDevice());
  }

  componentWillUnmount() {
    this._isMounted = false;
    console.log("componentWillUnmount()");

    window.removeEventListener("resize", () => this.checkDevice());
  }

  checkDevice() {
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
            <Articles />
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
            <Skills />
            <Socmeds />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
