import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Tabs, Tab, Image } from "react-bootstrap";
import ThousandCC from "../../assets/img/1000cc.svg";
import ThirteenHundredCC from "../../assets/img/1300cc.svg";
import SportsCar from "../../assets/img/sports-car.svg";
import { useHistory } from "react-router-dom";

export default function Categories({ brands }) {
  let history = useHistory();
  const [index, setIndex] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [cities, setCities] = useState([
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
  ]);
  const [cities2, setCities2] = useState([
    "Hyderabad",
    "Mardan",
    "Gujrat",
    "Quetta",
    "Wah cantt",
    "Rahim Yar Khan",
    "Sahiwal",
  ]);

	// var temparr;
	// useEffect(() => {
	// 	debugger;
	// 	var length = brands.length();
	// 	length =parseInt( length / 4)
		
	// 	for (var i = 0; i < length; i++){
	// 		temparr.push(i)
	// 	}
	// 	// for(length)
	// }, [brands])
	
  // const CarouselItem = (item) => {
  // 	return (

  // )
  // }
  return (
    <div>
      <h2 className="text-center">Examine Used Tractors</h2>
      {/* Tab Demo Three */}
      <Col lg={12}>
        <div className="mb-4">
          <div className="">
            <div className="tabs-style-three">
              <Tabs defaultActiveKey="Make" id="uncontrolled-tab-example">
                <Tab eventKey="Make" title="Make">
                  <Carousel>
                    {brands &&
                      brands.map((item) => (
                        <Carousel.Item>
                          <ul className="browse-listing row p-0">
                            {brands.map((item2) => (
                              <>
                                <li
                                  className="col-4 col-lg-2 mt-4"
                                  key={item2.id}
                                >
                                  <a
                                    onClick={() => history.push("/")}
                                    title="Toyota for sale in Pakistan"
                                  >
                                    <img
                                      alt="Toyota"
                                      src={item2.active_image_path}
                                    />
                                    {item2.title}
                                  </a>
                                </li>
                              </>
                            ))}
                          </ul>
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </Tab>

                <Tab eventKey="City" title="City">
                  <Carousel>
                    <Carousel.Item>
                      <ul className="browse-listing row p-0">
                        {cities.map((option) => (
                          <li
                            className="col-4 col-lg-2 p-3 text-center"
                            key={option}
                          >
                            <a
                              className="text-dark"
                              onClick={() => history.push("/")}
                            >
                              {option}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing row p-0">
                        {cities2.map((option) => (
                          <li
                            className="col-4 col-lg-2 p-3 text-center"
                            key={option}
                          >
                            <a
                              className="text-dark"
                              onClick={() => history.push("/")}
                            >
                              {option}
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
