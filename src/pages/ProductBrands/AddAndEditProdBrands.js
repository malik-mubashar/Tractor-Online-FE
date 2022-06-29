import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { prodBrandsApis } from "../../API/ProdBrandsApis";
import { prodApi } from "../../API/ProdCategoriesApis";

export default function AddAndEditProdBrands({
  prodBrandsState,
  setProdBrandsState,
  getProdBrands,
}) {
	useEffect(() => {
		getProdCategories(1,'', 100000000)
	}, [])
	const [prodCategories, setProdCategories] = useState()
	const getProdCategories = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodApi.getProdCategories(page, mainSearch, noOfRec);
      if (result.error === false && result.data.status == "success") {
        toast.dismiss(loadingToastId);
				setProdCategories(result.data.data);
				if (prodBrandsState.isAddProdBrand) {
          setProdBrandsState({
            ...prodBrandsState,
            product_category_id: result.data.data[0].id,
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
    setProdBrandsState({
      ...prodBrandsState,
      [evt.target.name]: evt.target.value,
    });
	}
	const handlePictureUpload = (pic) => {		
		setProdBrandsState({
      ...prodBrandsState,
      image: pic,
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
								

								<Form.Group controlId="formGridState">
                  <Form.Label>Select Product Category</Form.Label>
                  <Form.Control
                    as="select"
                    value={prodBrandsState.status}
                    onChange={(e) => handleChange(e)}
                    name="product_category_id"
									>
										{
									prodCategories && prodCategories.map((item) => {
										return (
											<>
												<option
													selected={
														prodBrandsState.product_category_id ==
														item.id
													}
													value={item.id}>{item.title}</option>
											</>

										)
									})
								}
                  </Form.Control>
                </Form.Group>
								

								<Form.Group >
                      <Form.Label>Upload New Picture</Form.Label>
									<Form.Control
									style={{padding:"2px"}}
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
                    setProdBrandsState({
                      ...prodBrandsState,
                      isAddProdBrand: false,
                      isEditProdBrand: false,
                    })
                  }
                >
                   Cancel
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
