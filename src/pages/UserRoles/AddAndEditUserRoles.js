import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { roleApis } from "../../API/RolesApis";
import { userRolesApis } from "../../API/UserRolesApis";
// import { userRoleApis } from "../../API/UserRolesApis";

export default function AddAndEditUserRoles({
  userRolesState,
  setUserRolesState,
  getUserRoles,
}) {
  const [roles, setRoles] = useState();

  useEffect(() => {
    getRoles();
  }, []);

  const getRoles = async () => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await roleApis.getRoles(1, "", 10000000);
      if (result.error === false) {
        debugger;
        toast.dismiss(loadingToastId);

        setRoles(result.data.data);
        if (userRolesState.isAddUserRole) {
          setUserRolesState({
            ...userRolesState,
            role_id: result.data.data[0].id,
          });
        }
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };
  function handleChange(evt) {
    setUserRolesState({
      ...userRolesState,
      [evt.target.name]: evt.target.value,
    });
  }

  const addUserRole = async (params) => {
    const loadingToastId = toast.loading("Loading..!");

    if (userRolesState.isAddUserRole) {
      try {
        const result = await userRolesApis.addUserRole(userRolesState);
        console.log(result);
        if (result.error == false) {
          toast.dismiss(loadingToastId);
          toast.success("City created!");
          setUserRolesState({
            ...userRolesState,
            isAddUserRole: false,
            isEditUserRole: false,
          });
          getUserRoles(1, "", 10);
        }
      } catch (error) {
        console.error(error);
      }
    } else if (userRolesState.isEditUserRole) {
      try {
        const result = await userRolesApis.updateUserRole(userRolesState);
        if (result.error === false) {
          toast.success("UserRole updated!");
          toast.dismiss(loadingToastId);
          setUserRolesState({
            ...userRolesState,
            isEditUserRole: false,
          });
          getUserRoles(1, "", 10);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log(userRolesState);
  return (
    <div className="mb-4">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {userRolesState.isAddUserRole
                    ? "Add User Role"
                    : "Edit User Role"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formGridState">
                  <Form.Label>Select Role</Form.Label>
                  <Form.Control
                    as="select"
                    value={userRolesState.status}
                    onChange={(e) => handleChange(e)}
                    name="role_id"
                  >
                    {roles &&
                      roles.map((item) => {
                        return (
                          <>
                            <option
                              selected={userRolesState.role_id == item.id}
                              value={item.id}
                            >
                              {item.title}
                            </option>
                          </>
                        );
                      })}
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
                </Form.Group>

                <Button
                  className="mr-3"
                  variant="secondary"
                  onClick={() =>
                    setUserRolesState({
                      ...userRolesState,
                      isAddUserRole: false,
                      isEditUserRole: false,
                    })
                  }
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    addUserRole();
                  }}
                  // variant=`${userRolesState.isAddUserRole?'primary':'warning'}`
                  variant={userRolesState.isAddUserRole ? "success" : "warning"}
                >
                  {userRolesState.isAddUserRole ? "Create" : "Update"}
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
