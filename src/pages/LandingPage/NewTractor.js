import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewTractor = () => {
  const [index2, setIndex2] = useState([1, 2, 3]);

  return (
    <>
      <div className="container-lg mt-5 py-4">
        <h2 className="text-center">Make a New Tractor</h2>
        {index2.map((option) => (
          <div className="row" key={option}>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <Link to="/">
                  <img
                    alt="Mahindra"
                    height="65"
                    loading="lazy"
                    src="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/041/resized/Suzuki.png"
                  />
                  <h5 className="nomargin">Mahindra</h5>
                </Link>
              </li>
            </ul>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <Link to="/">
                  <img
                    alt="John Deere"
                    height="65"
                    loading="lazy"
                    src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/042/resized/Tyota.png"
                  />
                  <h5 className="nomargin">John Deere</h5>
                </Link>
              </li>
            </ul>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <Link to="/">
                  <img
                    alt="Massey Ferguson "
                    height="65"
                    loading="lazy"
                    src="https://cache2.pakwheels.com/system/car_manufacturers/manufacturers/000/000/014/resized/Honda.png"
                  />
                  <h5 className="nomargin">Massey Ferguson </h5>
                </Link>
              </li>
            </ul>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <Link to="/">
                  <img
                    alt=" Case IH"
                    height="65"
                    loading="lazy"
                    src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/021/resized/KIA.png"
                  />
                  <h5 className="nomargin"> Case IH</h5>
                </Link>
              </li>
            </ul>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <Link to="/">
                  <img
                    alt="Sonalika International "
                    height="65"
                    loading="lazy"
                    src="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/016/resized/hyundai.png"
                  />
                  <h5 className="nomargin">Sonalika International </h5>
                </Link>
              </li>
            </ul>
            <ul className="make-list col-sm-2 list-unstyled new-car-list">
              <li className="heading text-center">
                <Link to="/">
                  <img
                    alt=" Kubota "
                    height="65"
                    loading="lazy"
                    src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/068/resized/Changan.png"
                  />
                  <h5 className="nomargin"> Kubota </h5>
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewTractor;
