import React, { useEffect, useState } from "react";
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
import { city } from "../../API/City/CityApis";

const LandingPage = () => {
  const [cities, setCities] = useState([]);

  useEffect(()=>{
    getAllCity()
  },[])

  const getAllCity = async () => {
    debugger
    const result = await city.getAllCity();
    const tempArray = [];
    result &&
      result.data &&
      result.data.data.map((item) =>
        tempArray.push({ ...item, label: item.title, value: item.title })
      );
    setCities(tempArray);
    console.log("city",tempArray)
  };

  return (
    <>
      {!isMobile &&<> <DeskTopBanner
      cities={cities}
      />
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
