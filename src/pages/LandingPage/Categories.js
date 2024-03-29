import React, { useEffect, useState, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { isMobile } from "react-device-detect";
import { Col, Tabs, Tab, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { city } from "../../API/City/CityApis";
import { RootContext } from "../../context/RootContext";

export default function Categories() {
	const { prodCategories, popularCities, brands } = useContext(RootContext)
	const [brandsForCategories, setBrandsForCategories] = useState([])
	const [prodCategoriesForCategories, setProdCategoriesForCategories] = useState([])
  let history = useHistory();
  const [citiesForCarousel, setCitiesForCarousel] = useState();
	useEffect(() => {
		if (popularCities.length > 0) {
			readyCitiesForCarousel();
		}
	}, [popularCities]);
	
	useEffect(() => {
		if (brands.length > 0) {
			readyBrandsForCarosule();
		}
	}, [brands]);

	useEffect(() => {
		if (prodCategories.length > 0) {
			readyProdCategoriesForCarosule();
		}
	}, [prodCategories]);
	
	const readyProdCategoriesForCarosule = () => {
		let tempArr = [];
		const chunkSize = isMobile?8:12;
		for (let i = 0; i < prodCategories.length; i += chunkSize) {
			const chunk = prodCategories.slice(i, i + chunkSize);
			tempArr.push(chunk);
		}
		setProdCategoriesForCategories(tempArr); 
	}

	const readyBrandsForCarosule = () => {
		let tempArr = [];
		const chunkSize = isMobile?8:12;
		for (let i = 0; i < brands.length; i += chunkSize) {
			const chunk = brands.slice(i, i + chunkSize);
			tempArr.push(chunk);
		}
		setBrandsForCategories(tempArr); 
	}

  const readyCitiesForCarousel = async () => {
      let tempArr = [];
      const chunkSize = isMobile?8:12;
      for (let i = 0; i < popularCities.length; i += chunkSize) {
        const chunk = popularCities.slice(i, i + chunkSize);
        tempArr.push(chunk);
      }
      setCitiesForCarousel(tempArr);
  };
  return (
    <div className="">
      {/* <h2 className="text-center">Examine Used Tractors</h2> */}
      {/* Tab Demo Three */}
      <Col lg={12} className='p-0'>
        <div className="mb-4">
          <div className="">
            <div className="tabs-style-three">
							<Tabs defaultActiveKey="Categories" id="uncontrolled-tab-example">
                <Tab eventKey="Categories" title="Categories">
									<Carousel showDots={false} variant={'dark'} slide={false}>
                    {prodCategoriesForCategories &&
                      prodCategoriesForCategories.map((item) => (
                        <Carousel.Item>
                          <ul className={`${isMobile?'browse-listing-mobile':'browse-listing'} row p-0`}>
                            {item.map((item2, i) => (
                              <li key={i} className={`${isMobile?'col-3 p-1':'col-2'} mt-4 `}>
                                <span
                                  onClick={() => history.push(`/products/search?category=${item2.id}`)}
                                 className={`${isMobile?'':'max-height-desktop'}`}
                                >
                                  <img
                                    alt="Category"
                                    height={`${isMobile?"30px":"150px"}`}
                                    width={`${isMobile?"30px":"150px"}`}
                                    src={item2.active_image_path}
                                  />
                                  {item2.title}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </Carousel.Item>
                      ))}
                  </Carousel>
								</Tab>
								
								<Tab eventKey="Make" title="Make">
										<Carousel showDots={false}  variant={'dark'} slide={false}>
											{brandsForCategories &&
												brandsForCategories.map((item) => (
													<Carousel.Item>
														<ul className={`${isMobile?'browse-listing-mobile':'browse-listing'} row p-0`}>
															{item.map((item2, i) => (
																<li key={i} className={`${isMobile?'col-3 p-1':'col-2'} mt-4 `}>
																	<span
																		onClick={() => history.push(`/products/search?brand=${item2.id}`)}
																	
																	>
																		<img
																			alt="Brands"
																			height={`${isMobile?"30px":"150px"}`}
																			width={`${isMobile?"30px":"150px"}`}
																			src={item2.active_image_path}
																		/>
																		{item2.title}
																	</span>
																</li>
															))}
														</ul>
													</Carousel.Item>
												))}
										</Carousel>
									</Tab>

                <Tab eventKey="City" title="City">
                  <Carousel showDots={false}  variant={'dark'}>
                    {citiesForCarousel &&
                      citiesForCarousel.map((item) => (
                        <Carousel.Item>
													<ul className={`${isMobile ? 'browse-listing-mobile' : 'browse-listing'} row p-0`}>
														{item.map((item2, i) => (
                              <li
                                key={i}
                                className={`${isMobile?'col-4 p-1':'col-2'} p-3 text-center`}
                              >
                                <span
                                  className="text-dark"
                                  onClick={() => {
                                    history.push(`/products/search?city=${item2.title}`);
                                  }}
                                >
                                  {item2.title}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </Col>
      {/* End Tab Demo Three */}
    </div>
  );
}
