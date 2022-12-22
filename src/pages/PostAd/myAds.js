import React, { useState, useEffect, useContext } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { productApis } from "../../API/ProductApis";
import { RootContext } from "../../context/RootContext";
import Icofont from "react-icofont";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import * as Icon from "react-feather";
import "../../assets/css/myAds.scss"
import Products from "../Products/Products";


const myAds = () => {
  const [activeProducts, setActiveProducts] = useState([]);
  const [InactiveProducts, setInactiveProducts] = useState([]);
	const [pagination, setPagination] = useState();
	const [mainSearchString, setMainSearchString] = useState("");
	const [noOfRec, setNoOfRec] = useState(10);
	const [tabs, setTabs] = useState({
		requested: false,
		active: true,
		inActive: false,
		featured:false,
	})
	const [isHovering, setIsHovering] = useState(false);




	const { currentUser, setShowLoader, showLoader } = useContext(RootContext);
	
  let history = useHistory();

	useEffect(() => {
		if (tabs.inActive) {
			setShowLoader(true);
			handleGetActiveProducts(1, "", 10,'inactive');
		}
		if (tabs.active) {
			setShowLoader(true);
			handleGetActiveProducts(1, "", 10,'active');
		}
		if (tabs.featured) {
			setShowLoader(true);
			handleGetActiveProducts(1, "", 10,'nil',true);
		}
		// if (tabs.requested) {
		// 	handleGetActiveProducts(1, "", 10,'nil','nil');
		// }
    // handleGetActiveProducts(1, "", 10);
		// handleGetInactiveProducts();
  }, [tabs]);

  const handleGetActiveProducts = async (page, mainSearch, noOfRec,activeOrInActive,featured='nil') => {
    const result = await productApis.getAllProducts(
      page,
      noOfRec,
      "nil",
      "nil",
      "nil",
      featured,
      "nil",
      "nil",
      "nil",
      activeOrInActive,
      currentUser.id
    );
		if (result.error === false) {
			setActiveProducts(result.data && result.data.data);
			setPagination(result.data.pagination)
			setShowLoader(false)
		}
		if (result.error === true) {
			console.error(result.error)
			setShowLoader(false)
		}
  };

  const handleGetInactiveProducts = async () => {
    const result = await productApis.getAllProducts(
      "1",
      "1000000000",
      "nil",
      "nil",
      "nil",
      "nil",
      "nil",
      "nil",
      "nil",
      "inactive",
      currentUser.id
    );
    if (result.error === false) {
			setInactiveProducts(result.data && result.data.data);
			setShowLoader(false)
		}
		if (result.error === true) {
			setShowLoader(false)
		}
  };

  const handleDeactivateAd = async (id, status) => {
    const loadingToastId = toast.loading("Loading..!");
    var product_object = { productId: id };
    let formData = new FormData();
    formData.append("status", status);
    try {
      const result = await productApis.updateProduct(product_object, formData);
      if (result.error === false) {
        if (result.error === false) {
          handleGetActiveProducts();
          handleGetInactiveProducts();
          if (status === "active") {
            toast.success("Your ad Activated successfully!");
          } else {
            toast.success("Your ad Deactivated successfully!");
          }
          toast.dismiss(loadingToastId);
        }
      }
    } catch (error) {
      console.error(error);
    }
	};
	
	const requestFeaturedCurrentAd =async (item) => {
		let formData = new FormData();
		let state={productId:item.id}
		formData.append("featured", 'nil');
		try {
			const result = await productApis.updateProduct(
				state,
				formData
			);
			if (result.error === false) {
				console.log(result)
				toast.success('Request sent')
				if (tabs.inActive) {
					handleGetActiveProducts(1, mainSearchString, noOfRec,'inactive');
				}
				if (tabs.active) {
					handleGetActiveProducts(1, mainSearchString, noOfRec,'active');
				}
				if (tabs.featured) {
					handleGetActiveProducts(1, mainSearchString, noOfRec,'nil',true);
				}
			}
			if (result.error === true) {
				console.log(result)
			}
		} catch (error) {
			console.error(error);
		}	
	}

	const unFeatureCurrentAd =async (item) => {
		let formData = new FormData();
		let state={productId:item.id}
		formData.append("featured", false);
		try {
			const result = await productApis.updateProduct(
				state,
				formData
			);
			if (result.error === false) {
				console.log(result)
				toast.success('Request Canceled')
				if (tabs.inActive) {
					handleGetActiveProducts(1, mainSearchString, noOfRec,'inactive');
				}
				if (tabs.active) {
					handleGetActiveProducts(1, mainSearchString, noOfRec,'active');
				}
				if (tabs.featured) {
					handleGetActiveProducts(1, mainSearchString, noOfRec,'nil',true);
				}
			}
			if (result.error === true) {
				console.log(result)
			}
		} catch (error) {
			console.error(error);
		}	
	}

	const getProductCards = () => {
		console.log('activeProducts',activeProducts)
		return (
			activeProducts.length > 0 ? (
				<div className="row" style={{padding:'20px'}}>
					{activeProducts &&
						activeProducts.map((item, i) => {
							return (
								<div className="col-lg-3 col-12" key={i}>
									<div className="listCard mb-3 d-block relative">
										<img
											src={item.cover_photo_thumbnail}
											alt="Card"
											style={{ width: "200px", height: "140px" }}
											className="cursor-pointer"
											onClick={() => {
												history.push(`/ad-details/${item.id}`);
											}}
										/>
										<div style={{ width: "100%" }}>
											<div className={"mt-2"}>
												<h5
													className={
														"cursor-pointer truncate-search-page"
													}
													onClick={() => {
														history.push(`/ad-details/${item.id}`);
													}}
												>
													{item.title}
												</h5>
												<h5 className={"cursor-pointer"}>
													PKR {item.price}
												</h5>
												{
													item.featured ? (
														<>
															<span className="featuredBand">Featured</span>
														</>
													) : item.featured === null ?
													(<>
																<p
																	onClick={() => {																		
																			if (window.confirm('Are you sure to cancel request?')) {
																				unFeatureCurrentAd(item)
																		}
																	}}
																	className="d-flex requested-featured">
																	Cancle Request
																	<i style={{marginTop:'0.32rem'}} className="icofont-cross"></i>
																</p>																
														</>
													)
													: (
															<p
															onClick={() =>
																{
																	if (window.confirm('Are you sure to send request?')) {
																	requestFeaturedCurrentAd(item)
																}
															}}
																className="request-featured">Request Featured</p>
												)
												}
											</div>
											<p>
												<Icofont
													icon="location-pin"
													className="icofont text-primary mr-1"
												/>
												{item.city}
											</p>
											<p className="truncate-search-page">
												<span>
													<b>Brand:</b> {item.brand && item.brand.title}
												</span>{" "}
												{" | "}
												<span>
													<b>Category:</b>{" "}
													{item.product_category &&
														item.product_category.title}
												</span>
											</p>
											<p className="truncate-search-page">
												{item.extra_fields &&
												Object.entries(item.extra_fields).length > 0 ? (
													<>
														{item.extra_fields &&
															Object.entries(item.extra_fields).map(
																(item2, i) => {
																	return (
																		<>
																			<span id={i}>
																				{item2[1]}
																				{i + 1 <
																				Object.keys(item.extra_fields)
																					.length ? (
																					<b className="mx-1">|</b>
																				) : null}{" "}
																			</span>
																		</>
																	);
																}
															)}
													</>
												) : (
													<div className="text-danger text-center">
														No Record Found...
													</div>
												)}
											</p>
											<div style={{ justifyContent: "space-between" }}>
												<p className="text-muted">
													Last updated{" "}
													{item.updated_at &&
														item.updated_at.split(",")[0]}{" "}
													ago
												</p>
												<div className="text-center d-flex">
													{tabs.active ||tabs.featured||tabs.requested  ?
														<>
															<button
															className="mr-3 btn btn-outline-danger"
															onClick={() => {
																if (
																	window.confirm(
																		"Are you sure you want to Deactivate your Ad?"
																	)
																)
																	handleDeactivateAd(item.id, "inactive");
															}}
															>
																Deactivate Ad
																</button>
																<button
																	className="mr-3 btn btn-outline-warning"
																	onClick={() => {
																		history.push(`/product/sell/post-ad/${item.id}`)
																	}}
																>
																		<Icon.Edit2 />
																</button>
														</>
														:
														<button
                                    className="mr-3 btn btn-outline-success"
                                    onClick={() => {
                                      if (
                                        window.confirm(
                                          "Are you sure you want to Activate your Ad again?"
                                        )
                                      )
                                        handleDeactivateAd(item.id, "active");
                                    }}
                                  >
                                    Activate Ad
                                  </button>
													}
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			) : (
				<h4 className="text-center">No Active Ads</h4>
			)
		)
	}

	const switchTab = (tab) => {
		let	Temp = {
			featured: false,
			active: false,
			inActive: false,
			requested:false,	
		}
		setTabs({
			...Temp,
			[tab]:true
		})
	}

	console.log('asd',tabs)
	console.log('activeProducts',activeProducts)
  return (
    <div className="mb-4">
      <div className="">
        <div className="tabs-style-three " >
          <Tabs onSelect={(e) => { switchTab(e)}} defaultActiveKey="active" id="uncontrolled-tab-example">
            <Tab eventKey="active" title="Active">
              {getProductCards()}
            </Tab>
						<Tab onSelect={() => { switchTab()}} eventKey='inActive' title='InActive'>
							{getProductCards()}
						</Tab>
						<Tab onClick={() => { switchTab()}} eventKey='featured' title='Featured'>
							{getProductCards()}
						</Tab>
						{/* <Tab onClick={() => { switchTab()}} eventKey='requested' title='Requested'>
							
						</Tab> */}
					</Tabs>
					<div>
					{pagination && pagination && (
                    <div>
                      <span>Rows per page</span>
                      <span className="mx-4">
                        {pagination.from}-
                        {pagination.to} of{" "}
                        {pagination.count}
                      </span>

                      <button
                        className={`pagination-button ${
                          pagination.page == 1 ? "disabled" : ""
                        }`}
												onClick={() => {
													if (tabs.inActive) {
														handleGetActiveProducts(1, mainSearchString, noOfRec,'inactive');
													}
													if (tabs.active) {
														handleGetActiveProducts(1, mainSearchString, noOfRec,'active');
													}
													if (tabs.featured) {
														handleGetActiveProducts(1, mainSearchString, noOfRec,'nil',true);
													}

                          // handleGetActiveProducts(1, mainSearchString, noOfRec);
                        }}
                        type="button"
                      >
                        <span className="MuiIconButton-label">
                          <svg
                            className="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
                          </svg>
                        </span>
                      </button>
                      <button
                        className={`pagination-button ${
                          pagination.page == 1 ? "disabled" : ""
                        }`}
                        onClick={() => {
                          // handleGetActiveProducts(
                          //   pagination.prev,
                          //   mainSearchString,
                          //   noOfRec
													// );
													if (tabs.inActive) {
														handleGetActiveProducts(pagination.prev, mainSearchString, noOfRec,'inactive');
													}
													if (tabs.active) {
														handleGetActiveProducts(pagination.prev, mainSearchString, noOfRec,'active');
													}
													if (tabs.featured) {
														handleGetActiveProducts(pagination.prev, mainSearchString, noOfRec,'nil',true);
													}
                        }}
                        type="button"
                      >
                        <span className="MuiIconButton-label">
                          <svg
                            className="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                          </svg>
                        </span>
                      </button>
                      <button
                        className={`pagination-button ${
                          pagination.page ==
                          pagination.last
                            ? "disabled"
                            : ""
                        }`}
                        tabIndex="0"
                        type="button"
                        onClick={() => {
                          // handleGetActiveProducts(
                          //   pagination.next,
                          //   mainSearchString,
                          //   noOfRec
                          // );
													if (tabs.inActive) {
														handleGetActiveProducts(pagination.next, mainSearchString, noOfRec,'inactive');
													}
													if (tabs.active) {
														handleGetActiveProducts(pagination.next, mainSearchString, noOfRec,'active');
													}
													if (tabs.featured) {
														handleGetActiveProducts(pagination.next, mainSearchString, noOfRec,'nil',true);
													}
                        }}
                      >
                        <span className="MuiIconButton-label">
                          <svg
                            className="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                          </svg>
                        </span>
                        <span className="MuiTouchRipple-root"></span>
                      </button>

                      <button
                        className={`pagination-button ${
                          pagination.page ==
                          pagination.last
                            ? "disabled"
                            : ""
                        }`}
                        tabIndex="0"
                        type="button"
                        onClick={() => {
                          // handleGetActiveProducts(
                          //   pagination.last,
                          //   mainSearchString,
                          //   noOfRec
                          // );
													if (tabs.inActive) {
														handleGetActiveProducts(pagination.last, mainSearchString, noOfRec,'inactive');
													}
													if (tabs.active) {
														handleGetActiveProducts(pagination.last, mainSearchString, noOfRec,'active');
													}
													if (tabs.featured) {
														handleGetActiveProducts(pagination.last, mainSearchString, noOfRec,'nil',true);
													}
                        }}
                      >
                        <span className="MuiIconButton-label">
                          <svg
                            className="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  )}
					</div>
        </div>
      </div>
    </div>
  );
};

export default myAds;
