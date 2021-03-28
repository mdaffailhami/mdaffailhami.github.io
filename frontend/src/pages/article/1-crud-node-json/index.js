import React, { Component } from "react";
import { Footer } from "../../../components";
import { Isi, MoreArticles, Pembuka, Penutup } from "./components";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/hybrid.css";
import javaScriptHljs from "highlight.js/lib/languages/javascript";

class CRUDNodeJSON extends Component {
  _isMounted = false;

  state = {
    isMobile: false,
  };

  componentDidMount() {
    console.log("componentDidMount()");
    this._isMounted = true;

    // Set title
    document.title = "Membuat aplikasi CRUD berbasis CLI dengan Node.js";

    // Highlight.js configuration
    hljs.registerLanguage("javascript", javaScriptHljs);
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();

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
    const { isMobile } = this.state;
    return (
      <div id="article/crud-node-json">
        <br />
        <div
          id="content"
          style={Object.assign(
            // Desktop
            !isMobile && { display: "flex", justifyContent: "space-around" },
            // Mobile
            isMobile && {
              margin: "auto",
              backgroundColor: "rgb(33, 37, 43)",
              padding: 30,
              paddingTop: 15,
              borderRadius: "1.5%",
            }
          )}
        >
          <div
            id="left-side"
            style={Object.assign(
              // Desktop
              !isMobile && {
                width: 800,
                backgroundColor: "rgb(39, 43, 51)",
                padding: 30,
                paddingTop: 15,
                borderRadius: 10,
              }
            )}
          >
            <Pembuka />
            <Isi />
            <Penutup />
          </div>

          {isMobile && <hr />}

          <div
            id="right-side"
            style={Object.assign(
              // Desktop
              !isMobile && {
                borderRadius: "3%",
                width: 320,
                height: "fit-content",
                backgroundColor: "rgb(35, 46, 53)",
                border: "1px solid #fff",
                padding: 30,
              }
            )}
          >
            <MoreArticles />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CRUDNodeJSON;
