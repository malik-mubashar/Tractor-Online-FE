import React, { useState, useContext, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col, Breadcrumb, Tabs, Tab, Nav, Image } from "react-bootstrap";
import ThousandCC from '../../assets/img/1000cc.svg';
import ThirteenHundredCC from '../../assets/img/1300cc.svg'
import SportsCar from '../../assets/img/sports-car.svg'

export default function Categories({title,link}) {
  const [index, setIndex] = useState([1,2,3,4]);
  const [city, setCity] = useState([
    'Lahore',
    'Karachi',
    'Islamabad',
    'Rawalpindi',
    'Peshawar',
    'Faisalabad',
    'Multan',
    'Gujranwala',
    'Sialkot',
    'Sargodha',
    'Abbottabad',
    'Bahawalpur',
    'Hyderabad',
    'Gujrat',
    'Sahiwal',
    'Attock',
    'Okara',
    'Sheikhupura'
  ])

    return (
      <div>
        <div className="d-flex justify-content-between">
      <h5>{title}</h5>
      <a className="text-info text-capitalize">{link}</a>
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
                              <ul className="browse-listing row">
                                {index.map((option) => (
                                  <li className="col-sm-2 m-4" key={option}>
                                    <div className="featured-card bg-white" key={option}>
                                    <img className="card-img" src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg" />
                                    <h4 className="mb-0 pl-2">Name</h4>
                                    <p className="mb-0 pl-2 text-success">PKR 100,000</p>
                                    <p className="pl-2">Lahore</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                          </Carousel.Item>
                          <Carousel.Item>
                              <ul className="browse-listing row">
                                {index.map((option) => (
                                  <li className="col-sm-2 m-4" key={option}>
                                    <div className="featured-card bg-white" key={option}>
                                    <img className="card-img" src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg" />
                                    <h4 className="mb-0 pl-2">Name</h4>
                                    <p className="mb-0 pl-2 text-success">PKR 100,000</p>
                                    <p className="pl-2">Lahore</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                          </Carousel.Item>
                          <Carousel.Item>
                              <ul className="browse-listing row">
                                {index.map((option) => (
                                  <li className="col-sm-2 m-4" key={option}>
                                    <div className="featured-card bg-white" key={option}>
                                    <img className="card-img" src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg" />
                                    <h4 className="mb-0 pl-2">Name</h4>
                                    <p className="mb-0 pl-2 text-success">PKR 100,000</p>
                                    <p className="pl-2">Lahore</p>
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
                              <ul className="browse-listing row">
                                {index.map((option) => (
                                  <li className="col-sm-2 m-4" key={option}>
                                    <div className="featured-card bg-white" key={option}>
                                    <img className="card-img" src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg" />
                                    <h4 className="mb-0 pl-2">Name</h4>
                                    <p className="mb-0 pl-2 text-success">PKR 100,000</p>
                                    <p className="pl-2">Lahore</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                          </Carousel.Item>
                          <Carousel.Item>
                              <ul className="browse-listing row">
                                {index.map((option) => (
                                  <li className="col-sm-2 m-4" key={option}>
                                    <div className="featured-card bg-white" key={option}>
                                    <img className="card-img" src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg" />
                                    <h4 className="mb-0 pl-2">Name</h4>
                                    <p className="mb-0 pl-2 text-success">PKR 100,000</p>
                                    <p className="pl-2">Lahore</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                          </Carousel.Item>
                          <Carousel.Item>
                              <ul className="browse-listing row">
                                {index.map((option) => (
                                  <li className="col-sm-2 m-4" key={option}>
                                    <div className="featured-card bg-white" key={option}>
                                    <img className="card-img" src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg" />
                                    <h4 className="mb-0 pl-2">Name</h4>
                                    <p className="mb-0 pl-2 text-success">PKR 100,000</p>
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
                              <ul className="browse-listing row">
                                {index.map((option) => (
                                  <li className="col-sm-2 m-4" key={option}>
                                    <div className="featured-card bg-white" key={option}>
                                    <img className="card-img" src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg" />
                                    <h4 className="mb-0 pl-2">Name</h4>
                                    <p className="mb-0 pl-2 text-success">PKR 100,000</p>
                                    <p className="pl-2">Lahore</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                          </Carousel.Item>
                          <Carousel.Item>
                              <ul className="browse-listing row">
                                {index.map((option) => (
                                  <li className="col-sm-2 m-4" key={option}>
                                    <div className="featured-card bg-white" key={option}>
                                    <img className="card-img" src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg" />
                                    <h4 className="mb-0 pl-2">Name</h4>
                                    <p className="mb-0 pl-2 text-success">PKR 100,000</p>
                                    <p className="pl-2">Lahore</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                          </Carousel.Item>
                          <Carousel.Item>
                              <ul className="browse-listing row">
                                {index.map((option) => (
                                  <li className="col-sm-2 m-4" key={option}>
                                    <div className="featured-card bg-white" key={option}>
                                    <img className="card-img" src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg" />
                                    <h4 className="mb-0 pl-2">Name</h4>
                                    <p className="mb-0 pl-2 text-success">PKR 100,000</p>
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
