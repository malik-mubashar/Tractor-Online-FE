import React, { useState, useContext, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Tabs, Tab } from "react-bootstrap";
import { productApis } from "../../API/ProductApis";

export default function Categories({ title, link }) {
  const [index, setIndex] = useState([1, 2, 3, 4]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleGetAllProducts();
  }, []);
  const handleGetAllProducts = async () => {
    const result = await productApis.getAllProducts();
    if (result.error === false) {
      setProducts(result.data && result.data.data);
      console.log("products", result.data && result.data.data);
    }
  };
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
    "Sheikhupura"
  ]);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>{title}</h2>
        <a href="/" className="text-info text-capitalize">
          {link}
        </a>
      </div>
      {/* Tab Demo Three */}
      <Col lg={12}>
        <div className="mb-4">
          <div className="">
            <div className="tabs-style-three">
              <Tabs defaultActiveKey="Popular" id="uncontrolled-tab-example">
                <Tab eventKey="Popular" title="Popular">
                  <Carousel>
                    <Carousel.Item>
                      <ul className="browse-listing  row p-0">
                        {products&&
                        products.map((item,i) => (
                          <li className=" col-md-3" key={i}>
                            <div
                              className="featured-card bg-white"
                              key={i}
                            >
                              <img
                                className="card-img"
                                src={item.active_images_path[0]}
                              />
                              <h4 className="mb-0 pl-2">{item.title}</h4>
                              <p className="mb-0 pl-2 text-success">
                                {item.price}
                              </p>
                              <p className="pl-2">{item.location}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing  row p-0">
                        {products&&
                        products.map((item,i) => (
                          <li className=" col-md-3" key={i}>
                            <div
                              className="featured-card bg-white"
                              key={i}
                            >
                              <img
                                className="card-img"
                                src={item.active_images_path[0]}
                              />
                              <h4 className="mb-0 pl-2">{item.title}</h4>
                              <p className="mb-0 pl-2 text-success">
                                {item.price}
                              </p>
                              <p className="pl-2">{item.location}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing  row p-0">
                        {products&&
                        products.map((item,i) => (
                          <li className=" col-md-3" key={i}>
                            <div
                              className="featured-card bg-white"
                              key={i}
                            >
                              <img
                                className="card-img"
                                src={item.active_images_path[0]}
                              />
                              <h4 className="mb-0 pl-2">{item.title}</h4>
                              <p className="mb-0 pl-2 text-success">
                                {item.price}
                              </p>
                              <p className="pl-2">{item.location}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                  </Carousel>
                </Tab>

                <Tab eventKey="Upcoming" title="Upcoming">
                  <Carousel>
                    <Carousel.Item>
                      <ul className="browse-listing  row p-0">
                        {index.map((option) => (
                          <li className=" col-md-3" key={option}>
                            <div
                              className="featured-card bg-white"
                              key={option}
                            >
                              <img
                                className="card-img"
                                src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg"
                              />
                              <h4 className="mb-0 pl-2">Claas</h4>
                              <p className="mb-0 pl-2 text-success">
                                PKR 100,000
                              </p>
                              <p className="pl-2">Lahore</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing  row p-0">
                        {index.map((option) => (
                          <li className=" col-md-3" key={option}>
                            <div
                              className="featured-card bg-white"
                              key={option}
                            >
                              <img
                                className="card-img"
                                src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg"
                              />
                              <h4 className="mb-0 pl-2">
                                Sonalika International
                              </h4>
                              <p className="mb-0 pl-2 text-success">
                                PKR 100,000
                              </p>
                              <p className="pl-2">Lahore</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing  row p-0">
                        {index.map((option) => (
                          <li className=" col-md-3" key={option}>
                            <div
                              className="featured-card bg-white"
                              key={option}
                            >
                              <img
                                className="card-img"
                                src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg"
                              />
                              <h4 className="mb-0 pl-2">Case IH</h4>
                              <p className="mb-0 pl-2 text-success">
                                PKR 100,000
                              </p>
                              <p className="pl-2">Lahore</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                  </Carousel>
                </Tab>

                <Tab eventKey="Newly Launched" title="Newly Launched">
                  <Carousel>
                    <Carousel.Item>
                      <ul className="browse-listing  row p-0">
                        {index.map((option) => (
                          <li className=" col-md-3" key={option}>
                            <div
                              className="featured-card bg-white"
                              key={option}
                            >
                              <img
                                className="card-img"
                                src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg"
                              />
                              <h4 className="mb-0 pl-2">Massey Ferguson </h4>
                              <p className="mb-0 pl-2 text-success">
                                PKR 100,000
                              </p>
                              <p className="pl-2">Lahore</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing  row p-0">
                        {index.map((option) => (
                          <li className=" col-md-3" key={option}>
                            <div
                              className="featured-card bg-white"
                              key={option}
                            >
                              <img
                                className="card-img"
                                src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg"
                              />
                              <h4 className="mb-0 pl-2">John Deere</h4>
                              <p className="mb-0 pl-2 text-success">
                                PKR 100,000
                              </p>
                              <p className="pl-2">Lahore</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Carousel.Item>
                    <Carousel.Item>
                      <ul className="browse-listing  row p-0">
                        {index.map((option) => (
                          <li className=" col-md-3" key={option}>
                            <div
                              className="featured-card bg-white"
                              key={option}
                            >
                              <img
                                className="card-img"
                                src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg"
                              />
                              <h4 className="mb-0 pl-2">Mahindra</h4>
                              <p className="mb-0 pl-2 text-success">
                                PKR 100,000
                              </p>
                              <p className="pl-2">Lahore</p>
                            </div>
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
