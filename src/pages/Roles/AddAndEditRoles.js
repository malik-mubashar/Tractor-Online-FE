import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { roleApis } from "../../API/RolesApis";

export default function AddAndEditRole({
  rolesState,
  setRolesState,
  getRoles,
}) {
  function handleChange(evt) {
    setRolesState({
      ...rolesState,
      [evt.target.name]: evt.target.value,
    });
  }
  const fieldsMap = [
    { name: "name", required: true },
    { name: "status", required: true },
  ];

  const [fieldsWithError, setFieldsWithError] = useState({
    status: false,
    name: false,
  });
  const doValidation = () => {
    var tempFieldsWithError = {};
    fieldsMap.forEach((fieldDetail) => {
    
      if (
        rolesState[fieldDetail.name] == undefined ||
        rolesState[fieldDetail.name] == ""
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
        rolesState[fieldDetail.name] != undefined ||
        rolesState[fieldDetail.name] != ""
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
  const addRole = async (params) => {
    if (!doValidation()) {
      const loadingToastId = toast.loading("Loading..!");

      if (rolesState.isAddRole) {
        try {
          const result = await roleApis.addRole(rolesState);
       
          if (result.error == false) {
            toast.dismiss(loadingToastId);
            toast.success("City created!");
            setRolesState({
              ...rolesState,
              isAddRole: false,
              isEditRole: false,
            });
            getRoles(1, "", 10);
          }
        } catch (error) {
          console.error(error);
        }
      } else if (rolesState.isEditRole) {
        try {
          const result = await roleApis.updateRole(rolesState);
          if (result.error === false) {
            toast.success("Role updated!");
            toast.dismiss(loadingToastId);
            setRolesState({
              ...rolesState,
              isEditRole: false,
            });
            getRoles(1, "", 10);
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
    <div className="mb-4">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {rolesState.isAddRole ? "Add Role" : "Edit Role"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
									<Form.Control
										   className={
												fieldsWithError.title === true ? "border-danger" : ""
											}
                    defaultValue={rolesState.title}
                    name="name"
                    type="text"
                    placeholder="Enter Role Name"
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
                    value={rolesState.status}
                    onChange={(e) => handleChange(e)}
                    name="status"
                  >
                    <option value hidden >-- Select Status --</option>
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
                    defaultValue={rolesState.description}
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
                    setRolesState({
                      ...rolesState,
                      isAddRole: false,
                      isEditRole: false,
                    })
                  }
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    addRole();
                  }}
                  // variant=`${rolesState.isAddRole?'primary':'warning'}`
                  variant={rolesState.isAddRole ? "success" : "warning"}
                >
                  {rolesState.isAddRole ? "Create" : "Update"}
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
