import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { productApis } from "../../API/ProductApis";
import Alert from "react-bootstrap/Alert";
import { isMobile } from "react-device-detect";
import "../../assets/css/featuredProductsMobile.scss"

 const FeaturedProductsMobile=({ title, link, prodCategoryId, products })=>{
  return (
    <div>
			<div className="row justify-content-between">
				<div className="col-9">
					{isMobile ?
						<h4>{ title}</h4>
					:
					<h2>{title}</h2>
					}
				</div>
				<div className="col-3">
					<Link
						className="text-info text-capitalize"
						to={`products/search?category=${prodCategoryId}`}
					>
						{link}
					</Link>
				</div>
			</div>
			<div className={`d-flex ${products && products.length > 0?'mobile-featured-products':''}`}>
				{products && products.length > 0 ? (
						products.map((item, i) => {
							return (
								<div
									className="featured-card bg-white border-radius cursor-pointer relative p-3 m-1"
									key={i}
								>
									<Link to={`/ad-details/${item.id}`}>
										<img
											className="card-img border-radius"
											src={item.cover_photo_thumbnail}
											alt=""
										/>
										<h4
											className="mb-0 pl-2 border-radius productTitleTruncate"
											title={item.title}
										>
											{item.title}
										</h4>
										<p className="mb-0 pl-2 text-success border-radius">
										{item.call_for_price ? 'call for price' : item.price_currency + ' ' + item.price}
										</p>
										<p className="pl-2 border-radius">{item.city}</p>
										{item.featured ? (
											<span className="featuredBand">Featured</span>
										) : null}
									</Link>
								</div>
							);
						})
					) : (
						<div className="d-flex">
							{/* <h4 className="mx-auto">No Featured {title}</h4> */}
							<span key={"warning"} variant={"warning"}>
							<h6>	No {title} </h6>
							</span>
						</div>
					)}
			</div>
        
    </div>
  );
 }
 export default FeaturedProductsMobile
