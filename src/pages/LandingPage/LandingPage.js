import React, { useContext, useEffect, useState } from "react";
import "../../components/Navigation/Navigation.css";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import FeaturedProductsMobile from "./FeaturedProductsMobile";
import NewTractor from "./NewTractor";
import { isMobile } from "react-device-detect";
import DeskTopBanner from "./DeskTopBanner";
import Section1 from "../Section-1/section-1";
import TractorSaleAd from "./TractorSale";
import { city } from "../../API/City/CityApis";
import toast from "react-hot-toast";
import { brandApis } from "../../API/BrandsApis";
import { prodApi } from "../../API/ProdCategoriesApis";
import { RootContext } from "../../context/RootContext";
import "../LandingPage/landingPage.scss"
// import UploadImages from "../UploadImages";

// import ExploreProducts from "./ExploreProducts";

const LandingPage = () => {
	const { prodCategories, products } = useContext(RootContext)
  return (
		<>
			{/* 1st section top bar in layout */}
      {!isMobile && (
        <>
					{" "}
          <div className="d-flex p-2 mt-2">
            <div className="col-12 ">
							<Section1 productCategories={ prodCategories} />
            </div>
          </div>
        </>
			)}
			{/* <UploadImages/> */}
			{/* add on desktop (4th section)*/}
			{!isMobile && <TractorSaleAd />}
			
			{/* 5th section brands and city examine used tractor wala*/}
      <div className="overflow-x-hidden">
        <div className={`container-lg py-4 mt-2 ${isMobile ? "" : ""}`}>
          <Categories/>
        </div>
        {/* <div className="bg-white">
          <div className="container-lg py-4">
            <ExploreProducts />
          </div>
        </div> */}
				{/* 6th section */}
        {prodCategories &&
          prodCategories.map((cate, i) => {
            return (
              <>
                <div className={`${i % 2 === 0 ? "bg-white" : ""}`}>
                  <div className="container-lg py-4 ">
										{isMobile ?
											<FeaturedProductsMobile
											title={`${cate.title}`}
                      link={`View all`}
											prodCategoryId={cate.id}
											products={products && products.filter((prod)=>{return prod.product_category_id===cate.id})}
											/>
											:
											<FeaturedProducts
                      title={`${cate.title}`}
                      link={`View all ${cate.title}.`}
											prodCategoryId={cate.id}
											products={products && products.filter((prod)=>{return prod.product_category_id===cate.id})}
                    />}
                  </div>
                </div>
              </>
            );
          })}
				<div>
					{/* 7th section brand wala*/}
          <NewTractor />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
