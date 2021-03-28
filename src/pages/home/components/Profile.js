import React from "react";
import image from "../../../assets/images";

function Profile(props) {
  return (
    <div
      id="profile"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(33, 36, 41)",
        margin: "auto",
      }}
    >
      <img
        src={image.profile}
        alt="profile"
        style={{
          width: props.isMobile ? "34%" : 150,
          borderRadius: "50%",
          marginTop: 20,
          marginBottom: 10,
          zIndex: 999,
        }}
      />
      <h2>DAFFA ILHAMI</h2>
      <p className="text-center">A man who likes information technology</p>
    </div>
  );
}

export default Profile;
