import React from 'react';
import "./Project.css";
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Assets/home.png";
import nav from "../Assets/2.png";
import main from "../Assets/3.png";
import image from "../Assets/4.png";
import image2 from "../Assets/5.png";
import image3 from "../Assets/6.png";

function Project() {
  return (
    <div><Carousel variant="dark" className="carousal">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Home}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nav}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={main}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
    <div className="main">
    <a className="link" href="https://sivaram7639.github.io/ground-water-survey/">GROUND WATER SURVEY</a>
    </div>
    </div>
  )
}

export default Project;