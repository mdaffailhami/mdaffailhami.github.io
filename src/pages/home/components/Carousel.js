import React from "react";
import image from "../../../assets/images";

function Carousel(props) {
  return (
    <div
      id="carousel"
      className="carousel carousel-light slide"
      data-bs-ride="carousel"
      style={{ marginTop: 30 }}
    >
      <CarouselIndicators />
      <CarouselInner height={props.isMobile ? 222 : 500} />
      <CarouselControls />
    </div>
  );
}

function CarouselIndicators() {
  return (
    <ol className="carousel-indicators">
      <li data-bs-target="#carousel" data-bs-slide-to="0" className="active"></li>
      <li data-bs-target="#carousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#carousel" data-bs-slide-to="2"></li>
    </ol>
  );
}

function CarouselInner(props) {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2500">
        <img src={image.carousel1} className="d-block w-100" alt="..." height={props.height} />
      </div>
      <div className="carousel-item" data-bs-interval="2500">
        <img src={image.carousel2} className="d-block w-100" alt="..." height={props.height} />
      </div>
      <div className="carousel-item" data-bs-interval="2500">
        <img src={image.carousel3} className="d-block w-100" alt="..." height={props.height} />
      </div>
    </div>
  );
}

function CarouselControls() {
  return (
    <>
      <a className={"carousel-control-prev"} href="#carousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#carousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </>
  );
}

export default Carousel;
