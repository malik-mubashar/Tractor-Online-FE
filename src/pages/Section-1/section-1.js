import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tab from "react-bootstrap/Tab";
import * as Icon from "react-feather";
import { Button } from "react-bootstrap";
import MainBanners from "./MainBanners";
import SideMenue from "./SideMenue";
import FeaturedProducts from "../LandingPage/FeaturedProducts";
import { RootContext } from "../../context/RootContext";
import DeskTopBanner from "../LandingPage/DeskTopBanner";

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
{/* 				
        <div className=" relative bg-white category-section p-0 col-lg-2">
          <h5 className="category-title border-bottom p-2 m-1 ">
            <Icon.List className="icon" /> Categories
          </h5>

          <SideMenue />
				</div> */}
					{/* main carusole */}
					<MainBanners />
					
			
			<div className="row">
				<div className="col-12 category-hot-product">
					<div className="col-lg-2 text-center align-middle">
						<div style={{paddingTop: "50px"}}>
							<h4 className="mt-5 text-dark">More Exclusive Deals</h4>
							<span className="text-dark mb-2">
								Combine with your coupon to save even more!
							</span>
						</div>
					</div>
					<div className="col-lg-10 hot-slider">
						<FeaturedProducts
							products={featuredProducts}
							fromSection1={true}
						/>
					</div>
				</div>
			</div>
    </>
  );
};
export default CategoriesNavBar;
