import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselMain: React.FC = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://media.boohoo.com/i/boohooamplience/220406_Desktop_Mackenzie_SecondSecondary"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.boohoo.com/i/boohooamplience/220406_occasion_second_desktop"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
