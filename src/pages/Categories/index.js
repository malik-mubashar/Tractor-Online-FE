import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tab from "react-bootstrap/Tab";
import * as Icon from "react-feather";
import { Button } from "react-bootstrap";
import MainCategory from "./categoryBody";
import SideMenue from "./SideMenue";
import FeaturedProducts from "../LandingPage/FeaturedProducts";

const CategoriesNavBar = () => {

  return (
    <>
      <div className=" row category">
        <div className=" relative bg-white category-section border-radius p-0 col-lg-2">
          <h3 className="category-title border-bottom p-2 m-1 ">
            <Icon.List className="icon" /> Categories
          </h3>

          <SideMenue />
        </div>
        <div className="col-lg-9 col-12 p-4 mt-4">
          <div className="category-menu">
            <div className="category-title  p-2">
              <Icon.List className="icon" /> Categories
              <div className="category-drop-down">
                 <SideMenue />
              </div>
            </div>
          </div>
          <div className="col-12  mb-4 category-section-slider p-0 border-radius">
            <MainCategory src="https://static.vecteezy.com/system/resources/previews/003/417/794/non_2x/farming-landing-page-web-banner-background-vector.jpg" />
          </div>
          <div className="col-12 category-hot-product border-radius">
            <div className="col-lg-4 text-center align-middle">
              <div style={{paddingTop: "50px"}}>
                <h4 className="mt-5 text-white">More Exclusive Deals</h4>
                <span className="text-white mb-2">
                  Combine with your coupon to save even more!
                </span>
                {/*<Button
                  variant="success"
                  size="lg"
                  className="mr-2 rmb-5 font-weight-bold"
                >
                  Claim PKR 823
                  <Icon.ChevronRight className="icon ml-4 font-weight-bold" />
                </Button>*/}
              </div>
            </div>
            <div className="col-lg-8 hot-slider">
              <FeaturedProducts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoriesNavBar;
