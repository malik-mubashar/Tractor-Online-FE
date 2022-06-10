import React, { useState } from "react";

const NewCarByMake = () => {
  const [index2, setIndex2] = useState([1, 2, 3]);

  return (
    <>
      <div className="container-lg mt-5 py-4">
        <h5 className="text-center">New Tractor by Make</h5>
        {index2.map((option) => (
          <div className="row" key={option}>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <a href={"/"}>
                  <img
                    alt="Suzuki"
                    height="65"
                    loading="lazy"
                    src="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/041/resized/Suzuki.png"
                  />
                  <h5 className="nomargin">Suzuki</h5>
                </a>
              </li>
            </ul>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <a href={"/"}>
                  <img
                    alt="Toyota"
                    height="65"
                    loading="lazy"
                    src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/042/resized/Tyota.png"
                  />
                  <h5 className="nomargin">Toyota</h5>
                </a>
              </li>
            </ul>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <a href={"/"}>
                  <img
                    alt="Honda"
                    height="65"
                    loading="lazy"
                    src="https://cache2.pakwheels.com/system/car_manufacturers/manufacturers/000/000/014/resized/Honda.png"
                  />
                  <h5 className="nomargin">Honda</h5>
                </a>
              </li>
            </ul>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <a href={"/"}>
                  <img
                    alt="KIA"
                    height="65"
                    loading="lazy"
                    src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/021/resized/KIA.png"
                  />
                  <h5 className="nomargin">KIA</h5>
                </a>
              </li>
            </ul>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <a href={"/"}>
                  <img
                    alt="Hyundai"
                    height="65"
                    loading="lazy"
                    src="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/016/resized/hyundai.png"
                  />
                  <h5 className="nomargin">Hyundai</h5>
                </a>
              </li>
            </ul>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <a href={"/"}>
                  <img
                    alt="Changan"
                    height="65"
                    loading="lazy"
                    src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/068/resized/Changan.png"
                  />
                  <h5 className="nomargin">Changan</h5>
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewCarByMake;
