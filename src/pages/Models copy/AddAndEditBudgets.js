import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { budgetApis } from "../../API/BudgetsApis";
// import { budgetApis } from "../../API/BudgetsApis";

export default function AddAndEditBudgets({
  budgetsState,
  setBudgetsState,
  getBudgets,
}) {
  function handleChange(evt) {
    debugger;
    setBudgetsState({
      ...budgetsState,
      [evt.target.name]: evt.target.value,
    });
	}
	
	const handlePictureUpload = (pic) => {
		setBudgetsState({
      ...budgetsState,
      image: pic,
    });
	}

	const addBudgets = async (params) => {
		debugger;
    const loadingToastId = toast.loading("Loading..!");
		debugger;

    if (budgetsState.isAddBudget) {
			try {
		debugger;
				
        const result = await budgetApis.addBudget(budgetsState);
        console.log(result);
        if (result.error === false) {
          toast.dismiss(loadingToastId);
          toast.success("Budget created!");
          setBudgetsState({
            ...budgetsState,
            isAddBudget: false,
            isEditBudget: false,
          });
          getBudgets(1, "", 10);
        } else if (result.error === true) {
          toast.dismiss(loadingToastId);
          toast.error("failed");
        }
			} catch (error) {
				toast.dismiss(loadingToastId);
				toast.error('error');

        console.error(error);
      }
    } else if (budgetsState.isEditBudget) {
      try {
        const result = await budgetApis.updateBudget(budgetsState);
        if (result.error == false) {
          toast.success("Budget updated!");
          toast.dismiss(loadingToastId);
          setBudgetsState({
            ...budgetsState,
            isEditBudget: false,
          });
          getBudgets(1, "", 10);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log("asdasd", budgetsState);
  return (
    <div className="mb-4 mt-5">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {budgetsState.isAddBudget
                    ? "Add Budget"
                    : "Edit Budget"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    defaultValue={budgetsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Budget Name"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								
							

                <Form.Group controlId="formGridState">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={budgetsState.status}
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
                    defaultValue={budgetsState.link}
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
                    defaultValue={budgetsState.description}
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								<Form.Group controlId="formBasicComments">
                  <Form.Label>Icon</Form.Label>
                  <Form.Control
                    defaultValue={budgetsState.icon}
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
                    setBudgetsState({
                      ...budgetsState,
                      isAddBudget: false,
                      isEditBudget: false,
                    })
                  }
                >
                   Cancel
                </Button>
                <Button
                  onClick={() => {
                    addBudgets();
                  }}
                  variant={
                    budgetsState.isAddBudget
                      ? "success"
                      : "warning"
                  }
                >
                  {budgetsState.isAddBudget ? "Create" : "Update"}
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
