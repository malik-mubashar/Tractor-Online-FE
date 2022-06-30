import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productApis } from "../../API/ProductApis";

export default function FeaturedProducts({ title, link }) {
  const [index, setIndex] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleGetAllProducts();
  }, []);
  const handleGetAllProducts = async () => {
    const result = await productApis.getAllProducts();
    if (result.error === false) {
      setProducts(result.data && result.data.data);
      console.log("products", result.data && result.data.data);
    }
  };

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
        { products &&
          products.map((item, i) => {
          return(
            <>
            <div className="featured-card bg-white border-radius" key={i}>
              <img
                className="card-img border-radius"
                src={item.active_images_path[0]}
              />
              <h4 className="mb-0 pl-2 border-radius">{item.title}</h4>
              <p className="mb-0 pl-2 text-success border-radius">
                {item.price}
              </p>
              <p className="pl-2 border-radius">{item.location}</p>
            </div>
            </>
        );
      })}
      </Carousel>
    </div>
  );
}
