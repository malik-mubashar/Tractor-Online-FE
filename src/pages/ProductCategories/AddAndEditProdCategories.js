import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { prodApi } from "../../API/ProdCategoriesApis";
import Select from "react-select";
import { brandApis } from "../../API/BrandsApis";

export default function AddAndEditProdCategories({
  prodCategoriesState,
  setProdCategoriesState,
  getProdCategories,
}) {
  const [optionsForMultiSelect, setOptionsForMultiSelect] = useState();
  useEffect(() => {
    getBrands(1, "", 10000000000);
  }, []);
  const getBrands = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await brandApis.getBrands(page, mainSearch, noOfRec);
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);
        // setBrands(result.data.data);
        var tempArr = [];
        result.data.data.forEach((brand) => {
          tempArr.push({
            value: brand.id,
            label: brand.title,
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
    { name: "position", required: false },
    { name: "link", required: false },
		{ name: "description", required: false },
		{ name: "image", required: prodCategoriesState.isAddProdCategory?true:false },

		
  ];
  const [fieldsWithError, setFieldsWithError] = useState({
    description: false,
    link: false,
    status: false,
    title: false,
    position: false,
  });
  const doValidation = () => {
    var tempFieldsWithError = {};
    fieldsMap.forEach((fieldDetail) => {
      if (
        prodCategoriesState[fieldDetail.name] == undefined ||
        prodCategoriesState[fieldDetail.name] == "" ||
        prodCategoriesState[fieldDetail.name] == null
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
        prodCategoriesState[fieldDetail.name] != undefined ||
        prodCategoriesState[fieldDetail.name] != ""
      ) {
        if (fieldDetail.required === true) {
          tempFieldsWithError = {
            ...tempFieldsWithError,
            [fieldDetail.name]: false,
          };
        }
      }
    });
    

    var isValidationFailed = false;
    setFieldsWithError(tempFieldsWithError);
    Object.values(tempFieldsWithError).forEach((item) => {
      if (item === true) {
        isValidationFailed = true;
      }
    });
   

    return isValidationFailed;
  };

  function handleChange(evt) {
    setProdCategoriesState({
      ...prodCategoriesState,
      [evt.target.name]: evt.target.value,
    });
  }

  const handlePictureUpload = (pic) => {
    setProdCategoriesState({
      ...prodCategoriesState,
			image: pic,
			photo:(URL.createObjectURL(pic))
    });
  };

  const addProdCategory = async (params) => {
    if (!doValidation()) {
      const loadingToastId = toast.loading("Loading..!");

      if (prodCategoriesState.isAddProdCategory) {
        try {
          const result = await prodApi.addProdCategory(prodCategoriesState);
         
          if (result.error == false) {
            toast.dismiss(loadingToastId);
            toast.success("Product Category created!");
            setProdCategoriesState({
              ...prodCategoriesState,
              isAddProdCategory: false,
              isEditProdCategory: false,
            });
            getProdCategories(1, "", 10);
          } else if (result.error == true) {
            toast.dismiss(loadingToastId);
            toast.error("failed");
          }
        } catch (error) {
          console.error(error);
        }
      } else if (prodCategoriesState.isEditProdCategory) {
        try {
          const result = await prodApi.updateProdCategory(prodCategoriesState);
          if (result.error === false) {
            toast.success("Product Category updated!");
            toast.dismiss(loadingToastId);
            setProdCategoriesState({
              ...prodCategoriesState,
              isEditProdCategory: false,
            });
            getProdCategories(1, "", 10);
          }
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      toast.error("Validation Failed");
    }
  };
  console.log('prodCategoriesState',prodCategoriesState)
  const handleTypeSelect = () => {};

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  
  return (
    <div className="mb-4 mt-5">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {prodCategoriesState.isAddProdCategory
                    ? "Add Category"
                    : "Edit Category"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title  <span className="required-field">*</span></Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.title === true ? "border-danger" : ""
                    }
                    defaultValue={prodCategoriesState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Product Category Name"
                    onChange={(e) => handleChange(e)}
                  />
                   <Form.Label>Category Priority</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.position === true ? "border-danger" : ""
                    }
                    defaultValue={prodCategoriesState.position}
                    name="position"
                    type="number"
                    placeholder="Enter Product Category Position"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Select Brands that are associated with current category
                  </Form.Label>
                  <Select
                    // defaultValue={[colourOptions[2], colourOptions[3]]}
										defaultValue={prodCategoriesState && prodCategoriesState.brands&& prodCategoriesState.brands.map((item) => {
                    	return {value:item.id,label:item.title}
                    })}
                    isMulti
                    name="colors"
                    onChange={(selectedOption) => {
                      setProdCategoriesState({
                        ...prodCategoriesState,
                        brand_id: selectedOption.map((item) => item.value),
                      });
                    }}
                    options={optionsForMultiSelect}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Upload New Picture  <span className="required-field">*</span></Form.Label>
									<Form.Control
										 className={
                      fieldsWithError.image === true ? "border-danger form-control" : "form-control"
                    }
                    type="file"
                    placeholder=""
                    multiple
                    onChange={(e) => {
                      handlePictureUpload(e.target.files[0]);
                    }}
									/>
									{prodCategoriesState && prodCategoriesState.photo &&
										<img src={prodCategoriesState.photo} style={{width:"200px", height:'200px'}} id='prodCategorylogo' alt='category'></img>
									}

                </Form.Group>

                {/* <Form.Group controlId="formBasicComments">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    defaultValue={prodCategoriesState.status}
                    name="status"
                    type="text"
                    placeholder="Status"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group> */}

                <Form.Group controlId="formGridState">
                  <Form.Label>Status  <span className="required-field">*</span></Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.status === true ? "border-danger" : ""
                    }
                    as="select"
                    value={prodCategoriesState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option key="blankChoice" hidden value>
                      -- Select Product Status --
                    </option>
                    <option value="active">active</option>
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
                </Form.Group>

                {/* <Form.Group controlId="formBasicComments">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    defaultValue={prodCategoriesState.link}
                    name="link"
                    type="text"
                    placeholder="Link"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group> */}

                <Form.Group controlId="formBasicComments" className="d-flex">
                  <Form.Label>Is Option</Form.Label>
                  <Form.Check
                    defaultChecked={
                      prodCategoriesState &&
                      prodCategoriesState.is_option == true
                        ? true
                        : false
                    }
                    name="is_option"
                    placeholder="Link"
                    className="ml-4 mt-2"
                    onChange={(e) => {
                      setProdCategoriesState({
                        ...prodCategoriesState,
                        [e.target.name]: e.target.checked,
                      });
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    defaultValue={prodCategoriesState.description}
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
                    setProdCategoriesState({
                      ...prodCategoriesState,
                      isAddProdCategory: false,
                      isEditProdCategory: false,
                    })
                  }
                >
                  Cancel
                </Button>
                <Button
                  className=" mt-3"
                  onClick={() => {
                    addProdCategory();
                  }}
                  variant={
                    prodCategoriesState.isAddProdCategory
                      ? "success"
                      : "warning"
                  }
                >
                  {prodCategoriesState.isAddProdCategory ? "Create" : "Update"}
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
