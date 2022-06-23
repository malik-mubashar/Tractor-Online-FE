import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { languageApis } from "../../API/LanguagesApis ";

export default function AddAndEditLanguage({
  languagesState,
  setLanguagesState,
  getLanguages,
}) {
  function handleChange(evt) {
    setLanguagesState({
      ...languagesState,
      [evt.target.name]: evt.target.value,
    });
  }

  const addLanguage = async (params) => {
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
                    defaultValue={languagesState.name}
                    name="name"
                    type="text"
                    placeholder="Enter Language Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    defaultValue={languagesState.description}
                    name="description"
                    type="text"
                    placeholder="description"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={languagesState.status}
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
                    setLanguagesState({
                      ...languagesState,
                      isAddLanguage: false,
                      isEditLanguage: false,
                    })
                  }
                >
                  Cancle
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
