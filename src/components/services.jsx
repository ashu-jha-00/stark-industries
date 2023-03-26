import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img4 from "../assets/stark.jpg";
import img2 from "../assets/f15.webp";
import img3 from "../assets/f151.webp";
import img1 from "../assets/rafal.jpg";
import img5 from "../assets/su75.webp";
import img6 from "../assets/scene-Iron-Man.webp";

const services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
        // showIndicators={false}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Rafal</p>
        </div>
        <div>
          <img src={img6} alt="Item1" />
          <p className="legend">Armor</p>
        </div>
        <div>
          <img src={img2} alt="Item1" />
          <p className="legend">F-15</p>
        </div>
        <div>
          <img src={img3} alt="Item1" />
          <p className="legend">F-16</p>
        </div>
        <div>
          <img src={img5} alt="Item1" />
          <p className="legend">Su-75</p>
        </div>
        <div>
          <img src={img4} alt="Item1" />
          <p className="legend">S-400</p>
        </div>
      </Carousel>
    </div>
  );
};

export default services;
