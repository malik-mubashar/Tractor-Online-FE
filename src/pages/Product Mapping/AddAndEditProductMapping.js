import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { productMappingApis } from "../../API/ProductMappingApis";
import { brandApis } from "../../API/BrandsApis";
import Icofont from "react-icofont";
import { object } from "prop-types";
import { prodApi } from "../../API/ProdCategoriesApis";

export default function AddAndEditProductMappings({
  productMappingsState,
  setProductMappingsState,
  getProductMappings,
}) {
  const [extraFieldsArr, setExtraFieldsArr] = useState([
    {
      id: parseInt(
        new Date().getTime().toString() + Math.floor(Math.random() * 1000000)
      ),
      key: null,
      value: null,
    },
  ]);
	
  const [prodCategories, setProdCategories ] = useState([]);
	useEffect(() => {
    getProdCategories(1, "", 10000000000,true);
  }, []);

  const getProdCategories = async (page, mainSearch, noOfRec,isOption) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await prodApi.getProdCategories(page, mainSearch, noOfRec,isOption);
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

				setProdCategories(result.data.data)
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
    setProductMappingsState({
      ...productMappingsState,
      [evt.target.name]: evt.target.value,
    });
  }
  

  useEffect(() => {
    if (productMappingsState.isEditProductMapping === true) {
      if (Object.entries(productMappingsState.extra_fields).length > 0) {
        let tempExtraFieldsArr = [];
        Object.entries(productMappingsState.extra_fields).forEach((item, i) => {
          tempExtraFieldsArr.push({
            id: new Date().getTime().toString() + Math.floor(Math.random() * 1000000),
            key: item[0],
            value: item[1],
          });
        });
        setExtraFieldsArr(tempExtraFieldsArr);
      }
    }
  }, [productMappingsState.extra_fields]);
 
  const getExtraFieldData = () => {
    let extraFieldsObj = {};
    extraFieldsArr.forEach((item) => {
      extraFieldsObj = {
        ...extraFieldsObj,
        [item.key]: item.value,
      };
    });
    return extraFieldsObj;
  };
  const addProductMapping = async (params) => {
    let extraFieldsData = getExtraFieldData();
    const loadingToastId = toast.loading("Loading..!");
    let formData = new FormData();
     
		 
    formData.append("extra_fields", JSON.stringify(extraFieldsData));
    formData.append("product_category_id", productMappingsState.product_category_id);


    if (productMappingsState.isAddProductMapping) {
      try {
        const result = await productMappingApis.addProductMapping( formData);
        if (result.error == false) {
          toast.dismiss(loadingToastId);
          toast.success("Product Mapping created!");
          setProductMappingsState({
            ...productMappingsState,
            isAddProductMapping: false,
            isEditProductMapping: false,
          });
          getProductMappings(1, "", 10);
        }
        if (result.error === true) {
          toast.dismiss(loadingToastId);
          toast.error("error");
        }
      } catch (error) {
        toast.dismiss(loadingToastId);
        toast.error("error");
        console.error(error);
      }
    } else if (productMappingsState.isEditProductMapping) {
      try {
        const result = await productMappingApis.updateProductMapping(productMappingsState, formData);
        if (result.error === false) {
          toast.success("ProductMapping updated!");
          toast.dismiss(loadingToastId);
          setProductMappingsState({
            ...productMappingsState,
            isEditProductMapping: false,
          });
          getProductMappings(1, "", 10);
        }
      } catch (error) {
        toast.dismiss(loadingToastId);
        toast.error("error");
        console.error(error);
      }
    }
  };

  function addExtraFields(e) {
    let idThatNeverRepeat = parseInt(
      new Date().getTime().toString() + Math.floor(Math.random() * 1000000)
    );
    var arr = [...extraFieldsArr];
    arr.push({
      id: idThatNeverRepeat,
      key: null,
      value: null,
    });
    setExtraFieldsArr(arr);
  }

  function removeExtraFields(e, id) {
    var arr = [...extraFieldsArr];
    setExtraFieldsArr(
      arr.filter((item, index) => {
        return item.id != id;
      })
    );
  }
  //////////////////////////////////
	const handleExtraField = (event, id) => {
    let tempExtraFieldsArr = [...extraFieldsArr];
    if (event.target.name == "extra_fields_key") {
      let found = false;
      tempExtraFieldsArr.map((item) => {
        if (item.id == id) {
          item.key = event.target.value;
          found = true;
        }
      });
      if (found === false) {
        let idThatNeverRepeat = parseInt(
          new Date().getTime().toString() + Math.floor(Math.random() * 1000000)
        );
        tempExtraFieldsArr.push({
          id: idThatNeverRepeat,
          key: event.target.value,
          value: null,
        });
      }
			setExtraFieldsArr(tempExtraFieldsArr);
    } else if (event.target.name == "extra_fields_value") {
      let found = false;
      tempExtraFieldsArr.map((item) => {
        if (item.id == id) {
          item.value = event.target.value;
          found = true;
        }
      });
      if (found === false) {
        let idThatNeverRepeat = parseInt(
          new Date().getTime().toString() + Math.floor(Math.random() * 1000000)
        );
        tempExtraFieldsArr.push({
          id: idThatNeverRepeat,
          key: null,
          value: event.target.value,
        });
      }
			setExtraFieldsArr(tempExtraFieldsArr);
    }
  };

  return (
    <div className="mb-4">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {productMappingsState.isAddProductMapping ? "Add ProductMapping" : "Edit ProductMapping"}
                </h5>
              </div>
              <Form>
							<Form.Group controlId="formGridState">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Control
                    // className={
                    //   fieldsWithError.product_category_id === true
                    //     ? "border-danger"
                    //     : ""
                    // }
                    as="select"
                    onChange={(e) => handleChange(e)}
                    name="product_category_id"
                  >
                    <option key="blankChoice" hidden value>
                      -- Select Product Category --
                    </option>
                    {prodCategories &&
                      prodCategories.map((item) => {
                        return (
                          <option
                            value={item.id}
                            selected={
                              productMappingsState &&
                              productMappingsState.product_category &&
                              productMappingsState.product_category.id ==
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
          
             
               
               
               
                <div className="d-flex">
                  <Form.Group className="mt-1" controlId="formBasicComments">
                    <Form.Label>Add more information about productMapping.</Form.Label>
                  </Form.Group>
                  <Icofont
                    icon="plus text-success"
                    className="icofont-2x ml-2 cursor-pointer"
                    onClick={(e) => addExtraFields(e)}
                  />
                </div>
                {extraFieldsArr &&
                  extraFieldsArr.map((item, i) => {
                    return (
                      <div className="mt-3 mb-3">
                        <div>
                          <Icofont
                            icon="close text-danger float-right mt-2 pt-4 cursor-pointer"
                            className="icofont-2x"
                            value={i}
                            onClick={(e) => removeExtraFields(e, item.id)}
                          />
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <Form.Group
                              className="mt-1"
                              controlId="formBasicComments"
                            >
                              <Form.Label>
                                Add extra ProductMapping heading.
                              </Form.Label>
                              <Form.Control
                                onChange={(e) => handleExtraField(e, item.id)}
                                name="extra_fields_key"
                                type="text"
                                placeholder="Add productMapping heading...."
                                value={item && item.key}
                              />
                            </Form.Group>
                          </div>
                          <div className="col-6">
                            <Form.Group
                              className="mt-1"
                              controlId="formBasicComments"
                            >
                              <Form.Label>
                                Add extra ProductMapping information.
                              </Form.Label>
                              <Form.Control
                                value={item && item.value}
                                onChange={(e) => handleExtraField(e, item.id)}
                                name="extra_fields_value"
                                type="text"
                                placeholder="Add productMapping information...."
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              
                <Button
                  className="mr-3"
                  variant="secondary"
                  onClick={() =>
                    setProductMappingsState({
                      ...productMappingsState,
                      isAddProductMapping: false,
                      isEditProductMapping: false,
                    })
                  }
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    addProductMapping();
                  }}
                  // variant=`${productMappingsState.isAddProductMapping?'primary':'warning'}`
                  variant={productMappingsState.isAddProductMapping ? "success" : "warning"}
                >
                  {productMappingsState.isAddProductMapping ? "Create" : "Update"}
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
