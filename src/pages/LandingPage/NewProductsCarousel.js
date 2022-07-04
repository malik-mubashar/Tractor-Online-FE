import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Badge from 'react-bootstrap/Badge'


export default function NewProductsCarousel({products}) {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  return (
    <div>
      <div className="d-flex justify-content-between">
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        // infinite={true}
        autoPlay={true}
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
        { products &&
          products.map((item, i) => {
          return(
            <>
            <div className="featured-card bg-white border-radius cursor-pointer" key={i}>
              <img
                className="card-img border-radius"
                src={item.cover_photo_path}
                alt=""
              />
              <h4 className="mb-0 pl-2 border-radius productTitleTruncate" title={item.title}>{item.title}</h4>
              <p className="mb-0 pl-2 text-success border-radius">
                {item.price}
              </p>
              <p className="pl-2 border-radius">{item.location}</p>
              <span className="featuredBand">Featured</span>
            </div>
            </>
        );
      })}
      </Carousel>
    </div>
  );
}
