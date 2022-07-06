import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { productApis } from "../../API/ProductApis";
import { brandApis } from "../../API/BrandsApis";
import Icofont from "react-icofont";

export default function AddAndEditProduct({
  productsState,
  setProductsState,
  getProducts,
}) {
  const [extraFieldsArr, setExtraFieldsArr] = useState([0]);
  const [extraFields, setExtraFields] = useState([]);
  const [brands, setBrands] = useState();

  function handleChange(evt) {
    setProductsState({
      ...productsState,
      [evt.target.name]: evt.target.value,
    });
  }
  const myRefname = useRef(null);

  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    console.log(ImagesArray);
    setFile([...ImagesArray]);
    console.log("file", file);

    // let tempArr= [];
    //
    // let ImagesArray = Object.entries(e.target.files).map((e) => {

    //   tempArr.push(e[1]);
    // });
    // console.log(ImagesArray);
    // setFile([...file, ...ImagesArray]);
    // console.log("file", file);
    // setProductsState({
    //   ...productsState,
    //   images: [...file, ...ImagesArray],
    // });
    setProductsState({
      ...productsState,
      images: e.target.files,
    });
  }
  useEffect(() => {
    getBrands(1, "", 100000000);
  }, []);
  const getBrands = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await brandApis.getBrands(page, mainSearch, noOfRec);
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);
        setBrands(result.data.data);
      } else {
        toast.dismiss(loadingToastId);
        console.error(result.data);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    const input = document.getElementById("multi-img-field");
    const fileListArr = Array.from(input.files);
    fileListArr.splice(e, e); // here u remove the file
    setProductsState({
      ...productsState,
      images: fileListArr,
    });
    console.log(s);
  }

  function selectCoverPhoto(e, item, index) {
    const input = document.getElementById("multi-img-field");
    const fileListArr = Array.from(input.files);
    var images_elem = document.getElementsByClassName("cover_image_select");
    for (var i = 0; i < images_elem.length; i++) {
      if (images_elem[i].classList.contains("active")) {
        images_elem[i].classList.remove("active");
      }
    }
    e.target.classList.add("active");
    setProductsState({
      ...productsState,
      cover_photo: fileListArr[index],
    });
  }
  const getExtraFieldData = () => {
    let extraFieldsObj = {};
    extraFields.forEach((item) => {
      extraFieldsObj = {
        ...extraFieldsObj,
        [item.key]: item.value,
      };
    });
    console.log("extraFieldsObj", extraFieldsObj);
    return extraFieldsObj;
  };
  const addProduct = async (params) => {
    let extraFieldsData = getExtraFieldData();
    const loadingToastId = toast.loading("Loading..!");
    let formData = new FormData();
    debugger;
    if (!productsState.images === undefined) {
      for (const key of Object.keys(productsState.images)) {
        formData.append("active_images[]", productsState.images[key]);
      }
    }
    formData.append("title", productsState.title);
    formData.append("status", productsState.status);
    formData.append("description", productsState.description);
    formData.append("price", productsState.price);
    formData.append("location", productsState.location);
    formData.append("link", productsState.link);
    formData.append("extra_fields", JSON.stringify(extraFieldsData));
    formData.append("brand_id", 1);
    formData.append("cover_photo", productsState.cover_photo);
    if (!productsState.product_type === undefined) {
      formData.append("product_type", productsState.product_type);
    }

    if (productsState.isAddProduct) {
      try {
        const result = await productApis.addProduct(productsState, formData);
        console.log(result);
        if (result.error == false) {
          toast.dismiss(loadingToastId);
          toast.success("Product created!");
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
        const result = await productApis.updateProduct(productsState, formData);
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

  function addExtraFields(e) {
    var arr = [...extraFieldsArr];
    arr.push(1);
    setExtraFieldsArr(arr);
  }

  function removeExtraFields(e, i) {
    var arr = [...extraFieldsArr];
    var tempArr = [...extraFields];

    debugger;

    setExtraFields(
      tempArr.filter((item) => {
        return item.index != i;
      })
    );
    setExtraFieldsArr(
      arr.filter((item,index) => {
        return index != i;
      })
    );
  }
  const handleExtraField = (e, index) => {
    // console.log(change from)
    let tempIndexes = [...extraFields];
    if (e.target.name == "extra_fields_key") {
      let ifExist = tempIndexes.filter((item) => {
        return item.index == index;
      });
      debugger;
      if (ifExist.length > 0) {
        ifExist[0].key = e.target.value;
        var removedIfExist = tempIndexes.filter((item) => {
          return item.index != index;
        });
        removedIfExist.push(ifExist[0]);
        setExtraFields(removedIfExist);
      } else {
        //when first time
        debugger;
        tempIndexes.push({
          index: index,
          key: e.target.value,
          value: null,
        });
        setExtraFields(tempIndexes);
      }
    } else if (e.target.name == "extra_fields_value") {
      let ifExist = tempIndexes.filter((item) => {
        return item.index == index;
      });
      debugger;
      if (ifExist.length > 0) {
        ifExist[0]["value"] = e.target.value;
        var removedIfExist = tempIndexes.filter((item) => {
          return item.index != index;
        });
        removedIfExist.push(ifExist[0]);
        setExtraFields(removedIfExist);
      } else {
        tempIndexes.push({
          index: index,
          key: null,
          value: e.target.value,
        });
        setExtraFields(tempIndexes);
      }
    }
  };
  // console.log("extraFieldsArr", extraFieldsArr);
  console.log("extraFields", extraFields);
  return (
    <div className="mb-4">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {productsState.isAddProduct ? "Add Product" : "Edit Product"}
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
                {/* <Form.Group controlId="formGridState">
                  <Form.Label>Select Brand</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => handleChange(e)}
                    name="brand_id"
                  >
                    <option key="blankChoice" hidden value>
                      -- Select Brand --
                    </option>
                    {brands &&
                      brands.map((item) => {
                        return (
                          <option
                            key={item.id}
                            selected={
                              productsState &&
                              productsState.brand &&
                              productsState.brand.id == item.id
                            }
                            value={item.id}
                          >
                            {item.title}
                          </option>
                        );
                      })}
                  </Form.Control>
                </Form.Group> */}
                <Form.Group controlId="formGridproduct">
                  <Form.Label>Product Type</Form.Label>
                  <Form.Control
                    as="select"
                    value={productsState.product_type}
                    onChange={(e) => handleChange(e)}
                    name="product_type"
                  >
                    <option>Please select Product Type....</option>
                    <option value="used">Used</option>
                    <option value="popular">Popular</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="newly_launched">Newly Launched</option>
                  </Form.Control>
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
                <div className="d-flex">
                  <Form.Group className="mt-1" controlId="formBasicComments">
                    <Form.Label>Add more information about product.</Form.Label>
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
                      <div className="mt-3">
                        <div>
                          <Icofont
                            icon="close text-danger float-right mt-2 pt-4 cursor-pointer"
                            className="icofont-2x"
                            value={i}
                            onClick={(e) => removeExtraFields(e, i)}
                          />
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <Form.Group
                              className="mt-1"
                              controlId="formBasicComments"
                            >
                              <Form.Label>
                                Add extra Product heading.
                              </Form.Label>
                              <Form.Control
                                onChange={(e) => handleExtraField(e, i)}
                                name="extra_fields_key"
                                type="text"
                                placeholder="Add product heading...."
                              />
                            </Form.Group>
                          </div>
                          <div className="col-6">
                            <Form.Group
                              className="mt-1"
                              controlId="formBasicComments"
                            >
                              <Form.Label>
                                Add extra Product information.
                              </Form.Label>
                              <Form.Control
                                // disabled={extraFields.filter(item => item.index ==i).length < 0}
                                onChange={(e) => handleExtraField(e, i)}
                                name="extra_fields_value"
                                type="text"
                                placeholder="Add product information...."
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className="form-group preview row">
                  {file &&
                    file.length > 0 &&
                    file.map((item, index) => {
                      return (
                        <div key={item} className="col-12 col-lg-1">
                          <img
                            className="cover_image_select"
                            title="Select Image for Cover Photo"
                            src={item}
                            alt=""
                            height="100px"
                            width="100px"
                            onClick={(e) => selectCoverPhoto(e, item, index)}
                          />
                          <button
                            type="button"
                            className="close-btn"
                            onClick={() => deleteFile(index)}
                          >
                            <Icofont
                              icon="close-circled text-danger"
                              className="icofont-2x"
                            />
                          </button>
                        </div>
                      );
                    })}
                </div>
                {file && file.length} selected
                <div className="form-group">
                  <input
                    ref={myRefname}
                    type="file"
                    id="multi-img-field"
                    disabled={file && file.length === 5}
                    className="form-control d-none"
                    onChange={uploadSingleFile}
                    accept="image/x-png,image/gif,image/jpeg,image/jpg"
                    multiple
                  />
                  <span
                    className="btn btn-primary"
                    onClick={() => {
                      myRefname.current.click();
                    }}
                  >
                    choose file{" "}
                  </span>
                </div>
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
                  Cancel
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
