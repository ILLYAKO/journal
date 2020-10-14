import React from "react";
import imagesCarousel from "../assets/imagesCarousel/imagesCarousel"
import slide01 from "../assets/imagesCarousel/1.jpg"
import slide02 from "../assets/imagesCarousel/2.jpg"
import slide03 from "../assets/imagesCarousel/3.jpg"
// import slide04 from "../assets/imagesCarousel/4.jpg"

export const Carousel = () => (
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleCaptions"
        data-slide-to="0"
        className="active"
      ></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slide01} className="d-block w-100" alt="..." />
        {console.log('object: ', imagesCarousel[0].src)}
        {}
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src={slide02} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slide03} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);
