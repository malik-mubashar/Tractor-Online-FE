import React, { useState, useEffect, useContext, useRef } from "react";
import UploadPhotoLogo from "../../assets/img/upload-photos-logo.png";
import ProductsLogo from "../../assets/img/products-logo.png";
import PriceLogo from "../../assets/img/price-logo.png";
import { city } from "../../API/City/CityApis";
import { Button, Form, Modal } from "react-bootstrap";
import Select from "react-select";
import Icofont from "react-icofont";
import { productMappingApis } from "../../API/ProductMappingApis";
import { prodApi } from "../../API/ProdCategoriesApis";
import { RootContext } from "../../context/RootContext";
import toast from "react-hot-toast";
import { productApis } from "../../API/ProductApis";
import { brandApis } from "../../API/BrandsApis";
import { useHistory, useParams } from "react-router-dom";
import { isMobile } from "react-device-detect";
import '../../assets/css/postAdd.scss'

const postad = () => {
	const { id } = useParams();
  const myRefname = useRef(null);
  const { setShowLoader,prodCategories,cities,brands,currency_list} = useContext(RootContext);
  const [extraFieldsArr, setExtraFieldsArr] = useState([]);
	const history = useHistory();
	const [citiesForSelect, setCitiesForSelect] = useState([]);
  const [disablePriceField, setDisablePriceField] = useState(false);

  const [showCategoryModel, setShowCategoryModel] = useState(true);
  const [showCustomBrandField, setShowCustomBrandField] = useState(false);
  const [productMappings, setProductMappings] = useState([]);
  // const [prodCategories, setProdCategories] = useState([]);
  const [file, setFile] = useState([]);
  const [showModelError, setShowModelError] = useState(false);
  const [isImgSelected, setIsImgSelected] = useState(false);
	const [postAddState, setPostAddState] = useState({
		isEditAd:false,
    isCreateAd: true,
    status: "active",
    description: "",
    price: "",
    location: "",
    link: "",
    city: "",
    images: [],
    phone_no: "",
    custom_brand: ""
  });
  const fieldsMap = [
    { name: "title", required: true },
    { name: "status", required: true },
    {
      name: "product_category_id",
      required: true,
    },
    { name: "icon", required: false },
    // { name: "link", required: false },
    { name: "description", required: false },
    { name: "price", required: false },
    { name: "brand_id", required: true },
    { name: "phone_no", required: true },
    { name: "price_currency", required: false },
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
	const handleGetProductDetails = async (id) => {
		setShowLoader(true)
    const result = await productApis.getProductDetails(id);
		if (result.error === false) {
			setPostAddState({
				...postAddState,
				...result.data.data,
				productId:result.data.data.id
			})
			getExtraFields(result.data.data.extra_fields);
			setShowLoader(false);
			//because setstate is delaying
			return {
				...postAddState,
				...result.data.data,
				productId:result.data.data.id
			}
    }
	};
	useEffect(() => {
		if (id) {
			setShowCategoryModel(false)
			getAdData()
		}
	}, [id])
	useEffect(() => {

		if (cities.length > 0) {
			const tempArray = [];
			cities.map((item) =>
			tempArray.push({ ...item, label: item.title, value: item.title })
		);
	setCitiesForSelect(tempArray);
	}},[cities])
	const getAdData = async() => {
		const result =await handleGetProductDetails(id)
		convertPicsUrlToFileList(result)
	}



  const handleCloseCategoryModel = () => setShowCategoryModel(false);
  const handleShowCategoryModel = () => setShowCategoryModel(true);


  function handleChange(evt) {
    setPostAddState({
      ...postAddState,
      [evt.target.name]: evt.target.value,
    });
  }
  const doValidation = () => {
    var tempFieldsWithError = {};
    fieldsMap.forEach((fieldDetail) => {
      if (
        postAddState[fieldDetail.name] == undefined ||
        postAddState[fieldDetail.name] == "" ||
        postAddState[fieldDetail.name] == null
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
        postAddState[fieldDetail.name] != undefined ||
        postAddState[fieldDetail.name] != ""
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

  const handleCategoryClick = async () => {
    try {
      setShowLoader(true);
      const result = await productMappingApis.getMappingForPostAd(
        postAddState.product_category_id
      );
			if (result.error == false && result.data.status == "success") {
				if (result.data.product_mapping) {
					setProductMappings(result.data.product_mapping);
					getExtraFields(result.data.product_mapping.extra_fields);
				}
        setShowLoader(false);
        setShowCategoryModel(false);
      } else {
        setShowModelError(true);
        setShowLoader(false);
        toast.error("Error");
        console.error(result.data);
      }
    } catch (error) {
      setShowModelError(true);
      setShowLoader(false);
      toast.error("Error");
      console.error(error);
    }
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
      setShowLoader(true);
      let formData = new FormData();

      if (postAddState.images !== undefined) {
        for (const key of Object.keys(postAddState.images)) {
          formData.append("active_images[]", postAddState.images[key]);
        }
      }

      if (postAddState.cover_photo === undefined) {
        if (postAddState.images !== undefined) {
          formData.append("cover_photo", postAddState.images[0]);
        }
      } else {
        formData.append("cover_photo", postAddState.cover_photo);
			}

			formData.append("call_for_price", postAddState.call_for_price);
      formData.append("title", postAddState.title);
      formData.append("status", postAddState.status);
      formData.append("description", postAddState.description);
			formData.append("price", postAddState.price);
			formData.append("price_currency", postAddState.price_currency);

      formData.append("location", postAddState.location);
      formData.append("phone_no", postAddState.phone_no);
      // formData.append("link", postAddState.link);
      formData.append("extra_fields", JSON.stringify(extraFieldsData));
      formData.append("featured", false);
      formData.append("brand_id", postAddState.brand_id);
      formData.append("user_id", user.id);
      formData.append("city", postAddState.city);
      if (postAddState.custom_brand !== undefined){
        formData.append("custom_brand", postAddState.custom_brand);
      }
      if (postAddState.isCreateAd) {
        formData.append(
          "product_category_id",
          postAddState.product_category_id
        );
      }
      if (id===undefined) {
        try {
          const result = await productApis.addProduct(postAddState, formData);
          if (result.error == false) {
            setShowLoader(false);
						toast.success("Add Posted!");
						history.push('/profile/my-ads')
          }
          if (result.error === true) {
            setShowLoader(false);
            toast.error("Error !");
          }
        } catch (error) {
          setShowLoader(false);
          toast.error("Error !");
          console.error(error);
        }
			} else {
				try {
          const result = await productApis.updateProduct(
            postAddState,
            formData
					);
          if (result.error === false) {
            toast.success("Ad updated!");
						history.push('/profile/my-ads')
         
          }
        } catch (error) {
          toast.error("error");
          console.error(error);
        }
			}
    } else {
      toast.error("Validation Failed..!");
      toast("please enter the values in red fields");
    }
	};
	const convertPicsUrlToFileList = async (tempState) => {
		const dataTransfer = new DataTransfer();
		for (var i = 0; i < tempState.active_images_path.length; i++) {
			await fetch(tempState.active_images_path[i])
				.then((res) => res.blob())
				// eslint-disable-next-line no-loop-func
				.then((myBlob) => {
					const myFile = new File([myBlob], `image${i}.jpeg`, {
						type: myBlob.type,
					});
					dataTransfer.items.add(myFile);
				});
		}
		uploadFiles({
			target: {
			files:dataTransfer.files
		}},true,tempState)
	}
	function uploadFiles(e, callFromFunction = false, tempPostAdState = null) {
		// i used tempPostAdState because setState was not updating the value imidatly
		if (callFromFunction) {
			//this block will run only one time
			const input = document.getElementById("multi-img-field");
			input.files = e.target.files;
		}
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
		setFile([...file, ...ImagesArray]);
		let temp = [...postAddState.images, ...e.target.files];
		if (callFromFunction) {
			setPostAddState({
			//this block will run only one time
				...tempPostAdState,
				images: temp,
			});
		} else {
			setPostAddState({
				...postAddState,
				images: temp,
			});
		}
		
		const dataTransfer = new DataTransfer();
		const input = document.getElementById("multi-img-field");
		for (var i = 0; i < temp.length; i++) { 
			dataTransfer.items.add(temp[i]);
		}
		input.files = dataTransfer.files;

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
    setPostAddState({
      ...postAddState,
      cover_photo: fileListArr[index],
    });
  }
  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    const input = document.getElementById("multi-img-field");
    const fileListArr = Array.from(input.files);
		const templist = fileListArr.filter((item, index) => index !== e); // here u remove the file
		const dataTransfer = new DataTransfer();
		for (var i = 0; i < templist.length; i++){
			dataTransfer.items.add(templist[i]);
		}
		input.files = dataTransfer.files;

    if (file.length === 1) {
      setIsImgSelected(false);
		}
    setPostAddState({
      ...postAddState,
      images: templist,
    });
	}

	console.log('postAddState',postAddState)
	console.log('postAddState.call_for_price',postAddState.call_for_price)
  return postAddState.call_for_price !== undefined ? (
    <>
      <div className="card text-center my-4 p-4">
        <h2 className="post-ad-heading">
          2 Simple Steps to Sell Your Product!
        </h2>
        <h5 className="px-3">It takes under a minute and is free.</h5>
        <div>
          <img
            className="post-add-images-logo mx-2"
            src={ProductsLogo}
            height="60px"
            width="60px"
            alt="no"
          />
          <b>Enter Your Product Information </b>
          <img
            className="post-add-images-logo mx-2"
            src={UploadPhotoLogo}
            height="60px"
            width="60px"
            alt="no"
          />
          <b>Upload Photos</b>
        </div>
      </div>
      <div className="container card my-4 p-lg-5 p-3">
        <h3 className="post-ad-heading">Product Information</h3>
        <b>(All fields marked with * are mandatory)</b>
        <div className="row my-2">
          <div className="col-lg-3 col-12 text-lg-right">
            <Form.Label>Title <span className="required-field">*</span></Form.Label>
          </div>
          <div className="addEditProd col-lg-4 col-12">
            <Form.Group controlId="formBasicName">
              <Form.Control
                className={
                  fieldsWithError.title === true ? "border-danger" : ""
                }
                defaultValue={postAddState.title}
                name="title"
                type="text"
                placeholder="Enter Product Title"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </div>
          <div className="col-5 d-sm-none d-lg-block d-none">
            <Icofont
              icon="light-bulb text-info"
              className="icofont-2x col-3"
              style={{ fontSize: "3rem" }}
            />
            <span className="col-9 mt-3">
              We don't allow duplicates of same ad.
            </span>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-lg-3 col-12 text-lg-right">
            <Form.Label>Product Brand <span className="required-field">*</span></Form.Label>
          </div>
          <div className="addEditProd col-lg-4 col-12">
            <Form.Control
              className={
                fieldsWithError.brand_id === true ? "border-danger" : ""
              }
              as="select"
              onChange={(e) => {
                if (e.currentTarget.value === 'other'){
                  setShowCustomBrandField(true)
                }
                else{
                  setShowCustomBrandField(false)
                  postAddState.custom_brand = undefined
                }
                handleChange(e)
              }}
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
                        postAddState &&
                        postAddState.brand &&
                        postAddState.brand.id === item.id
                      }
                      key={item.id}
                    >
                      {item.title}
                    </option>
                  );
                })}
                <option key="other" value='other'>
                  Other
                </option>
            </Form.Control>
          </div>
        </div>
        {showCustomBrandField ?
          <div className="row my-2">
            <div className="col-lg-3 col-12 text-lg-right">
              <Form.Label>Custom Brand</Form.Label>
            </div>
            <div className="addEditProd col-lg-4 col-12">
              <Form.Group controlId="formBasicName">
                <Form.Control
                  defaultValue={postAddState.custom_brand}
                  name="custom_brand"
                  type="text"
                  placeholder="Enter Your Custom brand"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </div>
          </div>
         :
          null
         }
				<div className="row my-2">
					<div className="col-lg-3 col-12 text-lg-right">
            <Form.Label>City</Form.Label>
					</div>
					<div className="addEditProd col-lg-4 col-12">
					<Form.Control
								className={
									fieldsWithError.city === true ? "border-danger" : ""
								}
								as="select"
								onChange={(e) => {
									if (e)
										setPostAddState({
											...postAddState,
											city: e.target.value,
										});
								}}
								name="city"
							>
								<option key="blankChoice" hidden value>
									-- Select City--
								</option>
								{citiesForSelect &&
									citiesForSelect.map((item) => {
										return (
											<option
												value={item.title}
												selected={
													postAddState &&
													postAddState.city &&
													postAddState.city === item.title
												}
												key={item.id}
											>
												{item.title}
											</option>
										);
									})}
							</Form.Control>
					</div>
				</div>
				<div className="row my-2">
						<Form.Group className="d-flex mt-3" controlId="formGridproduct">
							<div className="col-lg-3 col-12 text-lg-right">
								<Form.Label>Call for price</Form.Label>
							</div>
							<div className="addEditProd col-lg-4 col-12">
								<Form.Check
									type="checkbox"
									className="ml-4 mt-2"
									defaultChecked={
										postAddState && postAddState.call_for_price == true
											? true
											: false
									}
									// value={productsState.product_type}
									onChange={(e) => {
										setPostAddState({
											...postAddState,
											call_for_price: e.currentTarget.checked,
										});
										if (e.currentTarget.checked == true) {
											setDisablePriceField(true)
											setPostAddState({
												...postAddState,
												price: 0,
											});
										} else {
											setDisablePriceField(false)
										}
									}}
									name="featured"
									>
								</Form.Check>
							</div>
					</Form.Group>
				</div>

        <div className="row my-2">
          <div className="col-lg-3 col-12 text-lg-right">
            <Form.Label>Price </Form.Label>
          </div>
          <div className="addEditProd col-lg-4 col-12">
						<Form.Control
							disabled={disablePriceField}
              className={fieldsWithError.price === true ? "border-danger" : ""}
              defaultValue={postAddState.price}
              name="price"
              type="text"
              placeholder="price"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-5 d-lg-block d-none">
            <Icofont
              icon="light-bulb text-info"
              className="icofont-2x col-3"
              style={{ fontSize: "3rem" }}
            />
            <span className="col-9">
              To receive more sincere responses, please enter a reasonable
              price.
            </span>
          </div>
				</div>
				<div className="row my-2">
					<div className="col-lg-3 col-12 text-lg-right">
						<Form.Label>Price Currency </Form.Label>
					</div>
					<div className="addEditProd col-lg-4 col-12">
						<Form.Control
						className={
							fieldsWithError.price_currency === true ? "border-danger" : ""
						}
						as="select"
						onChange={(e) => handleChange(e)}
						name="price_currency"
					>
						<option key="blankChoice" hidden value>
							-- Select Price Currency --
						</option>
						{currency_list &&
							currency_list.map((item,id) => {
								return (
									<option
										value={item.value}
										selected={
											postAddState &&
											postAddState.price_currency &&
											postAddState.price_currency == item.value
										}
										key={id}
									>
										{item.label}
									</option>
								);
							})}
						</Form.Control>
					</div>
        </div>
				
        <div className="row my-2">
          <div className="col-lg-3 col-12 text-lg-right">
            <Form.Label>Phone Number <span className="required-field">*</span></Form.Label>
          </div>
          <div className="addEditProd col-lg-4 col-12">
            <Form.Control
              className={
                fieldsWithError.phone_no === true ? "border-danger" : ""
              }
              defaultValue={postAddState.phone_no}
              name="phone_no"
              type="text"
              placeholder="Phone Number"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-lg-3 col-12 text-lg-right">
            <Form.Label>Address</Form.Label>
          </div>
          <div className="addEditProd col-lg-4 col-12">
            <Form.Control
              className={
                fieldsWithError.location === true ? "border-danger" : ""
              }
              defaultValue={postAddState.location}
              name="location"
              type="text"
              placeholder="Address"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        {extraFieldsArr && extraFieldsArr.length > 0 && (
          <div>
            {extraFieldsArr.map((item, i) => {
              return (
                <div className="row my-2" key={i}>
                  <div className="col-lg-3 col-12 text-lg-right">
                    <Form.Label>{item && item.key}</Form.Label>
                  </div>
                  <div className="addEditProd col-lg-4 col-12">
                    <Form.Control
                      value={item && item.value}
                      onChange={(e) => handleExtraField(e, item.id)}
                      name="extra_fields_value"
                      type="text"
                      placeholder={`Add product ${item && item.key}....`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="row my-2">
          <div className="col-lg-3 col-12 text-lg-right">
            <Form.Label>Description</Form.Label>
          </div>
          <div className="addEditProd col-lg-8 col-12">
            <Form.Control
              className={
                fieldsWithError.description === true ? "border-danger" : ""
              }
              defaultValue={postAddState.description}
              name="description"
              as="textarea"
              rows={5}
              placeholder="Describe Your Product:&#10;Example: Condition, first owner, genuine parts, if Tractor excellent mileage, original paint etc."
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
      <div className="container card my-4 p-lg-5 p-3">
        <h3 className="post-ad-heading">Upload Photos</h3>
        <div className="my-2">
          <div className={`upload-image-container`}>
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
            <div>
              <div className="d-lg-flex justify-content-lg-center text-center">
                <img
                  className="post-add-images-logo mx-2 mr-4"
                  src={UploadPhotoLogo}
                  height="70px"
                  width="70px"
                  alt="no"
                />
                <div className="mt-2 text-center">
                  <button
                    className="btn btn-success mb-2"
                    onClick={() => {
                      myRefname.current.click();
                    }}
                  >
                    + Add Photos
                  </button>
                  <p>(Max limit 5 MB per image)</p>
                </div>
              </div>
              <div className="row">
                {isImgSelected ? (
                  <p className="text-primary">
                    Please Select an image for cover photo, Otherwise first
                    image will be your cover photo for your ad.
                  </p>
                ) : null}
                {file &&
                  file.length > 0 &&
                  file.map((item, index) => {
                    return (
                      <div
                        key={item}
                        className="col-12 col-lg-3 cover-photo-container mt-3 my-4"
                      >
                        <img
                          className="cover_image_select"
                          src={item}
                          alt=""
                          height="150px"
                          width="150px"
                          onClick={(e) => selectCoverPhoto(e, item, index)}
                        />
                        <button
                          type="button"
                          className="close-btn"
                          style={{ left: "148px" }}
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
              <div className="row my-4">
                <div class="col-md-5 d-flex ml-auto">
                  <Icofont
                    icon="check-circled text-success"
                    className="icofont-2x col-1"
                  />
                  <span className="col-11">
                    <strong>Adding at least 8 pictures </strong> enhances the
                    possibility of a rapid sale.
                  </span>
                </div>
                <div class="col-md-5 d-flex mr-auto">
                  <Icofont
                    icon="check-circled text-success"
                    className="icofont-2x col-1"
                  />
                  <span className="col-11">
                    <strong>
                      Adding clear Front, Back and Interior pictures{" "}
                    </strong>{" "}
                    the quality of your advertisement and makes you more
                    noticeable.
                  </span>
                </div>
              </div>
              <div className="row my-4">
                <div class="col-md-5 d-flex mx-auto">
                  <Icofont
                    icon="check-circled text-success"
                    className="icofont-2x col-1"
                  />
                  <span className="col-11">
                    <strong>Photos should be </strong> in 'jpeg, jpg, png, gif'
                    format only.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-lg-right pr-0 mb-3">
        <Button
          onClick={() => {
            addProduct();
          }}
          j
          size="lg"
          variant="success"
        >
          Post Add
        </Button>
      </div>

      <Modal
        show={showCategoryModel}
        onHide={handleCloseCategoryModel}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header>
          <Modal.Title>Select Product Category</Modal.Title>
        </Modal.Header>
				<Modal.Body style={{ height: `${isMobile ? '500px' : '600px'}` }} className="overflow-auto">
          {showModelError ? (
            <p className="text-danger">
              Please select category first to continue.
            </p>
          ) : null}
          <div className="row">
            {prodCategories &&
              prodCategories.map((item, idx) => (
								<div key={ idx} className={`col-lg-6 col-12`}>
                  <div
                    id={item.id}
                    onClick={(e) => {
                      setPostAddState({
                        ...postAddState,
                        product_category_id: e.currentTarget.id,
                      });
                      setShowModelError(false);
                      var active_elem = document.getElementsByClassName(
                        "product-cat-select-btns-active"
                      );
                      if (active_elem.length > 0) {
                        active_elem[0].classList.add("product-cat-select-btns");
                        active_elem[0].classList.remove(
                          "product-cat-select-btns-active"
                        );
                      }
                      e.currentTarget.classList.add(
                        "product-cat-select-btns-active"
                      );
                      e.currentTarget.classList.remove(
                        "product-cat-select-btns"
                      );
                    }}
										className={`${isMobile?'mobile-height':''} px-2 d-flex align-items-center ${postAddState.product_category_id === item.id ? 'product-cat-select-btns-active' : 'product-cat-select-btns'} my-2`}
                  >
                    <img
                      src={item.active_image_thumbnail}
                      alt="category"
                      className="rounded"
                      height={`${isMobile?'40px':'100px'}`}
                      width={`${isMobile?'40px':'100px'}`}
                    />
                    <h5 className="ml-3">{item.title}</h5>
                  </div>
                </div>
              ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              handleCategoryClick();
            }}
            disabled={postAddState.product_category_id ? false : true}
            variant="primary"
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
	)
	:(<></>)
};

export default postad;
