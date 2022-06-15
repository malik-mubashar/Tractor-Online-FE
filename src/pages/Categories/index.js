import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tab from "react-bootstrap/Tab";
import * as Icon from "react-feather";
import { Nav, Row, Col, Button } from "react-bootstrap";
import MainCategory from "./categoryBody";
import SideMenue from "./SideMenue";
import FeaturedProducts from "../LandingPage/FeaturedProducts";

const CategoriesNavBar = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="d-flex">
        <div className="relative bg-white col-2 border-radius p-0">
          <h3 className="category-title p-2 ">
            <Icon.List className="icon" /> Categories
          </h3>

          <SideMenue />
        </div>
        <div className="col-9 ">
          <div className="col-12 mb-4">
            <MainCategory src="https://www.nicepng.com/png/full/78-781164_tractor-png-all-tractor-hd-png.png" />
          </div>
          <div className="col-12 d-flex category-hot-product  border-radius">
            <div className="col-4">
              <h3 className="mt-4 text-white">More Exclusive Deals</h3>
              <h6 className="text-white mb-4">
              Combine with your coupon to save even more!
              </h6>
              <Button
                variant="success"
                size="lg"
                className="mr-2 rmb-5 font-weight-bold"
              >
                Claim PKR 823
                <Icon.ChevronRight className="icon ml-4 font-weight-bold" />
              </Button>
            </div>
            <div className="col-8 hot-slider">
              <FeaturedProducts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoriesNavBar;
