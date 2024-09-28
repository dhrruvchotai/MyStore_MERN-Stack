import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carousel from "react-bootstrap/Carousel";
import './Home.css';
import MenCollection from "./MenCollection";

function Home() {
  return (
    <>
        <Carousel>
        <Carousel.Item>
            <img className="d-block w-100 carousel-image" src='/images/homeImg1.webp' alt="Slide 1" style={{width:110 + "vw"}}/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 carousel-image" src='/images/homeImg2.webp' alt="Slide 2"/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 carousel-image" src='/images/homeImg3.webp' alt="Slide 3"/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 carousel-image" src='/images/homeImg4.webp' alt="Slide 4"/>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100 carousel-image" src='/images/homeImg5.webp' alt="Slide 5"/>
        </Carousel.Item>
        </Carousel>

        <MenCollection/>
    </>

  );
}

export default Home;
