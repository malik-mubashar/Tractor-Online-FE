import React, { useContext, useEffect, useState } from "react";
import CustomPopover from "../usedTractor/CustomPopover";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { productApis } from "../../API/ProductApis";
import Icofont from "react-icofont";
import { RootContext } from "../../context/RootContext";
import toast from "react-hot-toast";

export default function savedAds({ products }) {
  let history = useHistory();
  const [favouriteProducts, setFavouriteProducts] = useState("");

  useEffect(() => {
    setShowLoader(true);
    getFavouriteProducts();
  }, []);

  const getFavouriteProducts = async () => {
    const result = await productApis.getfavouriteProducts();
    if (result.error === false) {
      setShowLoader(false);
      setFavouriteProducts(result.data && result.data.data);
    }
  };

  function handleFavouriteAd(e) {
    if (currentUser === undefined || currentUser === null) {
    } else {
      var product = e;
      var user_id = currentUser.id;
      favourite_ad(product, user_id);
    }
  }
  const { currentUser, setShowLoader } = useContext(RootContext);

  const favourite_ad = async (product, user_id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await productApis.favouriteAds(product.id, user_id);
      if (result.error === false) {
        toast.success(result.data.notice);
        toast.dismiss(loadingToastId);
        getFavouriteProducts();
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
    <div className="container">
      <div className="row">
        {favouriteProducts &&
          favouriteProducts.map((item) => {
            return (
              <div className="col-lg-3 col-12">
                <div
                  className={`listCard mb-3 relative ${"d-block"} ${
                    isMobile ? "d-block" : null
                  }`}
                >
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
                        className={"cursor-pointer truncate-search-page"}
                        onClick={() => {
                          history.push(`/ad-details/${item.id}`);
                        }}
                      >
                        {item.title}
                      </h5>
                      <h5 className={"cursor-pointer"}>PKR {item.price}</h5>
                      {item.featured ? (
                    <span className="featuredBand">Featured</span>
                  ) : null}
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
                        {item.product_category && item.product_category.title}
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
                                      Object.keys(item.extra_fields).length ? (
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
                        Last updated {item.updated_at.split(",")[0]} ago
                      </p>
                      <div className="d-flex">
                        <button
                          className="mr-3 btn p-1"
                          type="submit"
                          onClick={() => handleFavouriteAd(item)}
                        >
                          <Icofont
                            icon="heart"
                            className="icofont text-danger"
                            style={{ fontSize: "17px" }}
                          />
                        </button>
                        <CustomPopover phoneNo={item.phone_no} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
