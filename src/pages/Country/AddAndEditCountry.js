import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { country } from "../../API/Country/CountryApis";

export default function AddAndEditCountry({
  countryState,
  setCountryState,
  getCountries,
}) {
  const fieldsMap = [{ name: "title", required: true }];
  const [fieldsWithError, setFieldsWithError] = useState({
    title: false,
  });

  const doValidation = () => {
    var tempFieldsWithError = {};
    fieldsMap.forEach((fieldDetail) => {
      console.log(countryState);
      if (
        countryState[fieldDetail.name] == undefined ||
        countryState[fieldDetail.name] == "" ||
        countryState[fieldDetail.name] == null
      ) {
        if (fieldDetail.required === true) {
          tempFieldsWithError = {
            ...tempFieldsWithError,
            [fieldDetail.name]: true,
          };
        } else if (fieldDetail.required === false) {
          tempFieldsWithError = {
            ...tempFieldsWithError,
            [fieldDetail.name]: false,
          };
        }
      } else if (
        countryState[fieldDetail.name] != undefined ||
        countryState[fieldDetail.name] != ""
      ) {
        if (fieldDetail.required === true) {
          tempFieldsWithError = {
            ...tempFieldsWithError,
            [fieldDetail.name]: false,
          };
        }
      }
    });

    console.log("tempFieldsWithError", tempFieldsWithError);
    var isValidationFailed = false;
    console.log(tempFieldsWithError);
    setFieldsWithError(tempFieldsWithError);
    Object.values(tempFieldsWithError).forEach((item) => {
      if (item === true) {
        isValidationFailed = true;
      }
    });
    console.log("isValidationFailed", isValidationFailed);

    return isValidationFailed;
  };
  function handleChange(evt) {
    setCountryState({
      ...countryState,
      [evt.target.name]: evt.target.value,
    });
  }

  const handlePictureUpload = (pic) => {
    setCountryState({
      ...countryState,
      image: pic,
    });
  };

  const addCountry = async (params) => {
    if (!doValidation()) {
      const loadingToastId = toast.loading("Loading..!");
      if (countryState.isAddCountry) {
        try {
          const result = await country.addCountry(
            countryState.title,
            countryState.comments
          );
          if (result.error == false) {
            toast.dismiss(loadingToastId);
            toast.success("country created!");
            setCountryState({
              ...countryState,
              isAddCountry: false,
            });
            getCountries(1, "", 10);
          }
        } catch (error) {
          toast.dismiss(loadingToastId);
          console.error(error);
        }
      } else if (countryState.isEditCountry) {
        try {
          const result = await country.updateCountry(
            countryState.title,
            countryState.comments,
            countryState.countryId
          );
          if (result.error == false) {
            toast.dismiss(loadingToastId);
            toast.success("country updated!");
            setCountryState({
              ...countryState,
              isEditCountry: false,
            });
            getCountries(1, "", 10);
          }
        } catch (error) {
          toast.dismiss(loadingToastId);
          console.error(error);
        }
      }
    } else {
      toast.error("Validation Failed");
    }
  };
  console.log(countryState);
  return (
    <div className="mb-4">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {countryState.isAddCountry ? "Add country" : "Edit Country"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
									<Form.Control
										className={
                      fieldsWithError.title === true ? "border-danger" : ""
                    }
                    defaultValue={countryState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Country Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Comments</Form.Label>
									<Form.Control
										className={
                      fieldsWithError.comments === true ? "border-danger" : ""
                    }
                    defaultValue={countryState.comments}
                    name="comments"
                    type="text"
                    placeholder="Comments"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload New Picture</Form.Label>
									<Form.Control
										className={
                      fieldsWithError.image === true ? "border-danger form-control" : "form-control"
                    }
                    style={{ padding: "2px" }}
                    type="file"
                    placeholder=""
                    
                    multiple
                    onChange={(e) => {
                      handlePictureUpload(e.target.files[0]);
                    }}
                  />
                </Form.Group>

                <Button
                  className="mr-3"
                  variant="secondary"
                  onClick={() =>
                    setCountryState({
                      ...countryState,
                      isAddCountry: false,
                      isEditCountry: false,
                    })
                  }
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    addCountry();
                  }}
                  // variant=`${countryState.isAddCountry?'primary':'warning'}`
                  variant={countryState.isAddCountry ? "success" : "warning"}
                >
                  {countryState.isAddCountry ? "Create" : "Update"}
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      {/* End Basic Forms */}
    </div>
  );
}
