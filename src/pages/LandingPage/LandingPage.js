import React, { useEffect, useState } from "react";
import "../../components/Navigation/Navigation.css";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import NewTractor from "./NewTractor";
import { isMobile } from "react-device-detect";
import DeskTopBanner from "./DeskTopBanner";
import CategoriesNavBar from "../Categories/index";
import TractorSaleAd from "./TractorSale";
import { city } from "../../API/City/CityApis";
import toast from "react-hot-toast";
import { brandApis } from "../../API/BrandsApis";
import { prodApi } from "../../API/ProdCategoriesApis";
// import ExploreProducts from "./ExploreProducts";

const LandingPage = () => {
  const [cities, setCities] = useState([]);
  const [brands, setBrands] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [brandsForCategories, setBrandsForCategories] = useState([]);

  useEffect(() => {
    getAllCity();
    getBrands(1, "", 10000000);
    handleGetAllCategories();
  }, []);
  const handleGetAllCategories = async () => {
    const result = await prodApi.getAllProductCategories(true);
    if (result.error === false) {
      setProductCategories(result.data && result.data.data);
    }
  };

  const getBrands = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await brandApis.getBrands(page, mainSearch, noOfRec);

      if (result.error === false && result.data.status === "success") {
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
	};
  return (
    <>
      {!isMobile && (
        <>
          {" "}
          <DeskTopBanner cities={cities} />
          {/* our main side bar on landing page (3rd section) */}
          <div className="d-flex p-2 mt-2">
            <div className="col-12 ">
              <CategoriesNavBar />
            </div>
          </div>
        </>
			)}

			{/* add on desktop (4th section)*/}
			{!isMobile && <TractorSaleAd />}
			
			{/* 5th section brands and city*/}
      <div className="overflow-x-hidden">
        <div className={`container-lg py-4 mt-2 ${isMobile ? "bg-white" : ""}`}>
          <Categories
            brandsForCategories={brandsForCategories}
            cities={cities}
            brands={brands}
          />
        </div>
        {/* <div className="bg-white">
          <div className="container-lg py-4">
            <ExploreProducts />
          </div>
        </div> */}

				{/* 6th section */}
        {productCategories &&
          productCategories.map((prodCategory, i) => {
            return (
              <>
                <div className={`${i % 2 === 0 ? "bg-white" : ""}`}>
                  <div className="container-lg py-4 ">
                    <FeaturedProducts
                      title={`Featured ${prodCategory.title}`}
                      link={`View all Featured ${prodCategory.title}.`}
                      prodCategoryId={prodCategory.id}
                    />
                  </div>
                </div>
              </>
            );
          })}
        <div>
          <NewTractor brands={brands} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
