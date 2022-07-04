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
	useEffect(() => {
		getProductCategories(1,'', 100000000)
	}, [])
	const [productCategories, setProductCategories] = useState()
	const getProductCategories = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodApi.getProdCategories(page, mainSearch, noOfRec);
      if (result.error === false && result.data.status == "success") {
        toast.dismiss(loadingToastId);
				setProductCategories(result.data.data);
				if (categoryBrandsState.isAddCategoryBrand) {
					 
          setCategoryBrandsState({
            ...categoryBrandsState,
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
	}

  const addCategoryBrand = async (params) => {
    const loadingToastId = toast.loading("Loading..!");

    if (categoryBrandsState.isAddCategoryBrand) {
      try {
        const result = await categoryBrandsApis.addCategoryBrand(categoryBrandsState);
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
        const result = await categoryBrandsApis.updateCategoryBrand(categoryBrandsState);
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
                    defaultValue={categoryBrandsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Category Brand Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                {/* <Form.Group controlId="formBasicComments">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    defaultValue={categoryBrandsState.status}
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
                    value={categoryBrandsState.status}
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
                    as="select"
                    onChange={(e) => handleChange(e)}
                    name="product_category_id"
									>
										{
									productCategories && productCategories.map((item) => {
										return (
											<>
												<option
													selected={
														categoryBrandsState.product_category_id ==
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
                    categoryBrandsState.isAddCategoryBrand ? "success" : "warning"
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
