import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { categoryBrandsApis } from "../../API/CategoryBrandsApis";
import { prodApi } from "../../API/ProdCategoriesApis";

export default function AddAndEditCategoryBrands({
  categoryBrandsState,
  setCategoryBrandsState,
  getCategoryBrands,
}) {
  const fieldsMap = [
    { name: "title", required: true },
    { name: "status", required: true },
    { name: "product_category_id", required: true },
    { name: "description", required: false },
    { name: "image", required: true },
  ];
  const [fieldsWithError, setFieldsWithError] = useState({
    description: false,
    image: false,
    product_category_id: false,
    status: false,
    title: false,
  });
  useEffect(() => {
    getProductCategories(1, "", 100000000);
  }, []);
  const [productCategories, setProductCategories] = useState();
  const getProductCategories = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodApi.getProdCategories(page, mainSearch, noOfRec);
      if (result.error === false && result.data.status == "success") {
        toast.dismiss(loadingToastId);
        setProductCategories(result.data.data);
        // if (categoryBrandsState.isAddCategoryBrand) {

        //   setCategoryBrandsState({
        //     ...categoryBrandsState,
        //     product_category_id: result.data.data[0].id,
        //   });
        // }
      } else {
        toast.dismiss(loadingToastId);
        console.error(result.data);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };
  function handleChange(evt) {
    setCategoryBrandsState({
      ...categoryBrandsState,
      [evt.target.name]: evt.target.value,
    });
  }
  const handlePictureUpload = (pic) => {
    setCategoryBrandsState({
      ...categoryBrandsState,
      image: pic,
    });
  };
  const doValidation = () => {
    var tempFieldsWithError = {};
    fieldsMap.forEach((fieldDetail) => {
      console.log(categoryBrandsState);
      if (
        categoryBrandsState[fieldDetail.name] == undefined ||
				categoryBrandsState[fieldDetail.name] == "" ||
				categoryBrandsState[fieldDetail.name] == null
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
        categoryBrandsState[fieldDetail.name] != undefined ||
        categoryBrandsState[fieldDetail.name] != ""
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
		if (categoryBrandsState.isEditCategoryBrand === true) {
			tempFieldsWithError.image = false 
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
  const addCategoryBrand = async (params) => {
    if (!doValidation()) {
      const loadingToastId = toast.loading("Loading..!");

      if (categoryBrandsState.isAddCategoryBrand) {
        try {
          const result = await categoryBrandsApis.addCategoryBrand(
            categoryBrandsState
          );
          console.log(result);
          if (result.error === false) {
            toast.dismiss(loadingToastId);
            toast.success("Category Category created!");
            setCategoryBrandsState({
              ...categoryBrandsState,
              isAddCategoryBrand: false,
              isEditCategoryBrand: false,
            });
            getCategoryBrands(1, "", 10);
          } else if (result.error == true) {
            toast.dismiss(loadingToastId);
            toast.error("failed");
          }
        } catch (error) {
          console.error(error);
        }
      } else if (categoryBrandsState.isEditCategoryBrand) {
        try {
          const result = await categoryBrandsApis.updateCategoryBrand(
            categoryBrandsState
          );
          if (result.error == false) {
            toast.success("Category Category updated!");
            toast.dismiss(loadingToastId);
            setCategoryBrandsState({
              ...categoryBrandsState,
              isEditCategoryBrand: false,
            });
            getCategoryBrands(1, "", 10);
          }
          if (result.error == true) {
            toast.error("error");
            toast.dismiss(loadingToastId);
          }
        } catch (error) {
          toast.dismiss(loadingToastId);
          toast.error("error..!");
          console.error(error);
        }
      }
    } else {
      toast.error("Validation Failed");
    }
  };
  console.log("asdasd", categoryBrandsState);
  console.log("asdasd", productCategories);
  return (
    <div className="mb-4 mt-5">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {categoryBrandsState.isAddCategoryBrand
                    ? "Add Category Brand"
                    : "Edit Category Brand"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.title === true ? "border-danger" : ""
                    }
                    defaultValue={categoryBrandsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Category Brand Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.status === true ? "border-danger" : ""
                    }
                    as="select"
                    value={categoryBrandsState&&categoryBrandsState.status}
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

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.description === true
                        ? "border-danger"
                        : ""
                    }
                    as="textarea"
                    defaultValue={categoryBrandsState.description}
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Select Product Category</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.product_category_id === true
                        ? "border-danger"
                        : ""
                    }
                    as="select"
                    onChange={(e) => handleChange(e)}
                    name="product_category_id"
                  >
                    <option key="blankChoice" hidden value>
                      -- Select Product Category --
                    </option>
                    {productCategories &&
                      productCategories.map((item) => {
                        return (
                          <>
                            <option
                              key={item.id}
                              selected={
                                categoryBrandsState &&
                                categoryBrandsState.product_category_id ==
                                  item.id
                              }
                              value={item.id}
                            >
                              {item.title}
                            </option>
                          </>
                        );
                      })}
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Upload New Picture</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.image === true
                        ? "border-danger form-control"
                        : "form-control"
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
                    setCategoryBrandsState({
                      ...categoryBrandsState,
                      isAddCategoryBrand: false,
                      isEditCategoryBrand: false,
                    })
                  }
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    addCategoryBrand();
                  }}
                  variant={
                    categoryBrandsState.isAddCategoryBrand
                      ? "success"
                      : "warning"
                  }
                >
                  {categoryBrandsState.isAddCategoryBrand ? "Create" : "Update"}
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
