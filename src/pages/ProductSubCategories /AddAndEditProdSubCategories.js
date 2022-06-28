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
  useEffect(() => {
    getProdCategoryHeads(1, "", 10);
  }, []);

  const [productCategoryHeads, setProductCategoryHeads] = useState();

  const getProdCategoryHeads = async () => {
    debugger;
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodCategoryHeadsApi.getProdCategoryHeads(
        1,
        "",
        1000000000000
      );
      if (result.error === false && result.data.status === "success") {
        toast.dismiss(loadingToastId);
        debugger;
        setProductCategoryHeads(result.data.data);

        if (prodSubCategoriesState.isAddProdSubCategory) {
          setProdSubCategoriesState({
            ...prodSubCategoriesState,
            product_category_head_id: result.data.data[0].id,
          });
        }
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
    debugger;
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
                    defaultValue={prodSubCategoriesState.title}
                    name="title"
                    type="text"
                    placeholder="Enter SubCategory Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                {/* <Form.Group controlId="formBasicComments">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    defaultValue={prodSubCategoriesState.status}
                    name="status"
                    type="text"
                    placeholder="Status"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group> */}

                <Form.Group controlId="formGridState">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={prodSubCategoriesState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option value="active">active</option>
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Select Product Head</Form.Label>
                  <Form.Control
                    as="select"
                    value={prodSubCategoriesState.product_category_head_id}
                    onChange={(e) => handleChange(e)}
                    name="product_category_head_id"
                  >
                    {productCategoryHeads &&
                      productCategoryHeads.map((item) => {
                        return (
                          <option
                            selected={
                              prodSubCategoriesState.product_category_head_id ==
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
