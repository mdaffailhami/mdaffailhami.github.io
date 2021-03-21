import React from "react";
import "./style.scss";
import { Carousel, Navbar, Profile } from "./components";

function Home() {
  return (
    <div id="home-page">
      <Navbar />
      <Carousel />
      <Profile />
    </div>
  );
}

export default Home;
