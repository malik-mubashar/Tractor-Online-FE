import React, { useContext, useState, useEffect } from "react";
import { Col, Modal, Image, Button } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Icofont from "react-icofont";
import { isMobile } from "react-device-detect";
import * as Icon from "react-feather";
import { useHistory } from "react-router-dom";
import CustomPopover from "./CustomPopover";
import TractorClipart from "../../assets/svg/tractor-logo.svg";
import Buyers from "../../assets/img/buyers.png";
import { RootContext } from "../../context/RootContext";
import LoginModel from "../LoginModel";
import { Link } from "react-router-dom";
import { productApis } from "../../API/ProductApis";
import toast from "react-hot-toast";
import RightArrow from '../../assets/img/right-arrow.png';
import LeftArrow from '../../assets/img/left-arrow.png';

export default function SearchListing({
  products,
  pagination,
  noOfRec,
  handleGetAllProducts,
  searchFilters,
}) {
  const [showNumberWarning, setShowNumberWarning] = useState(true);
  let history = useHistory();
  const [openShowPhone, setOpenShowPhone] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [redirect, setRedirect] = useState("/product/sell");
  const [gridOrList, setGridOrList] = useState("list");
  const [productUpdate, setProductUpdate] = useState(products);
  const onShowPhoneModelClose = () => {
    setOpenShowPhone(false);
  };
  const { websiteName, currentUser } = useContext(RootContext);

  useEffect(() => {
    setProductUpdate(products);
  }, [products]);

  function handleFavouriteAd(e) {
    if (currentUser === undefined || currentUser === null) {
      setModalShow(true);
      setRedirect(null);
    } else {
      var product = e;
      var user_id = currentUser.id;
      favourite_ad(product, user_id);
    }
  }

  const favourite_ad = async (product, user_id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await productApis.favouriteAds(product.id, user_id);
      if (result.error === false) {
        toast.success(result.data.notice);
        setProductUpdate((products) =>
          products.map((pr) => {
            if (pr.id === product.id) {
              return { ...pr, favourite: !pr.favourite };
            }
            return pr;
          })
        );
        toast.dismiss(loadingToastId);
        // setBrands(result.data.data);
      } else {
        toast.dismiss(loadingToastId);
        console.error(result.data);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };

  return (
    <>
      <Col sm={12} lg={12} xl={12}>
        <div className="topSorting">
          <div className="organize-results">
            <div className="col-md-8 d-flex" style={{ marginTop: "10px" }}>
              <span className="sort-by-text mt-2 mr-2">Sort By: </span>
              <select
                className="form-control col-7 mb-2"
                id="sortby"
                name="sortby"
              >
                <option value="bumped_at-desc" selected="selected">
                  Updated Date: Recent First
                </option>
                <option value="bumped_at-asc">
                  Updated Date: Oldest First
                </option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="model_year-desc">
                  Model Year: Latest First
                </option>
                <option value="model_year-asc">Model Year: Oldest First</option>
                <option value="mileage-asc">Mileage: Low to High</option>
                <option value="mileage-desc">Mileage: High to Low</option>
              </select>
            </div>

            {!isMobile && (
              <div className="col-md-4 mt5 text-right ex">
                <div
                  className="btn-group"
                  data-toggle="buttons-radio"
                  style={{ marginTop: "10px" }}
                >
                  <BootstrapSwitchButton
                    className="col-md-8 d-flex"
                    checked={true}
                    onstyle="danger"
                    offstyle="info"
                    onlabel="Grid"
                    offlabel="List"
                    onChange={(checked) => {
                      if (checked) {
                        setGridOrList("list");
                      } else {
                        setGridOrList("grid");
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={gridOrList === "list" ? "" : "row"}>
          {productUpdate && productUpdate.length > 0 ? (
            productUpdate.map((item) => {
              return (
                <>
                  <div className={`${gridOrList === "list" ? "" : "col-4"}`}>
                    <div
                      className={`listCard mb-3 ${
                        gridOrList === "list" ? "list relative" : "d-block relative"
                      } ${isMobile ? "d-block relative" : null}`}
                    >
                      <img
                        className="cursor-pointer"
                        // className={gridOrList==='list'?'list':'grid'}
                        src={item.cover_photo_path}
                        alt="Card"
                        style={{ width: "200px", height: "140px" }}
                        onClick={() => {
                          history.push(`/ad-details/${item.id}`);
                        }}
                      />
                      <div style={{ width: "100%" }}>
                        <div
                          className={
                            gridOrList === "list"
                              ? "d-flex justify-content-between"
                              : "mt-2"
                          }
                        >
                          <h5
                            className={
                              gridOrList === "list"
                                ? "cursor-pointer ml-3"
                                : "cursor-pointer truncate-search-page"
                            }
                            title={item.title}
                            onClick={() => {
                              history.push(`/ad-details/${item.id}`);
                            }}
                          >
                            {item.title}
                          </h5>
                          <h5
                            className={
                              gridOrList === "list"
                                ? "cursor-pointer ml-3"
                                : "cursor-pointer"
                            }
                            onClick={() => {
                              history.push(`/ad-details/${item.id}`);
                            }}
                          >
                            PKR {item.price}
                          </h5>
                          {item.featured ? (
                            <span className="featuredBand">Featured</span>
                          ) : null}
                        </div>
                        <p className={gridOrList === "list" ? " ml-3" : null}>
                          <Icofont
                            icon="location-pin"
                            className="icofont text-primary mr-1"
                          />
                          {item.city}
                        </p>
                        <p
                          className={
                            gridOrList === "list"
                              ? " ml-3"
                              : "truncate-search-page"
                          }
                        >
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
                        <p
                          className={
                            gridOrList === "list"
                              ? " ml-3"
                              : "truncate-search-page"
                          }
                        >
                          {item.extra_fields &&
                          Object.entries(item.extra_fields).length > 0 ? (
                            <>
                              {item.extra_fields &&
                                Object.entries(item.extra_fields).map(
                                  (item2, i) => {
                                    return (
                                      <>
                                        <span>
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
                        <div
                          className={`card-text ${
                            gridOrList === "list" ? " ml-3" : null
                          } ${
                            isMobile
                              ? ""
                              : gridOrList === "list"
                              ? "d-flex"
                              : ""
                          } `}
                          style={{ justifyContent: "space-between" }}
                        >
                          <small className="text-muted">
                            Last updated {item.updated_at.split(",")[0]} ago
                          </small>
                          <div className="d-flex">
                            <button
                              className="mr-3 btn p-2"
                              type="submit"
                              // value={item}
                              onClick={() => handleFavouriteAd(item)}
                            >
                              {item.favourite ? (
                                <Icofont
                                  icon="heart"
                                  className="icofont text-danger"
                                  style={{ fontSize: "17px" }}
                                />
                              ) : (
                                <Icon.Heart
                                  style={{ height: "16px", width: "16px" }}
                                  className="icon"
                                />
                              )}
                            </button>
                            {showNumberWarning ? (
                              <button
                                onClick={() => {
                                  setOpenShowPhone(true);
                                }}
                                className="btn btn-success px-1"
                                type="submit"
                              >
                                <Icon.PhoneCall
                                  style={{ height: "14px" }}
                                  className="icon"
                                />
                                Show Phone Number
                              </button>
                            ) : (
                              <>
                                <CustomPopover phoneNo={item.phone_no} />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div
              style={{
                textAlign: "center",
                background: "white",
                fontSize: "x-large",
              }}
            >
              No Products
            </div>
          )}
        </div>
        {/* <div className="pagination">
          <span className="mx-auto">
            1&nbsp;2&nbsp;3&nbsp;4&nbsp;&nbsp;...&nbsp;&nbsp;Next
            &nbsp;&nbsp;Last
          </span>
        </div> */}
        {pagination && pagination && (
          <div>
            <span>Rows per page</span>
            <span className="mx-4">
              <b>
                {pagination.from}-{pagination.to}{" "}
              </b>
              of <b>{pagination.count}</b> Results
            </span>

            <button
              className={`pagination-button ${
                pagination.page === 1 ? "disabled" : ""
              }`}
              onClick={() => {
                handleGetAllProducts(
                  1,
                  noOfRec,
                  searchFilters.city,
                  searchFilters.priceRangeTo,
                  searchFilters.priceRangeFrom,
                  searchFilters.featured,
                  searchFilters.title,
                  searchFilters.brand,
                  searchFilters.categoryId
                );
              }}
              type="button"
            >
              <span class="MuiIconButton-label">
                <svg
                  class="MuiSvgIcon-root"
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
                pagination.page === 1 ? "disabled" : ""
              }`}
              onClick={() => {
                handleGetAllProducts(
                  pagination.prev,
                  noOfRec,
                  searchFilters.city,
                  searchFilters.priceRangeTo,
                  searchFilters.priceRangeFrom,
                  searchFilters.featured,
                  searchFilters.title,
                  searchFilters.brand,
                  searchFilters.categoryId
                );
              }}
              type="button"
            >
              <span class="MuiIconButton-label">
                <svg
                  class="MuiSvgIcon-root"
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
                pagination.page === pagination.last ? "disabled" : ""
              }`}
              tabindex="0"
              type="button"
              onClick={() => {
                handleGetAllProducts(
                  pagination.next,
                  noOfRec,
                  searchFilters.city,
                  searchFilters.priceRangeTo,
                  searchFilters.priceRangeFrom,
                  searchFilters.featured,
                  searchFilters.title,
                  searchFilters.brand,
                  searchFilters.categoryId
                );
              }}
            >
              <span class="MuiIconButton-label">
                <svg
                  class="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                </svg>
              </span>
              <span class="MuiTouchRipple-root"></span>
            </button>

            <button
              className={`pagination-button ${
                pagination.page === pagination.last ? "disabled" : ""
              }`}
              tabindex="0"
              type="button"
              onClick={() => {
                handleGetAllProducts(
                  pagination.last,
                  noOfRec,
                  searchFilters.city,
                  searchFilters.priceRangeTo,
                  searchFilters.priceRangeFrom,
                  searchFilters.featured,
                  searchFilters.title,
                  searchFilters.brand,
                  searchFilters.categoryId
                );
              }}
            >
              <span class="MuiIconButton-label">
                <svg
                  class="MuiSvgIcon-root"
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
        <div className="sellAdd clearfix text-center p20 mt-70">
          <img
            alt="Post an Ad"
            src={TractorClipart}
            title="Post an Ad"
            height="80px"
            width="80px"
          />

          <h3 className="title">Post an ad for FREE</h3>
          <p className="mt10 mb5 fs16">
            Sell it to thousands of people in a shorter period of time.
          </p>
          <div>
            <img
              alt="Post an Ad Left"
              src={LeftArrow}
            />
            {localStorage.currentUser === undefined ? (
              <>
                <LoginModel
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  setModalShow={setModalShow}
                  redirect={redirect}
                />
                <button
                  style={{ color: "white" }}
                  onClick={() => setModalShow(true)}
                  className="btn btn-success sign-in-comp"
                >
                  Sell Your Tractor
                </button>
              </>
            ) : (
              <Link
                style={{ color: "white" }}
                to="/product/sell"
                className="btn btn-success sign-in-comp"
              >
                Sell Your Tractor
              </Link>
            )}

            <img
              alt="Post an Ad Right"
              src={RightArrow}
            />
          </div>
        </div>
      </Col>

      {/* Modal */}
      <Modal show={openShowPhone} onHide={onShowPhoneModelClose}>
        <Modal.Body>
          <div className="d-flex">
            <Icofont
              icon="close-line"
              className="icofont-2x ml-auto cursor-pointer"
              onClick={() => {
                setOpenShowPhone(false);
              }}
            />
          </div>
          <div className="text-center">
            <Image src={Buyers} alt="Logo" height="80px" width="80px" />
          </div>
          <h4 className="text-center">Advice for Safe Dealing</h4>
          <div className="">
            <div className="row my-3">
              <div className="col-1 ml-auto">
                <Icofont icon="not-allowed" className="icofont-2x" />
              </div>
              <div className="col-6 mr-auto">
                <strong>Never pay for anything in advance.</strong>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-1 ml-auto">
                <Icofont icon="code-not-allowed" className="icofont-2x" />
              </div>
              <div className="col-6 mr-auto">
                <strong>Keep your personal details to yourself.</strong>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-1 ml-auto">
                <Icofont icon="flag" className="icofont-2x" />
              </div>
              <div className="col-6 mr-auto">
                <strong>
                  Inform {websiteName} about any untrustworthy users.
                </strong>
              </div>
            </div>
            <div className="text-center">
              <Button
                variant="primary"
                onClick={() => {
                  setShowNumberWarning(false);
                  setOpenShowPhone(false);
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
