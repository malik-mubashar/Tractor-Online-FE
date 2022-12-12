import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import { Image, Form } from "react-bootstrap";
import Ads from "../../assets/img/ads.png";
import Buyers from "../../assets/img/buyers.png";
import Sell from "../../assets/img/sell.png";
import FeaturedProducts from "../LandingPage/FeaturedProducts";
import { useHistory, useLocation } from "react-router-dom";
import "../Categories/SideMenue.css";
import { city } from "../../API/City/CityApis";
import { prodApi } from "../../API/ProdCategoriesApis";
import { RootContext } from "../../context/RootContext";
import LoginModel from "../LoginModel";

export default function UsedTractor() {
  const history = useHistory();

  const { setLandingPageSearchOptions } = useContext(RootContext);

  const [tractorModel, setTractorModel] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const [cities, setCities] = useState("");
  const [minPrice, setMinPrice] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [prodCategories, setProdCategories] = useState();
  const search = useLocation().search;
  var category = new URLSearchParams(search).get("category");
  useEffect(() => {
    handleGetAllProductCategories();
  }, []);

  const getAllCity = async () => {
    const result = await city.getAllCity();
    const tempArray = [];
    result &&
      result.data &&
      result.data.data.map((item) =>
        tempArray.push({ ...item, label: item.title, value: item.title })
      );
    setCities(tempArray);
  };
  const handleGetAllProductCategories = async () => {
    const result = await prodApi.getAllProductCategories();
    if (result.error === false) {
      setProdCategories(result.data && result.data.data);
    }
  };

  const [maxPrice, setMaxPrice] = useState();
  const [minPriceOptions, setMinPriceOptions] = useState([
    { label: "10000", value: "10000" },
    { label: "20000", value: "20000" },
    { label: "30000", value: "30000" },
    { label: "40000", value: "40000" },
    { label: "50000", value: "50000" },
    { label: "60000", value: "60000" },
    { label: "70000", value: "70000" },
  ]);
  const [maxPriceOptions, setMaxPriceOptions] = useState([
    { label: "100000", value: "100000" },
    { label: "200000", value: "200000" },
    { label: "300000", value: "300000" },
    { label: "400000", value: "400000" },
    { label: "500000", value: "500000" },
    { label: "600000", value: "600000" },
    { label: "700000", value: "700000" },
  ]);

  useEffect(() => {
    if (minPrice) {
      let temp = maxPriceOptions.filter(function(x) {
        return parseInt(x.label) > parseInt(minPrice);
      });
      setMaxPriceOptions(temp);
    }
  }, [minPrice]);
  useEffect(() => {
    if (maxPrice) {
      let temp = minPriceOptions.filter(function(x) {
        return parseInt(x.label) < parseInt(maxPrice);
      });
      setMinPriceOptions(temp);
    }
  }, [maxPrice]);

  useEffect(() => {
    getAllCity();
  }, []);

  function postAdd() {
    if (localStorage.currentUser === undefined) {
      setModalShow(true);
    } else {
      history.push("/product/sell/");
    }
  }

  return (
    <div className="usedTractorMain pt-3">
      <div className="usedTractorsContainer">
        <div className="container">
          <h1>
            Find{" "}
            {prodCategories &&
              prodCategories.find((cate) => cate.id == category).title}{" "}
            in Pakistan
          </h1>
          <p>With thousand of Tractors,we have just the right one for you</p>
        </div>
      </div>
      <div className="container">
        <div className="searchCard card">
          <div className="row mt-3">
            <div className="col-12 col-lg-4 my-2">
              <Form.Group>
                <Form.Control
                  className="searchTitle fieldHeight"
                  placeholder="Search by Name...."
                  type="email"
                  onChange={(event) => setTractorModel(event.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <Select
                className="fieldHeight mainSearch"
                options={cities}
                label="Select City"
                placeholder="Select City"
                onChange={(e) => setCitySelected(e.label)}
                clearable={false}
              />
            </div>
            <div className="col-12 col-lg-4 my-2 d-flex">
              <Select
                className="col-6 px-0 fieldHeight mainSearch"
                options={minPriceOptions}
                label="Select Min Price "
                placeholder="Select Min Price"
                onChange={(e) => setMinPrice(e.label)}
                clearable={false}
              />
              <Select
                className="col-6 px-0 fieldHeight mainSearch"
                options={maxPriceOptions}
                label="Select Max Price"
                placeholder="Select Max Price"
                onChange={(e) => setMaxPrice(e.label)}
                clearable={false}
              />
            </div>
          </div>
          <div className="d-flex mt-4">
            <button
              className="btn btn-success col-12 col-lg-2 ml-auto mr-2"
              type="submit"
              onClick={() => {
                setLandingPageSearchOptions({
                  city: citySelected || "nil",
                  priceRangeTo: maxPrice || "nil",
                  priceRangeFrom: minPrice || "nil",
                  title: tractorModel || "nil",
                });
                // history.push(`/products/search?category=${category}`);
                history.push(
                  `/products/search?category=${category}&city=${citySelected ||
                    "nil"}&priceRangeTo=${maxPrice ||
                    "nil"}&priceRangeFrom=${minPrice ||
                    "nil"}&title=${tractorModel || "nil"}`
                );
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="container row ml-4">
          <div className="col-12 col-lg-3 text-center align-items-center justify-content-center d-flex">
            <div>
              <Image src={Ads} alt="Logo" height="80px" width="80px" />
              <h5>Free Ad</h5>
              <p>In 30 seconds, post a free ad for your tractor.</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 text-center align-items-center justify-content-center d-flex">
            <div>
              <Image src={Buyers} alt="Logo" height="80px" width="80px" />
              <h5>Genuine Buyers</h5>
              <p>Receive genuine offers from confirmed purchasers.</p>
            </div>
          </div>
          <div className="col-12 col-lg-3 text-center align-items-center justify-content-center d-flex">
            <div>
              <Image src={Sell} alt="Logo" height="80px" width="80px" />
              <h5>Sell Faster</h5>
              <p>
                Sell your tractor at a higher price and faster than competitors.
              </p>
            </div>
          </div>
          <LoginModel
            show={modalShow}
            onHide={() => setModalShow(false)}
            setModalShow={setModalShow}
            redirect="/product/sell"
          />
          <div className="col-12 col-lg-3 text-center align-items-center justify-content-center d-flex">
            <button
              onClick={() => postAdd()}
              className="btn btn-danger btn-lg text-white mr-2"
            >
              Post An Add
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white my-4">
        <div className="container-lg py-4 ">
          <FeaturedProducts
            title={
              category
                ? prodCategories &&
                  prodCategories.find((cate) => cate.id == category).title
                : "Products"
            }
            link={``}
            prodCategoryId={category}
          />
        </div>
      </div>
    </div>
  );
}
