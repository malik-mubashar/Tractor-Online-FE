import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Categories = ({ src }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="d-block w-100 m-auto justify-content-center border-radius "
          src={src}
          alt="First slide"
          height={"250px"}
        />
        {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 m-auto justify-content-center border-radius"
          src={src}
          alt="Second slide"
          height={"250px"}

        />
        {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 m-auto justify-content-center border-radius"
          src={src}
          alt="Third slide"
          height={"250px"}

        />

        {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};
export default Categories;
