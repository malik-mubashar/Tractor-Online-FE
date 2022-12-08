import React, { useContext, useEffect, useState } from "react";
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
import { RootContext } from "../../context/RootContext";
// import ExploreProducts from "./ExploreProducts";

const LandingPage = () => {
	const { prodCategories, setProdCategories,products  } = useContext(RootContext)
  return (
		<>
			{/* 1st section top bar in layout */}
      {!isMobile && (
        <>
					{" "}
					{/* 2nd section */}
          <DeskTopBanner/>
          {/* our main side bar on landing page (3rd section) */}
          <div className="d-flex p-2 mt-2">
            <div className="col-12 ">
							<CategoriesNavBar productCategories={ prodCategories} />
            </div>
          </div>
        </>
			)}

			{/* add on desktop (4th section)*/}
			{!isMobile && <TractorSaleAd />}
			
			{/* 5th section brands and city examine used tractor wala*/}
      <div className="overflow-x-hidden">
        <div className={`container-lg py-4 mt-2 ${isMobile ? "bg-white" : ""}`}>
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
                    <FeaturedProducts
                      title={`${cate.title}`}
                      link={`View all ${cate.title}.`}
											prodCategoryId={cate.id}
											products={products && products.filter((prod)=>{return prod.product_category_id===cate.id})}
                    />
                  </div>
                </div>
              </>
            );
          })}
				<div>
					{/* 7th section */}
          <NewTractor />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
