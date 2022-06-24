import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { productApis } from "../../API/ProductApis";

export default function AddAndEditProduct({
  productsState,
  setProductsState,
  getProducts,
}) {
  function handleChange(evt) {
    setProductsState({
      ...productsState,
      [evt.target.name]: evt.target.value,
    });
  }

  const addProduct = async (params) => {
    const loadingToastId = toast.loading("Loading..!");

    if (productsState.isAddProduct) {
      try {
        const result = await productApis.addProduct(productsState);
        console.log(result);
        if (result.error == false) {
          toast.dismiss(loadingToastId);
          toast.success("City created!");
          setProductsState({
            ...productsState,
            isAddProduct: false,
            isEditProduct: false,
          });
          getProducts(1, "", 10);
        }
      } catch (error) {
        console.error(error);
      }
    } else if (productsState.isEditProduct) {
      try {
        const result = await productApis.updateProduct(productsState);
        if (result.error === false) {
          toast.success("Product updated!");
          toast.dismiss(loadingToastId);
          setProductsState({
            ...productsState,
            isEditProduct: false,
          });
          getProducts(1, "", 10);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log(productsState);
  return (
    <div className="mb-4">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {productsState.isAddProduct
                    ? "Add Product"
                    : "Edit Product"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    defaultValue={productsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Product Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    defaultValue={productsState.description}
                    name="description"
                    type="text"
                    placeholder="description"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								<Form.Group controlId="formBasicComments">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    defaultValue={productsState.price}
                    name="price"
                    type="text"
                    placeholder="price"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								<Form.Group controlId="formBasicComments">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    defaultValue={productsState.location}
                    name="location"
                    type="text"
                    placeholder="location"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								<Form.Group controlId="formBasicComments">
                  <Form.Label>link</Form.Label>
                  <Form.Control
                    defaultValue={productsState.link}
                    name="link"
                    type="text"
                    placeholder="link"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								<Form.Group controlId="formBasicComments">
                  <Form.Label>Extra Fileds</Form.Label>
                  <Form.Control
                    defaultValue={productsState.extra_fields}
                    name="extra_fields"
                    type="text"
                    placeholder="Extra Fields"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={productsState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option value="active">active</option>
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
                </Form.Group>

                <Button
                  className="mr-3"
                  variant="secondary"
                  onClick={() =>
                    setProductsState({
                      ...productsState,
                      isAddProduct: false,
                      isEditProduct: false,
                    })
                  }
                >
                  Cancle
                </Button>
                <Button
                  onClick={() => {
                    addProduct();
                  }}
                  // variant=`${productsState.isAddProduct?'primary':'warning'}`
                  variant={productsState.isAddProduct ? "success" : "warning"}
                >
                  {productsState.isAddProduct ? "Create" : "Update"}
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
