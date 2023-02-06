import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tab from "react-bootstrap/Tab";
import * as Icon from "react-feather";
import { Button } from "react-bootstrap";
import MainCategory from "./categoryBody";
import SideMenue from "./SideMenue";
import FeaturedProducts from "../LandingPage/FeaturedProducts";
import { RootContext } from "../../context/RootContext";

const CategoriesNavBar = () => {
	const { products } = useContext(RootContext)
	const [featuredProducts, setFeaturedProducts] = useState()
	useEffect(() => {
		if (products.length > 0) {
			
			let featuedProducts=	products.filter((prod) => {
					return prod.featured===true
			})
			setFeaturedProducts(featuedProducts)
		}

	}, [products])
	

  return (
    <>
      <div className="row">
        <div className=" relative bg-white category-section border-radius p-0 col-lg-2">
          <h3 className="category-title border-bottom p-2 m-1 ">
            <Icon.List className="icon" /> Categories
          </h3>

          <SideMenue />
        </div>
        <div className="col-lg-10">
          <div className="col-12  mb-4 category-section-slider p-0 border-radius">
            <MainCategory src="https://static.vecteezy.com/system/resources/previews/003/417/794/non_2x/farming-landing-page-web-banner-background-vector.jpg" />
          </div>
          <div className="col-12 category-hot-product border-radius">
            <div className="col-lg-2 text-center align-middle">
              <div style={{paddingTop: "50px"}}>
                <h4 className="mt-5 text-white">More Exclusive Deals</h4>
                <span className="text-white mb-2">
                  Combine with your coupon to save even more!
                </span>
              </div>
            </div>
            <div className="col-lg-10 hot-slider">
							<FeaturedProducts
							products={featuredProducts}
							/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoriesNavBar;
