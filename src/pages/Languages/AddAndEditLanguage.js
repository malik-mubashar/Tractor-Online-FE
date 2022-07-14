import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { languageApis } from "../../API/LanguagesApis ";

export default function AddAndEditLanguage({
  languagesState,
  setLanguagesState,
  getLanguages,
}) {
	const fieldsMap = [
    { name: "title", required: true },
    { name: "status", required: true },

  ];
  const [fieldsWithError, setFieldsWithError] = useState({
    status: false,
    title: false,
	});
	const doValidation = () => {
    var tempFieldsWithError = {};
    fieldsMap.forEach((fieldDetail) => {
      console.log(languagesState);
      if (
        languagesState[fieldDetail.name] == undefined ||
				languagesState[fieldDetail.name] == "" ||
				languagesState[fieldDetail.name] == null
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
        languagesState[fieldDetail.name] != undefined ||
        languagesState[fieldDetail.name] != ""
      ) {
         

        if (fieldDetail.required === true) {
          tempFieldsWithError = {
            ...tempFieldsWithError,
            [fieldDetail.name]: false,
          };
        }
      }
    });
     
    console.log("tempFieldsWithError", tempFieldsWithError);
    var isValidationFailed = false;
    console.log(tempFieldsWithError);
    setFieldsWithError(tempFieldsWithError);
    Object.values(tempFieldsWithError).forEach((item) => {
      if (item === true) {
        isValidationFailed = true;
      }
    });
    console.log("isValidationFailed", isValidationFailed);

    return isValidationFailed;
  };

  function handleChange(evt) {
    setLanguagesState({
      ...languagesState,
      [evt.target.name]: evt.target.value,
    });
  }

	const addLanguage = async (params) => {
		if (!doValidation()) {

    const loadingToastId = toast.loading("Loading..!");

    if (languagesState.isAddLanguage) {
      try {
        const result = await languageApis.addLanguage(languagesState);
        console.log(result);
        if (result.error == false) {
          toast.dismiss(loadingToastId);
          toast.success("City created!");
          setLanguagesState({
            ...languagesState,
            isAddLanguage: false,
            isEditLanguage: false,
          });
          getLanguages(1, "", 10);
        }
      } catch (error) {
        console.error(error);
      }
    } else if (languagesState.isEditLanguage) {
      try {
        const result = await languageApis.updateLanguage(languagesState);
        if (result.error === false) {
          toast.success("Language updated!");
          toast.dismiss(loadingToastId);
          setLanguagesState({
            ...languagesState,
            isEditLanguage: false,
          });
          getLanguages(1, "", 10);
        }
      } catch (error) {
        console.error(error);
      }
		}
	} else {
		toast.error("Validation Failed");
	}
  };
  console.log(languagesState);
  return (
    <div className="mb-4">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {languagesState.isAddLanguage
                    ? "Add Language"
                    : "Edit Language"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
									<Form.Control
										className={
                      fieldsWithError.title === true ? "border-danger" : ""
                    }
                    defaultValue={languagesState.name}
                    name="title"
                    type="text"
                    placeholder="Enter Language Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Status</Form.Label>
									<Form.Control
											className={
												fieldsWithError.status === true ? "border-danger" : ""
											}
                    as="select"
                    value={languagesState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option value hidden>-- Select Status --</option>
                    <option value="active">active</option>
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
								</Form.Group>
								

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Description</Form.Label>
									<Form.Control
										className={
                      fieldsWithError.description === true ? "border-danger" : ""
                    }
                    defaultValue={languagesState.description}
                    name="description"
                    type="text"
                    placeholder="description"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Button
                  className="mr-3"
                  variant="secondary"
                  onClick={() =>
                    setLanguagesState({
                      ...languagesState,
                      isAddLanguage: false,
                      isEditLanguage: false,
                    })
                  }
                >
                   Cancel
                </Button>
                <Button
                  onClick={() => {
                    addLanguage();
                  }}
                  // variant=`${languagesState.isAddLanguage?'primary':'warning'}`
                  variant={languagesState.isAddLanguage ? "success" : "warning"}
                >
                  {languagesState.isAddLanguage ? "Create" : "Update"}
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
