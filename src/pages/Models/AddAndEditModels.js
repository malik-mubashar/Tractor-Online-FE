import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { modelApis } from "../../API/ModelsApis";
import { productApis } from "../../API/ProductApis";
// import { modelApis } from "../../API/ModelsApis";

export default function AddAndEditModels({
  modelsState,
  setModelsState,
  getModels,
}) {
  const fieldsMap = [
    { name: "title", required: true },
    { name: "status", required: true },
    { name: "link", required: false },
    { name: "description", required: false },
    { name: "image", required: true },
    { name: "icon", required: false },
    { name: "product_id", required: true },
  ];
  const [fieldsWithError, setFieldsWithError] = useState({
    description: false,
    image: false,
    link: false,
    status: false,
    title: false,
    icon: false,
    product_id: false,
	});
	const [products, setProducts] = useState([])
	useEffect(() => {
		getProducts(1, '', 10000000000)

	}, [])
	
	const getProducts = async (tempPage, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
			const result = await productApis.getProducts(tempPage, mainSearch, noOfRec);
			 
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);
				 setProducts(result.data.data,)
      } else {
        toast.dismiss(loadingToastId);
        console.error(result.data);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };
  const doValidation = () => {
    var tempFieldsWithError = {};
    fieldsMap.forEach((fieldDetail) => {
      if (
        modelsState[fieldDetail.name] == undefined ||
				modelsState[fieldDetail.name] == "" ||
				modelsState[fieldDetail.name] == null
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
        modelsState[fieldDetail.name] != undefined ||
        modelsState[fieldDetail.name] != ""
      ) {
        if (fieldDetail.required === true) {
          tempFieldsWithError = {
            ...tempFieldsWithError,
            [fieldDetail.name]: false,
          };
        }
      }
    });

    if (modelsState.isEditCategoryBrand === true) {
      tempFieldsWithError.image = false;
    }
    var isValidationFailed = false;
    setFieldsWithError(tempFieldsWithError);
    Object.values(tempFieldsWithError).forEach((item) => {
      if (item === true) {
        isValidationFailed = true;
      }
    });

    return isValidationFailed;
  };
  function handleChange(evt) {
    setModelsState({
      ...modelsState,
      [evt.target.name]: evt.target.value,
    });
  }

  const handlePictureUpload = (pic) => {
    setModelsState({
      ...modelsState,
      image: pic,
    });
  };

  const addModels = async (params) => {
    if (!doValidation()) {
      const loadingToastId = toast.loading("Loading..!");

      if (modelsState.isAddModel) {
        try {
          const result = await modelApis.addModel(modelsState);
          if (result.error === false) {
            toast.dismiss(loadingToastId);
            toast.success("Model created!");
            setModelsState({
              ...modelsState,
              isAddModel: false,
              isEditModel: false,
            });
            getModels(1, "", 10);
          } else if (result.error === true) {
            toast.dismiss(loadingToastId);
            toast.error("failed");
          }
        } catch (error) {
          toast.dismiss(loadingToastId);
          toast.error("error");

          console.error(error);
        }
      } else if (modelsState.isEditModel) {
        try {
          const result = await modelApis.updateModel(modelsState);
          if (result.error == false) {
            toast.success("Model updated!");
            toast.dismiss(loadingToastId);
            setModelsState({
              ...modelsState,
              isEditModel: false,
            });
            getModels(1, "", 10);
          }
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      toast.error("Validation Failed");
    }
  };
  return (
    <div className="mb-4 mt-5">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {modelsState.isAddModel ? "Add Model" : "Edit Model"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title <span className="required-field">*</span></Form.Label>
									<Form.Control
										  className={
												fieldsWithError.title === true ? "border-danger" : ""
											}
                    defaultValue={modelsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Model Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Status <span className="required-field">*</span></Form.Label>
									<Form.Control
										  className={
												fieldsWithError.status === true ? "border-danger" : ""
											}
                    as="select"
                    value={modelsState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option value hidden>-- Select Model Status --</option>
                    <option value="active">active</option>
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
								</Form.Group>
								
								<Form.Group controlId="formGridState">
                  <Form.Label>Select Product <span className="required-field">*</span></Form.Label>
									<Form.Control
										  className={
												fieldsWithError.product_id === true ? "border-danger" : ""
											}
                    as="select"
                    onChange={(e) => handleChange(e)}
                    name="product_id"
                  >
                    <option value hidden>-- Select Product --</option>
										{
											products && products.map((item) => {
												return (
													<>
													<option
														key={item.id}
														selected={
															modelsState &&
															modelsState.product_id ==
																item.id
														}
														value={item.id}
													>
														{item.title}
													</option>
												</>
												)
											})
										}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Link</Form.Label>
									<Form.Control
										  className={
												fieldsWithError.link === true ? "border-danger" : ""
											}
                    defaultValue={modelsState.link}
                    name="link"
                    type="text"
                    placeholder="Link"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Icon</Form.Label>
									<Form.Control
										  className={
												fieldsWithError.icon === true ? "border-danger" : ""
											}
                    defaultValue={modelsState.icon}
                    name="icon"
                    type="text"
                    placeholder="icon"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload New Picture <span className="required-field">*</span></Form.Label>
									<Form.Control
										  className={
												fieldsWithError.image === true ? "border-danger form-control p-1" : "form-control p-1"
											}
                    type="file"
                    placeholder=""
                    multiple
                    onChange={(e) => {
                      handlePictureUpload(e.target.files[0]);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicComments">
                  <Form.Label>Description</Form.Label>
									<Form.Control
										  className={
												fieldsWithError.description === true ? "border-danger" : ""
											}
                    as="textarea"
                    defaultValue={modelsState.description}
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
                    setModelsState({
                      ...modelsState,
                      isAddModel: false,
                      isEditModel: false,
                    })
                  }
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    addModels();
                  }}
                  variant={modelsState.isAddModel ? "success" : "warning"}
                >
                  {modelsState.isAddModel ? "Create" : "Update"}
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
