import React, { useState, useEffect } from "react";
import UploadPhotoLogo from "../../assets/img/upload-photos-logo.png"
import ProductsLogo from "../../assets/img/products-logo.png"
import PriceLogo from "../../assets/img/price-logo.png"
import { city } from "../../API/City/CityApis";
import { Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";

const postad = () => {

  const [cities, setCities] = useState([]);
  const [productsState, setProductsState] = useState({
    isEditProduct: false,
    isAddProduct: false,
    products: null,
    originalProducts: null,
    status: "active",
    description: "",
    price: "",
    location: "",
    link: "",
    city: "",
    phone_no: "",
  });

  useEffect(() => {
    getAllCity()
  }, []);

  const getAllCity = async () => {
    const result = await city.getAllCities();
    const tempArray = [];
    result &&
      result.data &&
      result.data.data.map((item) =>
        tempArray.push({ ...item, label: item.title, value: item.title })
      );
    setCities(tempArray);
  };

  return (
    <>
      <div className="card text-center my-4 py-4">
        <h2 className="post-ad-heading">3 Simple Steps to Sell Your Product!</h2>
        <h5>It takes under a minute and is free.</h5>
        <div>
          <img className="post-add-images-logo mx-2" src={UploadPhotoLogo} height="60px" width="60px" alt="no" />
          <b>Enter Your Product Information </b>
          <img className="post-add-images-logo mx-2" src={ProductsLogo} height="60px" width="60px" alt="no" />
          <b>Upload Photos</b>
          <img className="post-add-images-logo mx-2" src={PriceLogo} height="60px" width="60px" alt="no" />
          <b>Enter Your Selling Price</b>
        </div>
      </div>
      <div className="container card my-4 py-4">
        <h3 className="post-ad-heading">Car Information</h3>
        <b>(All fields marked with * are mandatory)</b>
        <div className="row">
          <div className="col-3 text-right">
            <Form.Label>City</Form.Label>
          </div>
          <div className="addEditProd col-4">
            <Select
              className="ui-autocomplete-input form-control searchAble border-right "
              options={cities}
              //setValue={setCountry}
              name="city"
              label="Select City"
              value={productsState.city}
              placeholder="Select City"
              onChange={(e) => {
                if (e)
                setProductsState({
                  ...productsState,
                  city: e.title,
                });
              }}
              clearable={false}
            />
          </div>
          <div className="col-5">
            We don't permit advertising messages that aren't relevant to the advertisement.
          </div>
          To receive more sincere responses, please enter a reasonable price.
        </div>
      </div>
    </>
  );
};

export default postad;
