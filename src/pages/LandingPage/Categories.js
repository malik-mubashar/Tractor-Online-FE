import React, { useEffect, useState, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Tabs, Tab, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { city } from "../../API/City/CityApis";

export default function Categories({ brands, brandsForCategories }) {
  let history = useHistory();
  const [cities, setCities] = useState("");
  const [citiesForCarousel, setCitiesForCarousel] = useState();
  useEffect(() => {
    handleGetAllCities();
  }, []);

  const handleGetAllCities = async () => {
    const result = await city.getPopularCity("popular");
    if (result.error === false) {
      setCities(result.data && result.data.data);
      let tempArr = [];
      const chunkSize = 12;
       
      for (let i = 0; i < result.data.data.length; i += chunkSize) {
        const chunk = result.data.data.slice(i, i + chunkSize);
        tempArr.push(chunk);
      }
      setCitiesForCarousel(tempArr);
    }
  };

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
                    {brandsForCategories &&
                      brandsForCategories.map((item) => (
                        <Carousel.Item>
                          <ul className="browse-listing row p-0">
                            {item.map((item2, i) => (
                              <li key={i} className="col-sm-12 col-md-6 col-lg-2 mt-4">
                                <span
                                  onClick={() => history.push(`/products/search?brand=${item2.id}`)}
                                  title="Toyota for sale in Pakistan"
                                >
                                  <img
                                    alt="Toyota"
                                    height="150px"
                                    width="150px"
                                    src={item2.active_image_path}
                                  />
                                  {item2.title}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </Tab>

                <Tab eventKey="City" title="City">
                  <Carousel>
                    {citiesForCarousel &&
                      citiesForCarousel.map((item) => (
                        <Carousel.Item>
                          <ul className="browse-listing row p-0">
                            {item.map((item2, i) => (
                              <li
                                key={i}
                                className="col-4 col-lg-2 p-3 text-center"
                              >
                                <span
                                  className="text-dark"
                                  onClick={() => {
                                    history.push(`/products/search?city=${item2.title}`);
                                  }}
                                >
                                  {item2.title}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </Carousel.Item>
                      ))}
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
