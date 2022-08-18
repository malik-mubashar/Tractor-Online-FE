import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { brandApis } from "../../API/BrandsApis";
import { prodApi } from "../../API/ProdCategoriesApis";
import Select from "react-select";

export default function AddAndEditBrands({
  brandsState,
  setBrandsState,
  getBrands,
}) {
  const [prodCategories, setProdCategories] = useState();
  const [optionsForMultiSelect, setOptionsForMultiSelect] = useState();

  useEffect(() => {
    getProdCategories(1, "", 10, true);
  }, []);

  const getProdCategories = async (page, mainSearch, noOfRec, isOption) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodApi.getProdCategories(
        page,
        mainSearch,
        noOfRec,
        isOption
      );
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setProdCategories(result.data.data);
        var tempArr = [];
        result.data.data.forEach((cate) => {
          tempArr.push({
            value: cate.id,
            label: cate.title,
          });
        });
        setOptionsForMultiSelect(tempArr);
      } else {
        toast.dismiss(loadingToastId);
        console.error(result.data);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };
  const fieldsMap = [
    { name: "title", required: true },
    { name: "status", required: true },
    { name: "description", required: false },
    { name: "image", required: brandsState.isAddBrand?true:false },
    { name: "link", required: true },
    { name: "icon", required: true },
  ];
  const [fieldsWithError, setFieldsWithError] = useState({
    description: false,
    image: false,
    product_category_id: false,
    status: false,
    title: false,
  });

  const doValidation = () => {
    var tempFieldsWithError = {};
    fieldsMap.forEach((fieldDetail) => {
      console.log(brandsState);
      if (
        brandsState[fieldDetail.name] == undefined ||
        brandsState[fieldDetail.name] == ""
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
        brandsState[fieldDetail.name] != undefined ||
        brandsState[fieldDetail.name] != ""
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
    if (brandsState.isEditCategoryBrand === true) {
      tempFieldsWithError.image = false;
    }
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
    setBrandsState({
      ...brandsState,
      [evt.target.name]: evt.target.value,
    });
  }

  const handlePictureUpload = (pic) => {
    setBrandsState({
      ...brandsState,
      image: pic,
    });
  };

  const addBrands = async (params) => {
    if (!doValidation()) {
      const loadingToastId = toast.loading("Loading..!");

      if (brandsState.isAddBrand) {
        try {
          const result = await brandApis.addBrand(brandsState);
          console.log(result);
          if (result.error === false) {
            toast.dismiss(loadingToastId);
            toast.success("Brand created!");
            setBrandsState({
              ...brandsState,
              isAddBrand: false,
              isEditBrand: false,
            });
            getBrands(1, "", 10);
          } else if (result.error === true) {
            toast.dismiss(loadingToastId);
            toast.error("failed");
          }
        } catch (error) {
          toast.dismiss(loadingToastId);
          toast.error("error");

          console.error(error);
        }
      } else if (brandsState.isEditBrand) {
        try {
          const result = await brandApis.updateBrand(brandsState);
          if (result.error == false) {
            toast.success("Brand updated!");
            toast.dismiss(loadingToastId);
            setBrandsState({
              ...brandsState,
              isEditBrand: false,
            });
            getBrands(1, "", 10);
          }
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      toast.error("Validation Failed");
    }
  };

  console.log("optionsForMultiSelect", optionsForMultiSelect);
  console.log("asdasd", brandsState);
  return (
    <div className="mb-4 mt-5">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {brandsState.isAddBrand ? "Add Brand" : "Edit Brand"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.title === true ? "border-danger" : ""
                    }
                    defaultValue={brandsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Brand Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Select Brands that are associated with current category
                  </Form.Label>
                  <Select
                    defaultValue={brandsState && brandsState.product_categories&& brandsState.product_categories.map((item) => {
                    	return {value:item.id,label:item.title}
                    })}
                    // defaultValue={optionsForMultiSelect&&optionsForMultiSelect.map((item) => {
                    //     return { value: item.value, label: item.title };
                    // })}
                    isMulti
                    name="colors"
                    onChange={(selectedOption) => {
                      setBrandsState({
                        ...brandsState,
                        product_category_id: selectedOption.map(
                          (item) => item.value
                        ),
                      });
                    }}
                    options={optionsForMultiSelect}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </Form.Group>
                <Form.Group controlId="formGridState">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.status === true ? "border-danger" : ""
                    }
                    as="select"
                    value={brandsState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option value hidden>
                      -- Select Product Status --
                    </option>
                    <option value="active">active</option>
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.link === true ? "border-danger" : ""
                    }
                    defaultValue={brandsState.link}
                    name="link"
                    type="text"
                    placeholder="Link"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicComments">
                  <Form.Label>Icon</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.icon === true ? "border-danger" : ""
                    }
                    defaultValue={brandsState.icon}
                    name="icon"
                    type="text"
                    placeholder="icon"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload New Picture</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.image === true
                        ? "border-danger form-control p-1"
                        : "form-control p-1"
                    }
                    type="file"
                    placeholder=""
                    multiple
                    onChange={(e) => {
                      handlePictureUpload(e.target.files[0]);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicComments">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.description === true
                        ? "border-danger"
                        : ""
                    }
                    as="textarea"
                    defaultValue={brandsState.description}
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Button
                  className="mr-3 mt-3"
                  variant="secondary"
                  onClick={() =>
                    setBrandsState({
                      ...brandsState,
                      isAddBrand: false,
                      isEditBrand: false,
                    })
                  }
                >
                  Cancel
                </Button>
								<Button
									className='mt-3'
                  onClick={() => {
                    addBrands();
                  }}
                  variant={brandsState.isAddBrand ? "success" : "warning"}
                >
                  {brandsState.isAddBrand ? "Create" : "Update"}
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
