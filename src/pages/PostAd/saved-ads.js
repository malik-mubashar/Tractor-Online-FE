import React, { useContext, useEffect, useState } from "react";
import CustomPopover from "../usedTractor/CustomPopover";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import * as Icon from "react-feather";
import { productApis } from "../../API/ProductApis";
import team from "../../assets/img/team.jpg";
import Icofont from "react-icofont";
import { RootContext } from "../../context/RootContext";
import toast from "react-hot-toast";

export default function savedAds ({products}) 
{
  const [showNumberWarning, setShowNumberWarning] = useState(true);
  let history = useHistory();
  const [openShowPhone, setOpenShowPhone] = useState(false);
  const [favouriteProducts, setFavouriteProducts] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [redirect, setRedirect] = useState("/product/sell");
  const [productUpdate, setProductUpdate] = useState(products);
  const onShowPhoneModelClose = () => {
    setOpenShowPhone(false);
  };
  useEffect(() => {
    getFavouriteProducts();
  }, []);

  const getFavouriteProducts = async () => {
    const result = await productApis.getfavouriteProducts();
    if (result.error === false) {
      setFavouriteProducts(result.data && result.data.data);
    }
  };
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
  const   { currentUser } = useContext(RootContext);

  

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
    <div className="d-flex">
      {favouriteProducts &&
        favouriteProducts.map((item) => {
          return (
            <div className="col-5">
              <div
                className={`listCard mb-3 ${"d-block"} ${
                  isMobile ? "d-block" : null
                }`}
              >
                <img
                  src={item.cover_photo_path}
                  alt="Card"
                  style={{ width: "200px", height: "140px" }}
                />
                <div style={{ width: "100%" }}>
                  <div className={"mt-2"}>
                    <h5
                      className={"cursor-pointer"}
                      onClick={() => {
                        history.push(`/add-details/${item.id}`);
                      }}
                    >
                      {item.title}
                    </h5>
                    <h5 className={"cursor-pointer"}>{item.price}</h5>
                  </div>
                  <p className={null}>{item.location}</p>
                  <p style={{ paddingLeft: "8px" }}>
                    2008 | 111,123 km | Petrol | 2700cc | Automatic | 4.5 Grade
                  </p>
                  <div style={{ justifyContent: "space-between" }}>
                    <small
                      className="text-muted"
                      style={{ paddingLeft: "8px" }}
                    >
                      Last updated 3 mins ago
                    </small>
                    <div className="d-flex">
                      <button
                        className="mr-3 btn btn-outline-primary p-1"
                        type="submit"
                        onClick={() => handleFavouriteAd(item)}
                      >
                        <Icofont
                          icon="heart"
                          className="icofont text-danger"
                          style={{ fontSize: "17px" }}
                        />
                      </button>
                      {showNumberWarning ? (
                        <button
                          onClick={() => {
                            setOpenShowPhone(true);
                            setShowNumberWarning(false);
                          }}
                          className="btn-success"
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
                          <CustomPopover />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};


