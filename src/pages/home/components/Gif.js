import React from "react";
import gif from "../../../assets/gifs";
function Gif() {
  return (
    <>
      <hr />
      <div id="gif" style={{ display: "flex", justifyContent: "center" }}>
        <img src={gif.fujiwaraChika} alt="..." style={{ width: "98%" }} />
      </div>
      <hr />
    </>
  );
}

export default Gif;
