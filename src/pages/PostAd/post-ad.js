import React, { useState, useEffect } from "react";
import UploadPhotoLogo from "../../assets/img/upload-photos-logo.png"
import ProductsLogo from "../../assets/img/products-logo.png"
import PriceLogo from "../../assets/img/price-logo.png"
import { city } from "../../API/City/CityApis";
import { Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import Icofont from "react-icofont";

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

  const [fieldsWithError, setFieldsWithError] = useState({
    description: false,
    icon: false,
    // link: false,
    product_category_id: false,
    status: false,
    title: false,
    phone_no: false,
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

  function handleChange(evt) {
    setProductsState({
      ...productsState,
      [evt.target.name]: evt.target.value,
    });
  }

  return (
    <>
      <div className="card text-center my-4 py-4">
        <h2 className="post-ad-heading">2 Simple Steps to Sell Your Product!</h2>
        <h5>It takes under a minute and is free.</h5>
        <div>
          <img className="post-add-images-logo mx-2" src={ProductsLogo} height="60px" width="60px" alt="no" />
          <b>Enter Your Product Information </b>
          <img className="post-add-images-logo mx-2" src={UploadPhotoLogo} height="60px" width="60px" alt="no" />
          <b>Upload Photos</b>
        </div>
      </div>
      <div className="container card my-4 p-5">
        <h3 className="post-ad-heading">Product Information</h3>
        <b>(All fields marked with * are mandatory)</b>
        <div className="row my-2">
          <div className="col-3 text-right">
            <Form.Label>Title</Form.Label>
          </div>
          <div className="addEditProd col-4">
            <Form.Group controlId="formBasicName">
              <Form.Control
                className={
                  fieldsWithError.title === true ? "border-danger" : ""
                }
                defaultValue={productsState.title}
                name="title"
                type="text"
                placeholder="Enter Product Title"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </div>
          <div className="col-5 d-flex">
            <Icofont
              icon="light-bulb text-info"
              className="icofont-2x col-2"
              style={{fontSize: "3rem"}}
            />
            <span className="col-10 mt-3">We don't allow duplicates of same ad.</span>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-3 text-right">
            <Form.Label>City</Form.Label>
          </div>
          <div className="addEditProd col-4">
            <Select
              className="ui-autocomplete-input form-control searchAble"
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
        </div>
        <div className="row my-2">
          <div className="col-3 text-right">
            <Form.Label>Price</Form.Label>
          </div>
          <div className="addEditProd col-4">
            <Form.Control
              className={
                fieldsWithError.price === true ? "border-danger" : ""
              }
              defaultValue={productsState.price}
              name="price"
              type="text"
              placeholder="price"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-5">
            <Icofont
              icon="light-bulb text-info"
              className="icofont-2x col-3"
              style={{fontSize: "3rem"}}
            />
            <span className="col-9">To receive more sincere responses, please enter a reasonable price.</span>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-3 text-right">
            <Form.Label>Phone Number</Form.Label>
          </div>
          <div className="addEditProd col-4">
            <Form.Control
              className={
                fieldsWithError.phone_no === true ? "border-danger" : ""
              }
              defaultValue={productsState.phone_no}
              name="phone_no"
              type="text"
              placeholder="Phone Number"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-3 text-right">
            <Form.Label>Address</Form.Label>
          </div>
          <div className="addEditProd col-4">
            <Form.Control
              className={
                fieldsWithError.location === true ? "border-danger" : ""
              }
              defaultValue={productsState.location}
              name="location"
              type="text"
              placeholder="Address"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-3 text-right">
            <Form.Label>Description</Form.Label>
          </div>
          <div className="addEditProd col-8">
            <Form.Control
              className={
                fieldsWithError.description === true
                  ? "border-danger"
                  : ""
              }
              defaultValue={productsState.description}
              name="description"
              as="textarea"
              rows={5}
              placeholder="Describe Your Product:&#10;Example: Condition, first owner, genuine parts, if Tractor excellent mileage, original paint etc."
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
      <div className="container card my-4 p-5">
        <h3 className="post-ad-heading">Upload Photos</h3>
        <div className="my-2">
          <div className="upload-image-container">
            <div className="d-flex text-center">
              <img className="post-add-images-logo mx-2 ml-auto mr-4" src={UploadPhotoLogo} height="70px" width="70px" alt="no" />
              <div className="mr-auto mt-2 text-center">
                <button className="btn btn-success mb-2">+ Add Photos</button>
                <p>(Max limit 5 MB per image)</p>
              </div>
            </div>
            <div className="row my-4">
              <div class="col-md-5 d-flex ml-auto">
                <Icofont
                  icon="check-circled text-success"
                  className="icofont-2x col-1"
                />
                <span className="col-11"><strong>Adding at least 8 pictures </strong> enhances the possibility of a rapid sale.</span>
              </div>
              <div class="col-md-5 d-flex mr-auto">
                <Icofont
                  icon="check-circled text-success"
                  className="icofont-2x col-1"
                />
                <span className="col-11"><strong>Adding clear Front, Back and Interior pictures </strong> the quality of your advertisement and makes you more noticeable.</span>
              </div>
            </div>
            <div className="row my-4">
              <div class="col-md-5 d-flex mx-auto">
                <Icofont
                  icon="check-circled text-success"
                  className="icofont-2x col-1"
                />
                <span className="col-11"><strong>Photos should be </strong> in 'jpeg, jpg, png, gif' format only.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default postad;
