import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { prodBrandsApis } from "../../API/ProdBrandsApis";

export default function AddAndEditProdBrands({
  prodBrandsState,
  setProdBrandsState,
  getProdBrands,
}) {
  function handleChange(evt) {
    debugger;
    setProdBrandsState({
      ...prodBrandsState,
      [evt.target.name]: evt.target.value,
    });
  }

  const addProdBrand = async (params) => {
    const loadingToastId = toast.loading("Loading..!");

    if (prodBrandsState.isAddProdBrand) {
      try {
        const result = await prodBrandsApis.addProdBrand(prodBrandsState);
        console.log(result);
        if (result.error === false) {
          toast.dismiss(loadingToastId);
          toast.success("Product Category created!");
          setProdBrandsState({
            ...prodBrandsState,
            isAddProdBrand: false,
            isEditProdBrand: false,
          });
          getProdBrands(1, "", 10);
        } else if (result.error == true) {
          toast.dismiss(loadingToastId);
          toast.error("failed");
        }
      } catch (error) {
        console.error(error);
      }
    } else if (prodBrandsState.isEditProdBrand) {
      try {
        const result = await prodBrandsApis.updateProdBrand(prodBrandsState);
        if (result.error == false) {
          toast.success("Product Category updated!");
          toast.dismiss(loadingToastId);
          setProdBrandsState({
            ...prodBrandsState,
            isEditProdBrand: false,
          });
          getProdBrands(1, "", 10);
        }
      } catch (error) {
        toast.dismiss(loadingToastId);
        toast.error("err	or..!");
        console.error(error);
      }
    }
  };
  console.log("asdasd", prodBrandsState);
  return (
    <div className="mb-4 mt-5">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {prodBrandsState.isAddProdBrand
                    ? "Add Product Brand"
                    : "Edit Product Brand"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    defaultValue={prodBrandsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Product Brand Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                {/* <Form.Group controlId="formBasicComments">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    defaultValue={prodBrandsState.status}
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
                    value={prodBrandsState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option value="active">active</option>
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    defaultValue={prodBrandsState.description}
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
                    setProdBrandsState({
                      ...prodBrandsState,
                      isAddProdBrand: false,
                      isEditProdBrand: false,
                    })
                  }
                >
                  Cancle
                </Button>
                <Button
                  onClick={() => {
                    addProdBrand();
                  }}
                  variant={
                    prodBrandsState.isAddProdBrand ? "success" : "warning"
                  }
                >
                  {prodBrandsState.isAddProdBrand ? "Create" : "Update"}
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
