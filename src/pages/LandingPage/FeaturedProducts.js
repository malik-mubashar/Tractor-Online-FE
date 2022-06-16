import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function FeaturedProducts({ title, link}) {
  const [index, setIndex] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>{title}</h2>
        <a className="text-info text-capitalize">{link}</a>
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
        {index.map((option) => (
          <div className="featured-card bg-white border-radius" key={option}>
            <img
              className="card-img border-radius"
              src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg"
            />
            <h4 className="mb-0 pl-2 border-radius">Kubota</h4>
            <p className="mb-0 pl-2 text-success border-radius">PKR 100,000</p>
            <p className="pl-2 border-radius">Lahore</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
