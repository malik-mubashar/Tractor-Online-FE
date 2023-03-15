import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import TractorCover2 from "../../assets/img/tractorCover2.jpg";
import TractorCover3 from "../../assets/img/tractorCover3.jpg";
import T1 from "../../assets/img/t1.jpg";
import T2 from "../../assets/img/t2.jpg";
import T3 from "../../assets/img/t3.jpg";
import T4 from "../../assets/img/banner1.jpg";
import T5 from "../../assets/img/banner2.jpg";
import T6 from "../../assets/img/banner3.jpg";
import DeskTopBanner from "../LandingPage/DeskTopBanner";
import "./mainBanners.scss";

const MainBanners = () => {
  const [index, setIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
	const imgUrls = [T2, T5, T4, T3, T1, TractorCover3];
	// useEffect(() => {
	// 	showSlides(slideIndex);

	// }, [])
	
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");
		if (n > slides.length) {setSlideIndex(1)}    
		if (n < 1) {setSlideIndex ( slides.length)}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " active";
	}	
	return (
		<>
			<Carousel
				indicators={true}
				swipeable={false}
				draggable={false}
				showDots={false}
				// responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition="fade"
				transitionDuration={500}
				containerClass="carousel-container"
				// removeArrowOnDeviceType={["tablet", "mobile"]}
				// deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
				style={{marginLeft:'-15px',marginRight:'-15px'}}
				>
					{imgUrls.map( (item, i) =>  {
						return (
							<Carousel.Item>
								<img
									className="d-block w-100 justify-content-center"
									src={item}
									alt="First slide"
									height={"600px"}
								/>
							</Carousel.Item>

						)
					})}
					<div>
						<div className="mr-3 searchbox-animation" style={{
							marginTop:'80px'
						}}>
							<DeskTopBanner />
						</div>
					</div>
			</Carousel>
		{/* <img
			className="d-block w-100 m-auto justify-content-center border-radius "
				src={T1}
				alt="First slide"
				height={"340px"}
		/> */}

	</>
  );
};
export default MainBanners;
