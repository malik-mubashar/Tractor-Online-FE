import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { prodApi } from "../../API/ProdCategoriesApis";
import { city } from "../../API/City/CityApis";
import { brandApis } from "../../API/BrandsApis";

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
  let history = useHistory();

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
  const getBrands =async (page, mainSearch, noOfRec) =>{
    const result = await brandApis.getBrands(page, mainSearch, noOfRec);
    setBrandsForCategories(result.data.data && result.data.data);
  };
  return (
    <div>
      <div className="footer">
        <div className="">
          <div className="row col-12">
            <div className="col-md-8 ml-auto">
              <div className="row">
                <div className="col-md-3">
                  <ul
                    className="nomargin footer-links list-unstyled"
                    id="footer-Make"
                  >
                    <li className="mt-1">
                      <h5 className="text-white">Tractors By Make</h5>
                    </li>
                    {brandsForCategories &&
                      brandsForCategories.map((item,i) => {
                    return(
                    <li className="mt-1">
                      <div key={i}>
                      <Nav.Link href={`/used-tractor/search?brand=${item.id}`} className="footer-link">
                      {item.title}
                      </Nav.Link>
                      </div>
                    </li>
                    );
                  })}

                    {/* <li className="mt-1">
                      <a href="/" className="footer-link">
                        IMT Tractors for Sale
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Millat Tractors for Sale
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Belarus Tractors for Sale
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Messy Ferguson Tractors for Sale
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        New Holland Tractors for Sale
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Orient Automotive Tractors for Sale
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul
                    className="nomargin footer-links list-unstyled"
                    id="footer-City"
                  >
                    <li className="mt-1">
                      <h5 className="text-white">Products By City</h5>
                    </li>
                    {cities &&
                      cities.map((item, i) => {
                        return(
                        <li className="mt-1">
                          <div key={i}>
                         <Nav.Link href={`/used-tractor/search?city=${item.title}`}
                        className="footer-link"
                      
                      >
                            {item.title}
                          </Nav.Link>
                          </div>
                        </li>
                        );
                      })}
                    {/* <li className="mt-1">
                      <span
                        className="footer-link"
                        onClick={() => {
                          history.push(
                            `/used-tractor/search?city=${item.title}`
                          );
                        }}
                      >
                        Tractors in Karachi
                      </span>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Islamabad
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Rawalpindi
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Peshawar
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Faisalabad
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Multan
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Gujranwala
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Tractors in Sialkot
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="col-md-3">
                  <ul className="nomargin footer-links list-unstyled">
                    <li className="mt-1">
                      <h5 className="text-white">Explore TractorOnline</h5>
                    </li>
                    {productCategories &&
                      productCategories.map((item, i) => {
                        return (
                          <li className="mt-1">
                            <div key={i}>
                              <Link to={item.link} className="footer-link">
                                {item.title}
                              </Link>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="col-md-2">
                  <ul className="nomargin footer-links list-unstyled">
                    <li className="mt-1">
                      <h5 className="text-white">TractorOnline.com</h5>
                    </li>
                    <li className="mt-1">
                      <a href="/browse-us" className="footer-link">
                        About TractorOnline.com
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Our Products
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Advertise With Us
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        How To Pay
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        FAQs
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Refunds &amp; Returns
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Careers
                      </a>
                    </li>
                    <li className="mt-1">
                      <a href="/" className="footer-link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 mr-auto">
              <div className="row">
                <div className="col-md-12">
                  <ul className="nomargin footer-links list-unstyled">
                    <li className="mt-1">
                      <h5 className="text-white">Sell On TractorOnline</h5>
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
            </div>
          </div>

          <hr className="dark" />

          <div className="copyright footer-links mt30">
            Copyright © 2003 - 2022 TractorOnline (Pvt) Ltd. - All Rights
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
            Reproduction of material from any TractorOnline.com pages without
            permission is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
