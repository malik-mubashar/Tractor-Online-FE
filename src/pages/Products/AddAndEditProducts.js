import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { productApis } from "../../API/ProductApis";
import { brandApis } from "../../API/BrandsApis";
import Icofont from "react-icofont";
import { object } from "prop-types";
import { prodApi } from "../../API/ProdCategoriesApis";
import { productMappingApis } from "../../API/ProductMappingApis";
import { city } from "../../API/City/CityApis";
import Select from "react-select";

export default function AddAndEditProduct({
  productsState,
  setProductsState,
  getProducts,
}) {
	var mutex = true;
  const [brands, setBrands] = useState();
  const [picturesLoader, setPicturesLoader] = useState(false);
  const [productMappings, setProductMappings] = useState([]);
  const myRefname = useRef(null);
  const [file, setFile] = useState([]);
  const [cities, setCities] = useState([]);
  const [extraFieldsArr, setExtraFieldsArr] = useState([
    // {
    //   id: parseInt(
    //     new Date().getTime().toString() + Math.floor(Math.random() * 1000000)
    //   ),
    //   key: null,
    //   value: null,
    // },
  ]);
  const fieldsMap = [
    { name: "title", required: true },
    { name: "status", required: true },
    {
      name: "product_category_id",
      required: productsState && productsState.isAddProduct ? true : false,
    },
    { name: "icon", required: false },
    // { name: "link", required: false },
    { name: "description", required: false },
    { name: "price", required: false },
    { name: "brand_id", required: true },
    { name: "phone_no", required: true },
  ];
  const [fieldsWithError, setFieldsWithError] = useState({
    description: false,
    icon: false,
    // link: false,
    product_category_id: false,
    status: false,
    title: false,
    phone_no: false,
  });
  const doValidation = () => {
    var tempFieldsWithError = {};
    fieldsMap.forEach((fieldDetail) => {
     
      if (
        productsState[fieldDetail.name] == undefined ||
        productsState[fieldDetail.name] == "" ||
        productsState[fieldDetail.name] == null
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
        productsState[fieldDetail.name] != undefined ||
        productsState[fieldDetail.name] != ""
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

  const getProductMappings = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await productMappingApis.getProductMappings(
        page,
        mainSearch,
        noOfRec
      );

      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setProductMappings(result.data.data);
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
    setProductsState({
      ...productsState,
      [evt.target.name]: evt.target.value,
    });
  }

	function uploadFiles(e,callFromFunction=false) {
		if (callFromFunction) {
			//this block will run only one time
			mutex = false;
			const input = document.getElementById("multi-img-field");
			input.files = e.target.files;
		}
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
		setFile([...file, ...ImagesArray]);
		let temp = [...productsState.images, ...e.target.files];
    setProductsState({
      ...productsState,
      images: temp,
		});
		
		const dataTransfer = new DataTransfer();
		const input = document.getElementById("multi-img-field");
		for (var i = 0; i < temp.length; i++) { 
			dataTransfer.items.add(temp[i]);
		}
		input.files = dataTransfer.files;

	}
	const convertPicsUrlToFileList = async () => {
		setPicturesLoader(true)
		const dataTransfer = new DataTransfer();
		for (var i = 0; i < productsState.imagesPath.length; i++) {
			await fetch(productsState.imagesPath[i])
				.then((res) => res.blob())
				// eslint-disable-next-line no-loop-func
				.then((myBlob) => {
					const myFile = new File([myBlob], `image${i}.jpeg`, {
						type: myBlob.type,
					});
					dataTransfer.items.add(myFile);
				});
		}
		setPicturesLoader(false);
		uploadFiles({
			target: {
			files:dataTransfer.files
		}},true)
	}
  useEffect(() => {
    getAllCity();
    getBrands(1, "", 100000000);
		getProductMappings(1, "", 1000000);
		if (productsState.isEditProduct && productsState.imagesPath.length > 0) {
			convertPicsUrlToFileList()
		}
  }, []);

  useEffect(() => {
    if (productsState.isEditProduct === true) {
      getExtraFields(productsState.extra_fields);
    }
  }, [productsState.extra_fields]);

  const getAllCity = async () => {
    const result = await city.getAllCities();
    const tempArray = [];
    result &&
      result.data &&
      result.data.data.map((item) =>
        tempArray.push({ ...item, label: item.title, value: item.title })
      );
    setCities(tempArray);
  };

  const getExtraFields = (extraFieldObject) => {
    if (Object.entries(extraFieldObject).length > 0) {
      let tempExtraFieldsArr = [];
      Object.entries(extraFieldObject).forEach((item, i) => {
        tempExtraFieldsArr.push({
          id:
            new Date().getTime().toString() +
            Math.floor(Math.random() * 1000000),
          key: item[0],
          value: item[1],
        });
      });
      setExtraFieldsArr(tempExtraFieldsArr);
    }
  };
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

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    const input = document.getElementById("multi-img-field");
    const fileListArr = Array.from(input.files);
		const templist = fileListArr.filter((item, index) => index !== e); // here u remove the file

		//for filtering images from for input element
		const dataTransfer = new DataTransfer();
		for (var i = 0; i < templist.length; i++){
			dataTransfer.items.add(templist[i]);
		}
		//setting filtered images to input element
		input.files = dataTransfer.files;
		//////


    setProductsState({
      ...productsState,
      images: templist,
    });
  
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
  const getExtraFieldDataForApi = () => {
    let extraFieldsObj = {};
    extraFieldsArr.forEach((item) => {
      extraFieldsObj = {
        ...extraFieldsObj,
        [item.key]: item.value,
      };
    });
    
    return extraFieldsObj;
  };

  const addProduct = async (params) => {
    if (!doValidation()) {
      var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;

      let extraFieldsData = getExtraFieldDataForApi();
      const loadingToastId = toast.loading("Loading..!");
      let formData = new FormData();

      if (productsState.images !== undefined) {
        for (const key of Object.keys(productsState.images)) {
          formData.append("active_images[]", productsState.images[key]);
        }
      }

      if (productsState.cover_photo === undefined || productsState.cover_photo === null) {
        if (productsState.images !== undefined) {
          formData.append("cover_photo", productsState.images[0]);
        }
      } else {
        formData.append("cover_photo", productsState.cover_photo);
      }
      formData.append("title", productsState.title);
      formData.append("status", productsState.status);
      formData.append("description", productsState.description);
      formData.append("price", productsState.price);
      formData.append("location", productsState.location);
      formData.append("phone_no", productsState.phone_no);
      // formData.append("link", productsState.link);
      formData.append("extra_fields", JSON.stringify(extraFieldsData));
       
      formData.append("featured", productsState.featured);
      formData.append("brand_id", productsState.brand_id);
      formData.append("user_id", user.id);
      formData.append("city", productsState.city);
      if (productsState.isAddProduct) {
        formData.append(
          "product_category_id",
          productsState.product_category_id
        );
      }

      if (productsState.isAddProduct) {
        try {
          const result = await productApis.addProduct(productsState, formData);
         
          if (result.error == false) {
            toast.dismiss(loadingToastId);
            toast.success("Product created!");
            setProductsState({
              ...productsState,
              isAddProduct: false,
							isEditProduct: false,
							products: null,
							status: "active",
							description: "",
							price: "",
							location: "",
							link: "",
							city: "",
							phone_no: "",
							images: [],
							imagesPath: [],
							title: '',
							cover_photo:null
							
            });
            getProducts(1, "", 10);
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
      } else if (productsState.isEditProduct) {
        try {
          const result = await productApis.updateProduct(
            productsState,
            formData
					);
					debugger;
          if (result.error === false) {
            toast.success("Product updated!");
            toast.dismiss(loadingToastId);
            setProductsState({
              ...productsState,
							isEditProduct: false,
							products: null,
							status: "active",
							description: "",
							price: "",
							location: "",
							link: "",
							city: "",
							phone_no: "",
							images: [],
							imagesPath: [],
							title: '',
							cover_photo:null
            });
            getProducts(1, "", 10);
          }
        } catch (error) {
          toast.dismiss(loadingToastId);
          toast.error("error");
          console.error(error);
        }
      }
    } else {
      toast.error("Validation Failed..!");
      toast("please enter the values in red fields");
    }
  };

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

  const handleProductCategoryChange = (e) => {
    handleChange(e);
    var temp = productMappings.find((item) => {
      return item.product_category.id == e.target.value;
    });
    getExtraFields(temp.extra_fields);
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
                  {productsState.isAddProduct ? "Add Product" : "Edit Product"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.title === true ? "border-danger" : ""
                    }
                    defaultValue={productsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Product Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                {productsState && productsState.isAddProduct ? (
                  <Form.Group controlId="formGridState">
                    <Form.Label>Product Category</Form.Label>
                    <Form.Control
                      className={
                        fieldsWithError.product_category_id === true
                          ? "border-danger"
                          : ""
                      }
                      as="select"
                      onChange={(e) => handleProductCategoryChange(e)}
                      name="product_category_id"
                    >
                      <option key="blankChoice" hidden value>
                        -- Select Product Category --
                      </option>
                      {productMappings &&
                        productMappings.map((item) => {
                          return (
                            <option
                              value={item.product_category.id}
                              key={item.product_category.id}
                            >
                              {item.product_category.title}
                            </option>
                          );
                        })}
                    </Form.Control>
                  </Form.Group>
                ) : null}
                <div className="bg-light p-4 mt-2">
                  <div className="d-flex">
                    <Form.Group className="mt-1" controlId="formBasicComments">
                      <Form.Label>More information about product.</Form.Label>
                    </Form.Group>
                  </div>
                  {extraFieldsArr &&
                    extraFieldsArr.map((item, i) => {
                      return (
                        <div className="mt-1" key={i}>
                          <div className="col-12">
                            <Form.Group
                              className="mt-1"
                              controlId="formBasicComments"
                            >
                              <Form.Label>{item && item.key}</Form.Label>
                              <Form.Control
                                value={item && item.value}
                                onChange={(e) => handleExtraField(e, item.id)}
                                name="extra_fields_value"
                                type="text"
                                placeholder="Add product information...."
                              />
                            </Form.Group>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <Form.Group controlId="formBasicComments">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.price === true ? "border-danger" : ""
                    }
                    defaultValue={productsState.price}
                    name="price"
                    type="text"
                    placeholder="price"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <div className="addEditProd">
                  <Form.Label>City</Form.Label>
                  <Select
                    className="ui-autocomplete-input form-control searchAble border-right "
                    options={cities}
                    name="city"
                    label="Select City"
                    placeholder="Select City"
                    onChange={(e) => {
                      setProductsState({
                        ...productsState,
                        city: e.title,
                      });
                    }}
                    clearable={false}
                  />
                </div>
                <Form.Group controlId="formBasicComments">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.phone_no === true ? "border-danger" : ""
                    }
                    defaultValue={productsState.phone_no}
                    name="phone_no"
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicComments">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.location === true ? "border-danger" : ""
                    }
                    defaultValue={productsState.location}
                    name="location"
                    type="text"
                    placeholder="Address"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group controlId="formGridState">
                  <Form.Label>Product Brand</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.brand_id === true ? "border-danger" : ""
                    }
                    as="select"
                    onChange={(e) => handleChange(e)}
                    name="brand_id"
                  >
                    <option key="blankChoice" hidden value>
                      -- Select Product Brand --
                    </option>
                    {brands &&
                      brands.map((item) => {
                        return (
                          <option
                            value={item.id}
                            selected={
                              productsState &&
                              productsState.brand &&
                              productsState.brand.id == item.id
                            }
                            key={item.id}
                          >
                            {item.title}
                          </option>
                        );
                      })}
                  </Form.Control>
                </Form.Group>
                {/*<Form.Group controlId="formGridproduct">
                  <Form.Label>Product Type</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.product_type === true
                        ? "border-danger"
                        : ""
                    }
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
                </Form.Group>*/}
                <Form.Group controlId="formGridState">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.status === true ? "border-danger" : ""
                    }
                    as="select"
                    value={productsState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">In-active</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="d-flex mt-3" controlId="formGridproduct">
                  <Form.Label>Is Featured</Form.Label>
                  <Form.Check
                    type="checkbox"
                    className="ml-4 mt-2"
                    defaultChecked={
                      productsState && productsState.featured == true
                        ? true
                        : false
                    }
                    // value={productsState.product_type}
                    onChange={(e) => {
                      setProductsState({
                        ...productsState,
                        featured: e.currentTarget.checked,
                      });
                    }}
                    name="featured"
                  ></Form.Check>
                </Form.Group>
                <Form.Group controlId="formBasicComments">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    className={
                      fieldsWithError.description === true
                        ? "border-danger"
                        : ""
                    }
                    defaultValue={productsState.description}
                    name="description"
                    as="textarea"
                    rows={3}
                    placeholder="description"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
								<div className="form-group preview row mt-4">
									{
										picturesLoader ===true && productsState.isEditProduct?'loading pictures ...':null
									}
                  {file &&
                    file.length > 0 &&
                    file.map((item, index) => {
                      return (
                        <div
                          key={item}
                          className="col-12 col-lg-1 cover-photo-container mt-3"
                        >
                          <img
                            className="cover_image_select"
                            src={item}
                            alt=""
                            height="100px"
                            width="100px"
                            onClick={(e) => selectCoverPhoto(e, item, index)}
                          />
                          <div className="cover-photo-title">
                            Select image for Cover Photo
                          </div>
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
                    onChange={uploadFiles}
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
											status: "active",
											description: "",
											price: "",
											location: "",
											link: "",
											city: "",
											phone_no: "",
											images:[]
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
