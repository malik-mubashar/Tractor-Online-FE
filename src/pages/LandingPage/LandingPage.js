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
import toast from "react-hot-toast";
import { brandApis } from "../../API/BrandsApis";
import FeaturedTractor from "./FeaturedTractor";

const LandingPage = () => {
  const [cities, setCities] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brandsForCategories, setBrandsForCategories] = useState([]);

  useEffect(() => {
    getAllCity();
    getBrands(1, "", 10000000);
  }, []);

  const getBrands = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await brandApis.getBrands(page, mainSearch, noOfRec);

      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setBrands(result.data.data);
        let tempArr = [];
        const chunkSize = 12;
        for (let i = 0; i < result.data.data.length; i += chunkSize) {
          const chunk = result.data.data.slice(i, i + chunkSize);
          tempArr.push(chunk);
        }
        setBrandsForCategories(tempArr);
      } else {
        toast.dismiss(loadingToastId);
        console.error(result.data);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };

  const getAllCity = async () => {
    const result = await city.getAllCity();
    const tempArray = [];
    result &&
      result.data &&
      result.data.data.map((item) =>
        tempArray.push({ ...item, label: item.title, value: item.title })
      );
    setCities(tempArray);
    console.log("city", tempArray);
  };
  console.log("cities", cities);
  return (
    <>
      {!isMobile && (
        <>
          {" "}
          <DeskTopBanner cities={cities} />
          <div className="d-flex p-2 mt-2">
            <div className="col-12 ">
              <CategoriesNavBar />
            </div>
          </div>
        </>
      )}
      {!isMobile && <TractorSaleAd />}
      <div className="overflow-x-hidden">
        <div className={`container-lg py-4 mt-2 ${isMobile ? "bg-white" : ""}`}>
          <Categories
            brandsForCategories={brandsForCategories}
            cities={cities}
            brands={brands}
          />
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
            <FeaturedTractor
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
          <NewTractor brands={brands} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
