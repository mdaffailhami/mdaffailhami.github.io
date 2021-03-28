import React from "react";
import icons from "../../../assets/icons";

function Projects(props) {
  return (
    <div id="projects">
      <div style={{ height: 80, marginTop: -50 }}></div>
      <hr />
      <h3 className="text-center mb-3">Projects</h3>
      <div>
        <Project.Row>
          <Project.Column
            isMobile={props.isMobile}
            href="https://mdi-note.herokuapp.com"
            image={icons.mdinote}
            title="MDI Note"
            desc="Aplikasi Web untuk menyimpan catatan"
          />
          <Project.Column
            isMobile={props.isMobile}
            href="http://www.mediafire.com/file/7w4zgssskx8ik6t/Aidunnow.apk/file"
            image={icons.aidunnow}
            title="Aidunnow"
            desc="Aplikasi android calculator"
          />
        </Project.Row>
        <Project.Row>
          <Project.Column
            isMobile={props.isMobile}
            href="http://typing-practice.netlify.app"
            image="https://typing-practice.netlify.app/favicon.png"
            title="Typing Practice"
            desc="Aplikasi web untuk latihan mengetik"
          />
          <Project.Column
            isMobile={props.isMobile}
            href="https://mdi-card.netlify.app"
            image="https://mdi-card.netlify.app/app-icon.svg"
            title="MDI Card"
            desc="Aplikasi web untuk mentautkan sosial media"
          />
        </Project.Row>
      </div>
    </div>
  );
}

const Project = {
  Row(props) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 30,
        }}
      >
        {props.children}
      </div>
    );
  },
  Column(props) {
    return (
      <a href={props.href} target="_blank" style={{ textDecoration: "none" }}>
        <div
          style={{
            flex: 1,
            borderRadius: 10,
            overflow: "hidden",
            width: props.isMobile ? 110 : 250,
            height: props.isMobile ? 130 : 270,
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "80%",
              backgroundColor: "#222",
              backgroundImage: "url(" + props.image + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            style={{
              zIndex: 999,
              backgroundColor: "#fff",
              position: "absolute",
              bottom: 0,
              width: "100%",
              padding: 10,
            }}
          >
            <h6
              style={{
                color: "blue",
                textDecoration: "underline",
                textAlign: props.isMobile ? "center" : null,
                fontSize: props.isMobile ? "0.8em" : null,
              }}
            >
              {props.title}
            </h6>
            <span className="text-dark" style={{ display: props.isMobile ? "none" : null }}>
              {props.desc}
            </span>
          </div>
        </div>
      </a>
    );
  },
};

export default Projects;
