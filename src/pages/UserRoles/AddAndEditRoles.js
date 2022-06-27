import React, { useEffect } from "react";
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

  const addRole = async (params) => {
    const loadingToastId = toast.loading("Loading..!");

    if (rolesState.isAddRole) {
      try {
        const result = await roleApis.addRole(rolesState);
        console.log(result);
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
  };
  console.log(rolesState);
  return (
    <div className="mb-4">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {rolesState.isAddRole
                    ? "Add Role"
                    : "Edit Role"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    defaultValue={rolesState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Role Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    defaultValue={rolesState.description}
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
                    value={rolesState.status}
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
                    setRolesState({
                      ...rolesState,
                      isAddRole: false,
                      isEditRole: false,
                    })
                  }
                >
                  Cancle
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
