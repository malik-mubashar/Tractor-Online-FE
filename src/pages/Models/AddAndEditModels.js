import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { modelApis } from "../../API/ModelsApis";
// import { modelApis } from "../../API/ModelsApis";

export default function AddAndEditModels({
  modelsState,
  setModelsState,
  getModels,
}) {
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
	}

	const addModels = async (params) => {
		 
    const loadingToastId = toast.loading("Loading..!");
		 

    if (modelsState.isAddModel) {
			try {
		 
				
        const result = await modelApis.addModel(modelsState);
        console.log(result);
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
				toast.error('error');

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
  };
  console.log("asdasd", modelsState);
  return (
    <div className="mb-4 mt-5">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {modelsState.isAddModel
                    ? "Add Model"
                    : "Edit Model"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    defaultValue={modelsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Model Name"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								
							

                <Form.Group controlId="formGridState">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={modelsState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option value="active">active</option>
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    defaultValue={modelsState.link}
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
                    defaultValue={modelsState.description}
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								<Form.Group controlId="formBasicComments">
                  <Form.Label>Icon</Form.Label>
                  <Form.Control
                    defaultValue={modelsState.icon}
                    name="icon"
                    type="text"
                    placeholder="icon"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
								<Form.Group>
                      <Form.Label>Upload New Picture</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder=""
                        className="form-control p-1"
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
                  variant={
                    modelsState.isAddModel
                      ? "success"
                      : "warning"
                  }
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
