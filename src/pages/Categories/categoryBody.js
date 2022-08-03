import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import TractorCover2 from "../../assets/img/tractorCover2.jpg"
import TractorCover3 from "../../assets/img/tractorCover3.jpg"
import T1 from "../../assets/img/t1.jpg"
import T2 from "../../assets/img/t2.jpg"
import T3 from "../../assets/img/t3.jpg"

const Categories = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const imgUrls = [
    T2,
    T1,
    T3,
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
              height={"500px"}
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
};
export default Categories;
