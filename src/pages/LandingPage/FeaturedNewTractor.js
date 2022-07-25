import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import NewProductsCarousel from './NewProductsCarousel';
import { productApis } from "../../API/ProductApis";

export default function FeaturedNewTractor({ title, link }) {

  const [products, setProducts] = useState([]);
  const [upcomingProducts, setUpcomingProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [key, setKey] = useState('Popular');

  useEffect(()=>{
    handleGetNewProducts();
    handleGetUpcomingProducts();
    handleGetPopularProducts();
  },[])

  const handleGetNewProducts = async () => {
    const result = await productApis.getNewProducts('newly_launched', true);
    if (result.error === false) {
      setProducts(result.data && result.data.data);
    }
  };
  const handleGetUpcomingProducts = async () => {
    const result = await productApis.getUpcomingProducts('upcoming', true);
    if (result.error === false) {
      setUpcomingProducts(result.data && result.data.data);
    }
  };
  const handleGetPopularProducts = async () => {
    const result = await productApis.getPopularProducts('popular', true);
    if (result.error === false) {
      setPopularProducts(result.data && result.data.data);
    }
  };


  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>{title}</h2>
        <a className="text-info text-capitalize">
          {link}
        </a>
      </div>
      {/* Tab Demo Three */}
      <Col lg={12}>
        <div className="mb-4">
          <div className="">
            <div className="tabs-style-three">
              <Tabs
                defaultActiveKey="Popular"
                id="controlled-tab-example"
                onSelect={(e) => {setKey(e)}}
                activeKey={key}
              >
                <Tab eventKey="Popular" title="Popular">
                  <NewProductsCarousel products={popularProducts} />
                </Tab>
                <Tab eventKey="Upcoming" title="Upcoming">
                  <NewProductsCarousel products={upcomingProducts} />
                </Tab>

                <Tab eventKey="NewlyLaunched" title="Newly Launched">
                  <NewProductsCarousel products={products} />
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
