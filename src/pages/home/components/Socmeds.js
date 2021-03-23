import React from "react";

function Socmed() {
  return (
    <div id="socmeds">
      <div style={{ height: 50, marginTop: -20 }}></div>
      <hr />
      <h3 className="text-center">Social Media</h3>
      <center>
        <a href="https://github.com/mdaffailhami" target="_blank">
          <img
            src="https://mdaffailhami.github.io/assets/images/github.png"
            alt="..."
            width="45"
            style={{ backgroundColor: "#fff", borderRadius: "50%" }}
          />
        </a>
        &emsp;&emsp;
        <a href="https://www.instagram.com/m.daffailhami" target="_blank">
          <img
            src="https://mdaffailhami.github.io/assets/images/instagram.png"
            alt="..."
            width="41"
          />
        </a>
      </center>
    </div>
  );
}

export default Socmed;
