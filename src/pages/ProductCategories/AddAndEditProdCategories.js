import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { prodApi } from "../../API/ProdCategoriesApis";

export default function AddAndEditProdCategories({
  prodCategoriesState,
  setProdCategoriesState,
  getProdCategories,
}) {
  function handleChange(evt) {
    debugger;
    setProdCategoriesState({
      ...prodCategoriesState,
      [evt.target.name]: evt.target.value,
    });
	}
	
	const handlePictureUpload = (pic) => {
		setProdCategoriesState({
      ...prodCategoriesState,
      image: pic,
    });
	}

  const addProdCategory = async (params) => {
    const loadingToastId = toast.loading("Loading..!");

    if (prodCategoriesState.isAddProdCategory) {
      try {
        const result = await prodApi.addProdCategory(prodCategoriesState);
        console.log(result);
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
        if (result.error == false) {
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
  };
  console.log("asdasd", prodCategoriesState);
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
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    defaultValue={prodCategoriesState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Product Category Name"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								
								<Form.Group>
                      <Form.Label>Upload New Picture</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder=""
                        className="form-control"
                        multiple
                        onChange={(e) => {
                          handlePictureUpload(e.target.files[0]);
                        }}
                      />
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
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={prodCategoriesState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option value="active">active</option>
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    defaultValue={prodCategoriesState.link}
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
                    defaultValue={prodCategoriesState.description}
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Button
                  className="mr-3"
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
