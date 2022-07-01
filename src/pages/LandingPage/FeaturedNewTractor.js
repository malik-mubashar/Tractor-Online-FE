import React, { useState, useContext, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Tabs, Tab } from "react-bootstrap";
import { productApis } from "../../API/ProductApis";

export default function Categories({ title, link }) {
  const [index, setIndex] = useState([1, 2, 3, 4]);
  const [products, setProducts] = useState([]);
  const [upcomingProducts, setUpcomingProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    handleGetNewProducts();
    handleGetUpcomingProducts();
    handleGetPopularProducts();
  }, []);
  const handleGetNewProducts = async () => {
    const result = await productApis.getNewProducts('newly_launched');
    if (result.error === false) {
      setProducts(result.data && result.data.data);
      console.log("products", result.data && result.data.data);
    }
  };
  const handleGetUpcomingProducts = async () => {
    const result = await productApis.getUpcomingProducts('upcoming');
    if (result.error === false) {
      setUpcomingProducts(result.data && result.data.data);
      console.log("upcomingproducts", result.data && result.data.data);
    }
  };
  const handleGetPopularProducts = async () => {
    const result = await productApis.getPopularProducts('popular');
    if (result.error === false) {
      setPopularProducts(result.data && result.data.data);
      console.log("popularproducts", result.data && result.data.data);
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
                        {popularProducts&&
                        popularProducts.map((item,i) => (
                          <li className=" col-md-3" key={i}>
                            <div
                              className="featured-card bg-white"
                              key={i}
                            >
                              <img
                                className="card-img"
                                src={item.cover_photo_path}
                                alt=""
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
                        {popularProducts&&
                        popularProducts.map((item,i) => (
                          <li className=" col-md-3" key={i}>
                            <div
                              className="featured-card bg-white"
                              key={i}
                            >
                              <img
                                className="card-img"
                                src={item.cover_photo_path}
                                alt=""
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
                        {popularProducts&&
                        popularProducts.map((item,i) => (
                          <li className=" col-md-3" key={i}>
                            <div
                              className="featured-card bg-white"
                              key={i}
                            >
                              <img
                                className="card-img"
                                src={item.cover_photo_path}
                                alt=""
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
                      {upcomingProducts&&
                        upcomingProducts.map((item,i) => (
                          <li className=" col-md-3" key={i}>
                            <div
                              className="featured-card bg-white"
                              key={i}
                            >
                              <img
                                className="card-img"
                                src={item.cover_photo_path}
                                alt=""
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
                      {upcomingProducts&&
                        upcomingProducts.map((item,i) => (
                          <li className=" col-md-3" key={i}>
                            <div
                              className="featured-card bg-white"
                              key={i}
                            >
                              <img
                                className="card-img"
                                src={item.cover_photo_path}
                                alt=""
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
                      {upcomingProducts&&
                        upcomingProducts.map((item,i) => (
                          <li className=" col-md-3" key={i}>
                            <div
                              className="featured-card bg-white"
                              key={i}
                            >
                              <img
                                className="card-img"
                                src={item.cover_photo_path}
                                alt=""
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

                <Tab eventKey="Newly Launched" title="Newly Launched">
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
                                src={item.cover_photo_path}
                                alt=""
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
                                src={item.cover_photo_path}
                                alt=""
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
                                src={item.cover_photo_path}
                                alt=""
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
              </Tabs>
            </div>
          </div>
        </div>
      </Col>
      {/* End Tab Demo Three */}
    </div>
  );
}
