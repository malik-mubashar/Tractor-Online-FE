import React, { useState, useEffect, useContext } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { productApis } from "../../API/ProductApis";
import { RootContext } from "../../context/RootContext";
import Icofont from "react-icofont";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

const myAds = () => {
  const [activeProducts, setActiveProducts] = useState([]);
  const [InactiveProducts, setInactiveProducts] = useState([]);
  const { currentUser, setShowLoader } = useContext(RootContext);
  let history = useHistory();

  useEffect(() => {
    handleGetActiveProducts();
    handleGetInactiveProducts();
  }, []);

  const handleGetActiveProducts = async () => {
    setShowLoader(true);
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
      "active",
      currentUser.id
    );
    if (result.error === false) {
      setShowLoader(false);
      setActiveProducts(result.data && result.data.data);
    }
  };

  const handleGetInactiveProducts = async () => {
    setShowLoader(true);
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
      setShowLoader(false);
      setInactiveProducts(result.data && result.data.data);
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

  return (
    <div className="mb-4">
      <div className="">
        <div className="tabs-style-three">
          <Tabs defaultActiveKey="Active" id="uncontrolled-tab-example">
            <Tab eventKey="Active" title="Active">
              {activeProducts.length > 0 ? (
                <div className="row">
                  {activeProducts &&
                    activeProducts.map((item, i) => {
                      return (
                        <div className="col-lg-3 col-12" key={i}>
                          <div className="listCard mb-3 d-block">
                            <img
                              src={item.cover_photo_path}
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
                              <div style={{ justifyContent: "space-between" }}>
                                <p className="text-muted">
                                  Last updated{" "}
                                  {item.updated_at &&
                                    item.updated_at.split(",")[0]}{" "}
                                  ago
                                </p>
                                <div className="text-center">
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
              )}
            </Tab>
            <Tab eventKey="Inactive" title="Inactive">
              {InactiveProducts.length > 0 ? (
                <div className="row">
                  {InactiveProducts &&
                    InactiveProducts.map((item, i) => {
                      return (
                        <div className="col-lg-3 col-12" key={i}>
                          <div className="listCard mb-3 d-block">
                            <img
                              src={item.cover_photo_path}
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
                              <div style={{ justifyContent: "space-between" }}>
                                <p className="text-muted">
                                  Last updated{" "}
                                  {item.updated_at &&
                                    item.updated_at.split(",")[0]}{" "}
                                  ago
                                </p>
                                <div className="text-center">
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
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <h4 className="text-center">No Inactive Ads</h4>
              )}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default myAds;
