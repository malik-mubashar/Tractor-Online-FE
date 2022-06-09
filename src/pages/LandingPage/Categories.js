import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Tabs, Tab, Image } from "react-bootstrap";
import ThousandCC from "../../assets/img/1000cc.svg";
import ThirteenHundredCC from "../../assets/img/1300cc.svg";
import SportsCar from "../../assets/img/sports-car.svg";

export default function Categories() {
  const [index, setIndex] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [city, setCity] = useState([
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Peshawar",
    "Faisalabad",
    "Multan",
    "Gujranwala",
    "Sialkot",
    "Sargodha",
    "Abbottabad",
    "Bahawalpur",
    "Hyderabad",
    "Gujrat",
    "Sahiwal",
    "Attock",
    "Okara",
    "Sheikhupura",
  ]);

  return (
    <div>
      <h6>Browse Used Tractor</h6>
      {/* Tab Demo Three */}
      <Col lg={12}>
        <div className="mb-4">
          <div className="">
            <div className="tabs-style-three">
              <Tabs defaultActiveKey="Category" id="uncontrolled-tab-example">
                <Tab eventKey="Category" title="Category">
                  <Carousel>
                    <Carousel.Item>
                      <ul className="browse-listing row">
                        {index.map((option) => (
                          <li className="col-4 col-lg-2 mt-4" key={option}>
                            <a
                              href="#"
                              title="1000cc cars for sale in Pakistan"
                            >
                              <Image src={ThousandCC} alt="Profile Image" />
                              1000cc cars
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing row">
                        {index.map((option) => (
                          <li className="col-4 col-lg-2 mt-4" key={option}>
                            <a
                              href="#"
                              title="1000cc cars for sale in Pakistan"
                            >
                              <Image
                                src={ThirteenHundredCC}
                                alt="Profile Image"
                              />
                              1300cc cars
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing row">
                        {index.map((option) => (
                          <li className="col-4 col-lg-2 mt-4" key={option}>
                            <a
                              href="#"
                              title="1000cc cars for sale in Pakistan"
                            >
                              <Image src={SportsCar} alt="Profile Image" />
                              Sports Cars
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                  </Carousel>
                </Tab>

                <Tab eventKey="City" title="City">
                  <Carousel>
                    <Carousel.Item>
                      <ul className="browse-listing row">
                        {city.map((option) => (
                          <li
                            className="col-4 col-lg-2 p-3 text-center"
                            key={option}
                          >
                            <a className="text-dark" href="#">
                              {option}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing row">
                        {city.map((option) => (
                          <li
                            className="col-4 col-lg-2 p-3 text-center"
                            key={option}
                          >
                            <a className="text-dark" href="#">
                              {option}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing row">
                        {city.map((option) => (
                          <li
                            className="col-4 col-lg-2 p-3 text-center"
                            key={option}
                          >
                            <a className="text-dark" href="#">
                              {option}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                  </Carousel>
                </Tab>

                <Tab eventKey="Make" title="Make">
                  <Carousel>
                    <Carousel.Item>
                      <ul className="browse-listing row">
                        {index.map((option) => (
                          <li className="col-4 col-lg-2 mt-4" key={option}>
                            <a href="#" title="Toyota for sale in Pakistan">
                              <img
                                alt="Toyota"
                                src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/042/resized/Tyota.png"
                              />
                              Toyota
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing row">
                        {index.map((option) => (
                          <li className="col-4 col-lg-2 mt-4" key={option}>
                            <a href="#" title="Toyota for sale in Pakistan">
                              <img
                                alt="Toyota"
                                src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/021/resized/KIA.png"
                              />
                              KIA
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing row">
                        {index.map((option) => (
                          <li className="col-4 col-lg-2 mt-4" key={option}>
                            <a href="#" title="Toyota for sale in Pakistan">
                              <img
                                alt="Toyota"
                                src="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/041/resized/Suzuki.png"
                              />
                              Suzuki
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                  </Carousel>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </Col>
      {/* End Tab Demo Three */}
    </div>
  );
}
