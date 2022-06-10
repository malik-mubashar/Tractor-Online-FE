import React from "react";
import SearchAble from "./searchable";
import Tractor from "../../assets/img/tractor.png";
import Topbar from "./Topbar";

import { Button, Image } from "react-bootstrap";
const DeskTopBanner = () => {
  return (
    <>
      <Topbar />
      <div className="dashboard-carousel">
        <div className="search-classified-text text-center generic-white">
          <h1 className="text-white">Find Used Tractors in Pakistan</h1>
          <p className="text-white">
            With thousands of tractors, we have just the right one for you
          </p>
        </div>
        <SearchAble />
        <Button className="mt-2 mr-2 d-flex justify-content-center m-auto bg-transparent border border-white">
          {"Advanced Filter >>"}
        </Button>
      </div>
      <div className="bg-white">
        <div className="container-lg py-3">
          <div className="home-widgets row">
            <div className="home-widgets-title w-full-lg">
              <h3>Sell Your Tractor on TractorOnline and Get the Best Price</h3>
            </div>
            <div className="col-lg-6 col-12 mt-4 line or">
              <h2>Post your Ad on TractorOnline</h2>
              <ul>
                <li>
                  <i className="fa fa-tick"></i>Post your Ad for Free in 3 Easy
                  Steps
                </li>
                <li>
                  <i className="fa fa-tick"></i>Get Genuine offers from Verified
                  Buyers
                </li>
                <li>
                  <i className="fa fa-tick"></i>Sell your car Fast at the Best
                  Price
                </li>
              </ul>
              <a href={"/"} className="btn btn-danger btn-lg text-white">
                Post Your Add
              </a>
            </div>
            <div className="col-lg-6 col-12 mt-4">
              <h2>Try TractorOnline Sell It For Me</h2>
              <ul>
                <li>
                  <i className="fa fa-tick"></i>Dedicated Sales Expert to Sell
                  your Tractor
                </li>
                <li>
                  <i className="fa fa-tick"></i>We Bargain for you and share the
                  Best Offer
                </li>
                <li>
                  <i className="fa fa-tick"></i>We ensure Safe &amp; Secure
                  Transaction
                </li>
              </ul>
              <a href={"/"} className="btn btn-info btn-lg text-white">
                Register Your Tractor
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-3">
          <Image
            src={Tractor}
            border="0"
            width="75%"
            height="50%"
            alt=""
            className="img_ad"
          />
        </div>
      </div>
    </>
  );
};

export default DeskTopBanner;
