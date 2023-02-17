import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { productApis } from "../../API/ProductApis";
import Alert from "react-bootstrap/Alert";
import { isMobile } from "react-device-detect";

export default function FeaturedProducts({ title, link, prodCategoryId, products,fromSection1=false }) {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
	};

	// console.log('products in featured products',products)

  return (
    <div className={`${fromSection1?'section-1-featuredContainer':'featuredContainer'}`}>
      <div className="d-flex justify-content-between">
				{isMobile ?
					<h6>{ title}</h6>
				:
				<h2>{title}</h2>
				}
        <Link
          className="text-info text-capitalize"
          to={`products/search?category=${prodCategoryId}`}
        >
          {link}
        </Link>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        // infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products && products.length > 0 ? (
          products.map((item, i) => {
            return (
              <div
                className="featured-card bg-white border-radius cursor-pointer h-100 relative"
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
            <Alert key={"warning"} variant={"warning"}>
              No {title}
            </Alert>
          </div>
        )}
      </Carousel>
    </div>
  );
}
