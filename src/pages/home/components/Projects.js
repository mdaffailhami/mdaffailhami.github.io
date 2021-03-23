import React from "react";

function Projects() {
  return (
    <div id="projects">
      <div style={{ height: 60 }}></div>
      <hr />
      <h3 className="text-center mb-3">Projects</h3>
      <div className="row">
        <Project
          href="https://mdi-note.herokuapp.com"
          image="https://mdaffailhami.github.io/assets/images/mdi-note.png"
          title="MDI Note"
          desc="Aplikasi Web untuk menyimpan catatan"
        />
        <Project
          href="http://www.mediafire.com/file/7w4zgssskx8ik6t/Aidunnow.apk/file"
          image="https://mdaffailhami.github.io/assets/images/aidunnow.png"
          title="Aidunnow"
          desc="Aplikasi android calculator"
        />
      </div>
      <div className="row">
        <Project
          href="http://typing-practice.netlify.app"
          image="http://typing-practice.netlify.app/"
          title="Typing Practice"
          desc="Aplikasi web untuk latihan mengetik"
        />
        <Project
          href="http://www.mediafire.com/file/7w4zgssskx8ik6t/Aidunnow.apk/file"
          image="https://mdaffailhami.github.io/assets/images/aidunnow.png"
          title="MDI Card"
          desc="Aplikasi web untuk mentautkan sosial media"
        />
      </div>
    </div>
  );
}

function Project(props) {
  return (
    <div className="col-sm" style={{ marginBottom: 30 }}>
      <a href={props.href} target="_blank" style={{ textDecoration: "none" }}>
        <div className="card">
          <img src={props.image} className="card-img-top" alt="MDI Note" height="275px" />
          <div className="card-body">
            <h6 className="card-text" style={{ color: "blue", textDecoration: "underline" }}>
              {props.title}
            </h6>
            <p className="card-text text-dark">{props.desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Projects;
