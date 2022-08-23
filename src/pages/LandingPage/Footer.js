import React, { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { prodApi } from "../../API/ProdCategoriesApis";
import { city } from "../../API/City/CityApis";
import { brandApis } from "../../API/BrandsApis";
import { RootContext } from "../../context/RootContext";
import LoginModel from "../LoginModel";

export default function Footer() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.FeaturedProducts
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [productCategories, setProductCategories] = useState();
  const [cities, setCities] = useState("");
  const [brandsForCategories, setBrandsForCategories] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  let history = useHistory();
  const { websiteName, currentUser } = useContext(RootContext);
  useEffect(() => {
    handleGetAllCategories();
    handleGetAllCities();
    getBrands(1, "", 10000000);
  }, []);
  const handleGetAllCategories = async () => {
    const result = await prodApi.getAllProductCategories();
    setProductCategories(result.data && result.data.data);
  };
  const handleGetAllCities = async () => {
    const result = await city.getPopularCity("popular");
    setCities(result.data && result.data.data);
  };
  const getBrands = async (page, mainSearch, noOfRec) => {
    const result = await brandApis.getBrands(page, mainSearch, noOfRec);
    setBrandsForCategories(result.data && result.data.data);
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-3">
            <div
              className="footer-links list-unstyled text-left"
            >
              <div className="mt-1">
                <h5 className="text-white">Products By Brands</h5>
              </div>
              {brandsForCategories &&
                brandsForCategories.map((item, i) => {
                  return (
                    <div className="mt-1" key={i}>
                        {i < 5 ? (
                          <Link
                            to={`/products/search?brand=${item.id}`}
                            className="footer-link"
                          >
                            {item.title}
                          </Link>
                        ) : null}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-2">
            <ul
              className="footer-links list-unstyled text-left"
              id="footer-City"
            >
              <li className="mt-1">
                <h5 className="text-white">Products By City</h5>
              </li>
              {cities &&
                cities.map((item, i) => {
                  return (
                    <li className="mt-1">
                      <div key={i}>
                        {i < 5 ? (
                          <Link
                            to={`/products/search?city=${item.title}`}
                            className="footer-link"
                          >
                            {item.title}
                          </Link>
                        ) : null}
                        {/* <span
                          onClick={() => {
                            history.push(
                              `/products/search?city=${item.title}`
                            );
                          }}
                          className="footer-link"
                        >
                          {item.title}
                        </span> */}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-3">
            <ul className="footer-links list-unstyled text-left">
              <li className="mt-1">
                <h5 className="text-white">Explore Products</h5>
              </li>
              {productCategories &&
                productCategories.map((item, i) => {
                  return (
                    <li className="mt-1">
                      <div key={i}>
                        {i < 5 ? (
                          <Link to={item.link} className="footer-link">
                            {item.title}
                          </Link>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-2">
            <ul className="footer-links list-unstyled text-left">
              <li className="mt-1">
                <h5 className="text-white">{websiteName}.com</h5>
              </li>
              <li className="mt-1">
                <Link to="/browse-us" className="footer-link">
                  About {websiteName}.com
                </Link>
              </li>
              <li className="mt-1">
                <Link to="/products/search" className="footer-link">
                  Our Products
                </Link>
              </li>
              <li className="mt-1">
                {currentUser ? (
                  <Link to="/products/sell" className="footer-link">
                    Advertise With Us
                  </Link>
                ) : (
                  <>
                    <Link
                      onClick={() => setModalShow(true)}
                      className="footer-link"
                    >
                      Advertise With Us
                    </Link>
                    <LoginModel
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      redirect="/products/sell"
                    />
                  </>
                )}
              </li>
              <li className="mt-1">
                <Link to="/contact-us" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="col-md-2 mr-auto">
            <div className="row">
              <div className="col-md-12">
                <ul className="nomargin footer-links list-unstyled">
                  <li className="mt-1">
                    <h5 className="text-white">Sell On {websiteName}</h5>
                  </li>
                  <li className="mt-1">
                    <a href="/" className="footer-link">
                      Sell Your Tractors
                    </a>
                  </li>
                  <li className="mt-1">
                    <a href="/" className="footer-link">
                      Sell Accessory
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <hr className="dark" />

      <div className="copyright footer-links mt30">
        Copyright © 2003 - 2022 {websiteName} (Pvt) Ltd. - All Rights
        Reserved.
        <a href="/terms" rel="nofollow" title="Terms of Service">
          Terms of Service
        </a>
        &nbsp;|&nbsp;
        <a href="/privacy-policy" rel="nofollow" title="Privacy Policy">
          Privacy Policy
        </a>
      </div>

      <p className="copyright mt5">
        Reproduction of material from any {websiteName}.com pages without
        permission is strictly prohibited.
      </p>
    </div>
  );
}
