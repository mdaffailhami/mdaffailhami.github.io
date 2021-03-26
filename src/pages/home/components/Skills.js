import React from "react";

function Skills(props) {
  return (
    <div id="skills">
      <div style={{ height: 90, marginTop: -100 }}></div>
      {props.isMobile && <hr />}
      <h3 className="text-center">Skills</h3>
      <Skill title="JavaScript" value="85" color="bg-warning" />
      <Skill title="HTML" value="80" color="bg-danger" />
      <Skill title="CSS" value="72" color="bg-primary" />
      <Skill title="React.js" value="65" color="#3f51b5" />
      <Skill title="React Native" value="48" color="bg-secondary" />
      <Skill title="Express.js" value="75" color="rgb(90, 192, 6)" />
      <Skill title="Java" value="60" color="rgb(255, 73, 73)" />
      <Skill title="PHP" value="40" color="bg-primary" />
      <Skill title="Python" value="22" color="bg-info" />
    </div>
  );
}

function Skill(props) {
  return (
    <div>
      <b>{props.title}</b>
      <div className="progress">
        <div
          className={"progress-bar progress-bar-striped progress-bar-animated " + props.color}
          role="progressbar"
          aria-valuenow={props.value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: props.value + "%", backgroundColor: props.color }}
        />
      </div>
    </div>
  );
}

export default Skills;
