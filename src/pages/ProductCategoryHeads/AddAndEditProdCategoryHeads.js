import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { prodApi } from "../../API/ProdCategoriesApis";
import { prodCategoryHeadsApi } from "../../API/ProdCategoryHeadsApis";

export default function AddAndEditProdCategoryHeads({
  prodCategoryHeadsState,
  setProdCategoryHeadsState,
  getProdCategoryHeads,
}) {
  useEffect(() => {
    getProdCategories(1, "", 10);
  }, []);
  const fieldsMap = [
    { name: "title", required: true },
    { name: "status", required: true },
    { name: "product_category_id", required: true },
    { name: "icon", required: false },
    { name: "link", required: false },
    { name: "description", required: false },
  ];
  const [fieldsWithError, setFieldsWithError] = useState({
    description: false,
    icon: false,
    link: false,
    product_category_id: false,
    status: false,
    title: false,
  });

  const [productCategories, setProductCategories] = useState();

  const getProdCategories = async () => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodApi.getProdCategories(1, "", 1000000000000);
      if (result.error === false && result.data.status === "success") {
        toast.dismiss(loadingToastId);

        setProductCategories(result.data.data);
        // if (prodCategoryHeadsState.isAddProdCategoryHead) {
        //   setProdCategoryHeadsState({
        //     ...prodCategoryHeadsState,
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
     
    setProdCategoryHeadsState({
      ...prodCategoryHeadsState,
      [evt.target.name]: evt.target.value,
    });
  }

  const handlePictureUpload = (pic) => {
    setProdCategoryHeadsState({
      ...prodCategoryHeadsState,
      image: pic,
    });
  };
  const doValidation = () => {
    var tempFieldsWithError = {};
    fieldsMap.forEach((fieldDetail) => {
      if (
        prodCategoryHeadsState[fieldDetail.name] == undefined ||
				prodCategoryHeadsState[fieldDetail.name] == "" ||
				prodCategoryHeadsState[fieldDetail.name] == null
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
        prodCategoryHeadsState[fieldDetail.name] != undefined ||
        prodCategoryHeadsState[fieldDetail.name] != ""
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

  const addProdCategoryHead = async (params) => {
     
    if (!doValidation()) {
      const loadingToastId = toast.loading("Loading..!");

      if (prodCategoryHeadsState.isAddProdCategoryHead) {
        try {
          const result = await prodCategoryHeadsApi.addProdCategoryHead(
            prodCategoryHeadsState
          );
         
          if (result.error == false) {
            toast.dismiss(loadingToastId);
            toast.success("Product Category created!");
            setProdCategoryHeadsState({
              ...prodCategoryHeadsState,
              isAddProdCategoryHead: false,
              isEditProdCategoryHead: false,
            });
            getProdCategoryHeads(1, "", 10);
          } else if (result.error == true) {
            toast.dismiss(loadingToastId);
            toast.error("failed");
          }
        } catch (error) {
          console.error(error);
        }
      } else if (prodCategoryHeadsState.isEditProdCategoryHead) {
        try {
          const result = await prodCategoryHeadsApi.updateProdCategoryHead(
            prodCategoryHeadsState
          );
          if (result.error == false) {
            toast.success("Product Category updated!");
            toast.dismiss(loadingToastId);
            setProdCategoryHeadsState({
              ...prodCategoryHeadsState,
              isEditProdCategoryHead: false,
            });
            getProdCategoryHeads(1, "", 10);
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
                  {prodCategoryHeadsState.isAddProdCategoryHead
                    ? "Add Category Head"
                    : "Edit Category Head"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.title === true ? "border-danger" : ""
                    }
                    defaultValue={prodCategoryHeadsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Category Head Name"
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
                    value={prodCategoryHeadsState.status}
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
                  <Form.Label>Product Category</Form.Label>
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
                          <option
                            value={item.id}
                            selected={
                              prodCategoryHeadsState &&
                              prodCategoryHeadsState.product_category &&
                              prodCategoryHeadsState.product_category.id ==
                                item.id
                            }
                            key={item.id}
                          >
                            {item.title}
                          </option>
                        );
                      })}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Icon</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.icon === true ? "border-danger" : ""
                    }
                    defaultValue={prodCategoryHeadsState.icon}
                    name="icon"
                    type="text"
                    placeholder="icon"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.link === true ? "border-danger" : ""
                    }
                    defaultValue={prodCategoryHeadsState.link}
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
                      fieldsWithError.description === true
                        ? "border-danger"
                        : ""
                    }
                    as="textarea"
                    defaultValue={prodCategoryHeadsState.description}
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload New Picture</Form.Label>
                  <Form.Control
                    style={{ padding: "2px" }}
                    type="file"
                    placeholder=""
                    className="form-control"
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
                    setProdCategoryHeadsState({
                      ...prodCategoryHeadsState,
                      isAddProdCategoryHead: false,
                      isEditProdCategoryHead: false,
                    })
                  }
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    addProdCategoryHead();
                  }}
                  variant={
                    prodCategoryHeadsState.isAddProdCategoryHead
                      ? "success"
                      : "warning"
                  }
                >
                  {prodCategoryHeadsState.isAddProdCategoryHead
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
