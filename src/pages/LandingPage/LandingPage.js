import React from "react";
import "../../components/Navigation/Navigation.css";
import ExploreProducts from "./ExploreProducts";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import NewTractor from "./NewTractor";
import FeaturedNewTractor from "./FeaturedNewTractor";
import { isMobile } from "react-device-detect";
import DeskTopBanner from "./DeskTopBanner";
import CategoriesNavBar from "../Categories/index";
import TractorSaleAd from "./TractorSale";

const LandingPage = () => {
  return (
    <>
      {!isMobile &&<> <DeskTopBanner />
      <div className="d-flex p-2 mt-2">
        <div className="col-12 ">
          <CategoriesNavBar />
        </div>
      </div></>}
      {!isMobile && <TractorSaleAd />}
      <div className="overflow-x-hidden">
        <div className={`container-lg py-4 mt-2 ${isMobile ? "bg-white" : ""}`}>
          <Categories />
        </div>
        <div className="bg-white">
          <div className="container-lg py-4">
            <ExploreProducts />
          </div>
        </div>

        <div className="container-lg py-4">
          <FeaturedProducts
            title="Managed By TractorOnline"
            link="View all TractorOnline-managed properties."
          />
        </div>
        <div className="bg-white">
          <div className="container-lg py-4">
            <FeaturedProducts
              title="Used Tractor For Sale Featured"
              link="See all of the featured used tractors."
            />
          </div>
        </div>

        <div className="container-lg py-4 mt-2">
          <FeaturedNewTractor
            title="New Tractors Featured"
            link="all tractors are available to view"
          />
        </div>
        <div className="container-lg py-4">
          <NewTractor />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
