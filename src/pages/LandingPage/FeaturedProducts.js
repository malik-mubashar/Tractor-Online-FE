import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { productApis } from "../../API/ProductApis";
import Alert from "react-bootstrap/Alert";

export default function FeaturedProducts({ title, link, prodCategoryId, products }) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
    // handleGetAllProducts();
  // }, [prodCategoryId]);

	// const handleGetAllProducts = async () => {
  //   const result = await productApis.getAllProducts(
  //     "1",
  //     "1000000000",
  //     "nil",
  //     "nil",
  //     "nil",
  //     'nil',
  //     "nil",
  //     "nil",
  //     prodCategoryId||"nil",
  //     "active",
  //     "nil"
  //   );
  //   if (result.error === false) {
  //     setProducts(result.data && result.data.data);
  //   }
  // };

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

	// console.log('products in featured products',products)

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>{title}</h2>
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
                    PKR {item.price}
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
