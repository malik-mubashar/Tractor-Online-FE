import React, { useState, useEffect, useContext } from "react";
import { Tabs, Tab, OverlayTrigger, Tooltip, Image, Modal, Button, FormControl } from "react-bootstrap";
import { productApis } from "../../API/ProductApis";
import { RootContext } from "../../context/RootContext";
import Icofont from "react-icofont";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import * as Icon from "react-feather";
import "../../assets/css/myAds.scss"
import csvSvg from "../../assets/svg/csv2.png";
import pdfSvg from "../../assets/svg/pdf.png";
import ImportImg from "../../assets/svg/import.svg";
import { isMobile } from "react-device-detect";


const myAds = () => {
	
	const [modalShow, setModalShow] = React.useState(false);
	let formDataForCsv = new FormData();
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

  const handleGetActiveProducts = async (page, mainSearch='', noOfRec,activeOrInActive,featured='nil') => {
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
			currentUser.id,
			'nil',
			mainSearch
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
				getProductsAsPerTabOpened()
			}
			if (result.error === true) {
				console.log(result)
			}
		} catch (error) {
			console.error(error);
		}	
	}
	const getProductsAsPerTabOpened=(temp='') => {
		if (tabs.inActive) {
			handleGetActiveProducts(1, temp, noOfRec,'inactive');
		}
		if (tabs.active) {
			handleGetActiveProducts(1, temp, noOfRec,'active');
		}
		if (tabs.featured) {
			handleGetActiveProducts(1, temp, noOfRec,'nil',true);
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
	const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getProductsAsPerTabOpened(event.target.value)
    }
		if (event.target.value == "") {
			getProductsAsPerTabOpened(event.target.value)
		}
  };
console.log('products',activeProducts)
	const getProductCards = () => {
		return (
			activeProducts&&activeProducts.length > 0 ? (
				<div className="row" style={{padding:'20px'}}>
					{activeProducts &&
						activeProducts.map((item, i) => {
							return (
								<div className="col-lg-3 col-12" key={i}>
									<div style={{height:'440px'}} className="listCard mb-3 d-block relative">
										{
											item.cover_photo_thumbnail !== undefined ?
											<img
											src={item.cover_photo_thumbnail}
											alt="Card"
											style={{ width: "200px", height: "140px" }}
											className="cursor-pointer"
											onClick={() => {
												history.push(`/ad-details/${item.id}`);
													}}
												
												/> :
												<img
												src={'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}
												alt="Card"
												style={{ width: "200px", height: "140px" }}
												className="cursor-pointer"
												onClick={() => {
													history.push(`/ad-details/${item.id}`);
														}}
													
													/>	
										}
										
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
												{item.call_for_price === true ?
													'Call for price'
														:
													item.price_currency + ' '+ item.price
												}
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

	const handleGetPdf = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
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
				"nil",
				currentUser.id,
				'pdf'
			);

      if (result.error === false) {
        toast.dismiss(loadingToastId);

        window.open(`${result.data.file_path}`, "_blank");
      } else {
        toast.dismiss(loadingToastId);
      }
    } catch (e) {
      toast.dismiss(loadingToastId);
      console.error(e);
    }
  };

  const handleGetCsv = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
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
				"nil",
				currentUser.id,
				'csv'
			);
      if (result.error === false) {
        toast.dismiss(loadingToastId);

        window.open(`${result.data.file_path}`, "_blank");
      } else {
        toast.dismiss(loadingToastId);
      }
    } catch (e) {
      toast.dismiss(loadingToastId);
      console.error(e);
    }
	};

	function MyVerticallyCenteredModal(props) {
		return (
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Upload Csv to update products
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Csv</h4>
					<p>
						<input onChange={(e) => {formDataForCsv.append('file',e.target.files[0])}} required="required" accept=".csv" type="file" name="bulk_import[file]" id="bulk_import_file"/>
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
					<Button onClick={() => { handleCsvUpload()}}>Upload</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	const handleCsvUpload = async() => {
		try {
			const loadingToastId = toast.loading("Loading..!");
			const result = await productApis.importDataFormCsv(formDataForCsv)
			if (result.error === false && result.data.status === "success") {
				toast.dismiss(loadingToastId);
				setModalShow(false)
				toast.success('products imported successfully')
				if (result.data.data.prducts_not_updated.length > 0) {
					toast(
						`Products with these id not found: ${result.data.data.prducts_not_updated.length}`,
						{
							duration: 10000,
						}
					);
				}
				setTabs({...tabs,active:true});
			}
			if (result.error === false && result.data.status === "error") {
				toast.dismiss(loadingToastId);
				setModalShow(false)
				toast.error('Import failed')

				toast(
					`${result.data.data.message}`,
					{
						duration: 10000,
					}
				);
			}

		} catch (err) {
			console.error(err)
		}
	}

  return (
    <div className="mb-4">
      <div className="">
				<div className="tabs-style-three " >
					<div className="d-flex mb-2">
					<div className={`${isMobile ? "" : "d-flex mt-3"}`}>
                <FormControl
                  type="text"
                  onKeyUp={(event) => handleMainSearch(event)}
                  placeholder="Main Search..."
                  style={{ marginTop: "-10px" }}
                />
                <select
                  onChange={(e) => {
                    setNoOfRec(e.target.value);
                    // getProducts(1, mainSearchString, e.target.value);
                  }}
                  className={`${
                    isMobile ? "mt-3" : "adjustNoOfRecSelect"
                  } form-control col-5 mb-2`}
                  id="sortby"
                  name="no of rec per page"
                >
                  <option value="" disabled selected={true}>
                    No of Records per page
                  </option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                  <option value="60">60</option>
                  <option value="70">70</option>
                  <option value="80">80</option>
                </select>
              </div>
							<OverlayTrigger overlay={<Tooltip id="button-tooltip-2">Update products through Csv</Tooltip>}>
								<Image
									onClick={() =>setModalShow(true)	}
									className="ml-auto clickableSvg mr-2 importSvg"
									src={ImportImg}
									height="50px"
									width="50px"
									alt="import Svg"
								/>
							</OverlayTrigger>
							<OverlayTrigger overlay={<Tooltip id="button-tooltip-2">Download Csv</Tooltip>}>
								<Image
									onClick={() => {
										handleGetCsv();
									}}
									className="clickableSvg mr-2"
									src={csvSvg}
									height="50px"
									width="50px"
									alt="Profile Image"
									/>
							</OverlayTrigger>

							<OverlayTrigger overlay={<Tooltip id="button-tooltip-2">Download Pdf</Tooltip>}>
								<Image
									onClick={() => {
										handleGetPdf();
									}}
									className="clickableSvg"
									src={pdfSvg}
									height="50px"
									width="50px"
									alt="Profile Image"
									/>
							</OverlayTrigger>								
						</div>
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
						<p>fdjsifjsdifa</p>
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
			<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default myAds;
