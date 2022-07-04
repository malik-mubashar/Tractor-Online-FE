import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import TractorCover2 from "../../assets/img/tractorCover2.jpg"
import TractorCover3 from "../../assets/img/tractorCover3.jpg"
import TractorCover4 from "../../assets/img/tractorCover4.jpg"

const Categories = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const imgUrls = [
    TractorCover4,
    TractorCover2,
    TractorCover3
  ]

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      {imgUrls.map( (item, i) =>  {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 m-auto justify-content-center border-radius "
              src={item}
              alt="First slide"
              height={"400px"}
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
};
export default Categories;
