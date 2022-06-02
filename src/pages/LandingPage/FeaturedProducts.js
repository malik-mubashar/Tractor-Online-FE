import React, { useState, useContext, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function FeaturedProducts() {

  const [index, setIndex] = useState([1,2,3,4,5,6,7,8,9])
  const [index2, setIndex2] = useState([1,2,3])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
        <h4>Featured Products</h4>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          // infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {index.map((option) => (
            <div className="featured-card" key={option}>
              <img className="card-img" src="https://cache3.pakwheels.com/ad_pictures/6549/Slide_toyota-prius-s-led-edition-1-8-2013-65495110.jpg" />
              <h4 className="mb-0 pl-2">Name</h4>
              <p className="mb-0 pl-2 text-success">PKR 100,000</p>
              <p className="pl-2">Lahore</p>
            </div>
          ))}
        </Carousel>
        <div class="container-lg mt-5 py-4">
          <h2>New Cars by Make</h2>
            {index2.map((option) => (
              <div class="row">
                <ul class="make-list col-sm-2 list-unstyled new-car-list">
                  <li class="heading text-center">
                    <a onclick="trackEvents('NewCars', 'Makes - FromHome', 'Suzuki');" href="#">
                      <img alt="Suzuki" height="65" loading="lazy" src="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/041/resized/Suzuki.png" />
                      <h5 class="nomargin">Suzuki</h5>
                    </a>
                  </li>
                </ul>
                <ul class="make-list col-sm-2 list-unstyled new-car-list">
                  <li class="heading text-center">
                    <a onclick="trackEvents('NewCars', 'Makes - FromHome', 'Toyota');" href="#">
                      <img alt="Toyota" height="65" loading="lazy" src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/042/resized/Tyota.png" />
                      <h5 class="nomargin">Toyota</h5>
                    </a>
                  </li>
                </ul>
                <ul class="make-list col-sm-2 list-unstyled new-car-list">
                  <li class="heading text-center">
                    <a onclick="trackEvents('NewCars', 'Makes - FromHome', 'Honda');" href="#">
                      <img alt="Honda" height="65" loading="lazy" src="https://cache2.pakwheels.com/system/car_manufacturers/manufacturers/000/000/014/resized/Honda.png" />
                      <h5 class="nomargin">Honda</h5>
                    </a>
                  </li>
                </ul>
                <ul class="make-list col-sm-2 list-unstyled new-car-list">
                  <li class="heading text-center">
                    <a onclick="trackEvents('NewCars', 'Makes - FromHome', 'KIA');" href="#">
                      <img alt="KIA" height="65" loading="lazy" src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/021/resized/KIA.png" />
                      <h5 class="nomargin">KIA</h5>
                    </a>
                  </li>
                </ul>
                <ul class="make-list col-sm-2 list-unstyled new-car-list">
                  <li class="heading text-center">
                    <a onclick="trackEvents('NewCars', 'Makes - FromHome', 'Hyundai');" href="#">
                      <img alt="Hyundai" height="65" loading="lazy" src="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/016/resized/hyundai.png" />
                      <h5 class="nomargin">Hyundai</h5>
                    </a>
                  </li>
                </ul>
                <ul class="make-list col-sm-2 list-unstyled new-car-list">
                  <li class="heading text-center">
                    <a onclick="trackEvents('NewCars', 'Makes - FromHome', 'Changan');" href="#">
                      <img alt="Changan" height="65" loading="lazy" src="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/068/resized/Changan.png" />
                      <h5 class="nomargin">Changan</h5>
                    </a>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    );
}
