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

  const [productCategories, setProductCategories] = useState();

	const getProdCategories = async () => {
    debugger;
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodApi.getProdCategories(1, "", 1000000000000);
      if (result.error === false && result.data.status === "success") {
        toast.dismiss(loadingToastId);
        debugger;
				setProductCategories(result.data.data);
				if (
					prodCategoryHeadsState.isAddProdCategoryHead		
				) {
					
					setProdCategoryHeadsState({
						...prodCategoryHeadsState,
						product_category_id:result.data.data[0].id
					})
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
    setProdCategoryHeadsState({
      ...prodCategoryHeadsState,
      [evt.target.name]: evt.target.value,
    });
  }

	const addProdCategoryHead = async (params) => {
		debugger;
    const loadingToastId = toast.loading("Loading..!");

    if (prodCategoryHeadsState.isAddProdCategoryHead) {
      try {
        const result = await prodCategoryHeadsApi.addProdCategoryHead(
          prodCategoryHeadsState
        );
        console.log(result);
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
  };
  console.log("asdasd", prodCategoryHeadsState);
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
                    defaultValue={prodCategoryHeadsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Category Head Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                {/* <Form.Group controlId="formBasicComments">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    defaultValue={prodCategoryHeadsState.status}
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
                    value={prodCategoryHeadsState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option value="active">active</option>
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Control
                    as="select"
                    value={prodCategoryHeadsState.product_category_head_id}
                    onChange={(e) => handleChange(e)}
                    name="product_category_id"
                  >
                    {productCategories &&
											productCategories.map((item) => {
											
												return <option value={item.id}
												selected={prodCategoryHeadsState.product_category_id==item.id}
												>{item.title}</option>;
                      })}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
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
                    as="textarea"
                    defaultValue={prodCategoryHeadsState.description}
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
                    setProdCategoryHeadsState({
                      ...prodCategoryHeadsState,
                      isAddProdCategoryHead: false,
                      isEditProdCategoryHead: false,
                    })
                  }
                >
                  Cancle
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
