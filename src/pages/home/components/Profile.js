import React from "react";
import image from "../../../assets/images";

function Profile() {
  return (
    <div id="profile">
      <img src={image.profile} alt="profile" />
      <h2>DAFFA ILHAMI</h2>
      <p>The person who likes Information Technology</p>
    </div>
  );
}

export default Profile;
