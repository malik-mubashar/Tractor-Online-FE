import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { prodApi } from "../../API/ProdCategoriesApis";
import { prodCategoryHeadsApi } from "../../API/ProdCategoryHeadsApis";
import { prodSubApi } from "../../API/ProdSubCategoriesApis";

export default function AddAndEditProdSubCategories({
  prodSubCategoriesState,
  setProdSubCategoriesState,
  getProdSubCategories,
}) {
  const fieldsMap = [
    { name: "title", required: true },
    { name: "status", required: true },
    { name: "product_category_head_id", required: true },
    { name: "description", required: false },
    { name: "image", required: true },
    { name: "link", required: false },
  ];
  const [fieldsWithError, setFieldsWithError] = useState({
    description: false,
    image: false,
    product_category_id: false,
    status: false,
    title: false,
    link: false,
  });
  useEffect(() => {
    getProdCategoryHeads(1, "", 10);
  }, []);
  const doValidation = () => {
    var tempFieldsWithError = {};
    fieldsMap.forEach((fieldDetail) => {
      console.log(prodSubCategoriesState);
      if (
        prodSubCategoriesState[fieldDetail.name] == undefined ||
        prodSubCategoriesState[fieldDetail.name] == ""
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
        prodSubCategoriesState[fieldDetail.name] != undefined ||
				prodSubCategoriesState[fieldDetail.name] != "" ||
				prodSubCategoriesState[fieldDetail.name] == null
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
    if (prodSubCategoriesState.isEditCategoryBrand === true) {
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
  const [productCategoryHeads, setProductCategoryHeads] = useState();

  const getProdCategoryHeads = async () => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodCategoryHeadsApi.getProdCategoryHeads(
        1,
        "",
        1000000000000
      );
      if (result.error === false && result.data.status === "success") {
        toast.dismiss(loadingToastId);

        setProductCategoryHeads(result.data.data);

        // if (prodSubCategoriesState.isAddProdSubCategory) {
        //   setProdSubCategoriesState({
        //     ...prodSubCategoriesState,
        //     product_category_head_id: result.data.data[0].id,
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
    setProdSubCategoriesState({
      ...prodSubCategoriesState,
      [evt.target.name]: evt.target.value,
    });
  }
  const handlePictureUpload = (pic) => {
    setProdSubCategoriesState({
      ...prodSubCategoriesState,
      image: pic,
    });
  };

  const addProdSubCategory = async (params) => {
    if (!doValidation()) {
      const loadingToastId = toast.loading("Loading..!");

      if (prodSubCategoriesState.isAddProdSubCategory) {
        try {
          const result = await prodSubApi.addProdSubCategory(
            prodSubCategoriesState
          );
          console.log(result);
          if (result.error == false) {
            toast.dismiss(loadingToastId);
            toast.success("Product Category created!");
            setProdSubCategoriesState({
              ...prodSubCategoriesState,
              isAddProdSubCategory: false,
              isEditProdSubCategory: false,
            });
            getProdSubCategories(1, "", 10);
          } else if (result.error == true) {
            toast.dismiss(loadingToastId);
            toast.error("failed");
          }
        } catch (error) {
          console.error(error);
        }
      } else if (prodSubCategoriesState.isEditProdSubCategory) {
        try {
          const result = await prodSubApi.updateProdSubCategory(
            prodSubCategoriesState
          );
          if (result.error == false) {
            toast.success("Product Category updated!");
            toast.dismiss(loadingToastId);
            setProdSubCategoriesState({
              ...prodSubCategoriesState,
              isEditProdSubCategory: false,
            });
            getProdSubCategories(1, "", 10);
          }
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      toast.error("Validation Failed");
    }
  };
  return (
    <div className="mb-4 mt-5">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {prodSubCategoriesState.isAddProdSubCategory
                    ? "Add SubCategory"
                    : "Edit SubCategory"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title</Form.Label>
									<Form.Control
										className={
                      fieldsWithError.status === true ? "border-danger" : ""
                    }
                    defaultValue={prodSubCategoriesState.title}
                    name="title"
                    type="text"
                    placeholder="Enter SubCategory Name"
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
                    value={prodSubCategoriesState&&prodSubCategoriesState.status}
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

                <Form.Group controlId="formGridState">
                  <Form.Label>Select Product Head</Form.Label>
									<Form.Control
										className={
                      fieldsWithError.product_category_head_id === true ? "border-danger" : ""
                    }
                    as="select"
                    value={prodSubCategoriesState&&prodSubCategoriesState.product_category_head_id}
                    onChange={(e) => handleChange(e)}
                    name="product_category_head_id"
									>
										 <option key="blankChoice" hidden value>
                      -- Select Product Category Head --
                    </option>
                    {productCategoryHeads &&
                      productCategoryHeads.map((item) => {
                        return (
                          <option
														selected={prodSubCategoriesState &&
															prodSubCategoriesState.product_category_head&&
                              prodSubCategoriesState.product_category_head.id ==
                              item.id
                            }
                            value={item.id}
                          >
                            {item.title}
                          </option>
                        );
                      })}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Link</Form.Label>
									<Form.Control
										className={
                      fieldsWithError.link === true ? "border-danger" : ""
                    }
                    defaultValue={prodSubCategoriesState.link}
                    name="link"
                    type="text"
                    placeholder="Link"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Description</Form.Label>
									<Form.Control
										className={
                      fieldsWithError.description === true ? "border-danger" : ""
                    }
                    as="textarea"
                    defaultValue={prodSubCategoriesState.description}
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload New Picture</Form.Label>
									<Form.Control
										className={
                      fieldsWithError.image === true ? "form-control border-danger" : "form-control"
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
                    setProdSubCategoriesState({
                      ...prodSubCategoriesState,
                      isAddProdSubCategory: false,
                      isEditProdSubCategory: false,
                    })
                  }
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    addProdSubCategory();
                  }}
                  variant={
                    prodSubCategoriesState.isAddProdSubCategory
                      ? "success"
                      : "warning"
                  }
                >
                  {prodSubCategoriesState.isAddProdSubCategory
                    ? "Create"
                    : "Update"}
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
