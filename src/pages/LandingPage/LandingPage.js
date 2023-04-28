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
import "../LandingPage/landingPage.scss";


const LandingPage = () => {
  const { prodCategories, products,currentUser } = useContext(RootContext);
  console.log('currentUser',currentUser)
	return (
    <>
      {/* 1st section top bar in layout */}
      {!isMobile && (
        <>
          {" "}
          <Section1 productCategories={prodCategories} />
        </>
      )}
      {/* add on desktop (4th section)*/}
      {!isMobile && <TractorSaleAd />}

      {/* 5th section brands and city examine used tractor wala*/}
      <div
        className={` ${isMobile ? "" : "card shadow-lg ml-4 mr-1 p-5 py-4"}`}
        style={{ borderRadius: "8px" }}
      >
        <Categories />
      </div>
      <div className="overflow-x-hidden">
        {/* 6th section */}
        {prodCategories &&
          prodCategories.map((cate, i) => {
            return (
              <>
                <div>
                  <div
                    className="card shadow-lg ml-2 mr-1 mt-3 px-3 py-4 "
                    style={{ borderRadius: "8px" }}
                  >
                    {isMobile ? (
                      <FeaturedProductsMobile
                        title={`${cate.title}`}
                        link={`View all`}
                        prodCategoryId={cate.id}
                        products={
                          products &&
                          products.filter((prod) => {
                            return prod.product_category_id === cate.id;
                          })
                        }
                      />
                    ) : (
                      <FeaturedProducts
                        title={`${cate.title}`}
                        link={`View all ${cate.title}.`}
                        prodCategoryId={cate.id}
                        products={
                          products &&
                          products.filter((prod) => {
                            return prod.product_category_id === cate.id;
                          })
                        }
                      />
                    )}
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
