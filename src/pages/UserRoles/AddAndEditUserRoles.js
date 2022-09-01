import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { roleApis } from "../../API/RolesApis";
import { userRolesApis } from "../../API/UserRolesApis";
import Select from "react-select";
import { user } from "../../API/User";

// import { userRoleApis } from "../../API/UserRolesApis";

export default function AddAndEditUserRoles({
  userRolesState,
  setUserRolesState,
  getUserRoles,
}) {
  const [roles, setRoles] = useState();
  const [users, setUsers] = useState();
  const [optionsForMultiSelect, setOptionsForMultiSelect] = useState();

  useEffect(() => {
    getRoles();
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await user.getAllUsers();
      if (result.error === false) {
        toast.dismiss(loadingToastId);

        setUsers(result.data);
      } else if (result.error === true) {
        toast.dismiss(loadingToastId);
        toast.error("error getting all users...!");
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error("error...!");
    }
  };

  const getRoles = async () => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await roleApis.getRoles(1, "", 10000000);
      if (result.error === false) {
        debugger;
        toast.dismiss(loadingToastId);

        setRoles(result.data.data);
        var tempArr = [];
        result.data.data.forEach((cate) => {
          tempArr.push({
            value: cate.id,
            label: cate.name,
          });
        });
        setOptionsForMultiSelect(tempArr);
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

        if (result.error == false) {
          toast.dismiss(loadingToastId);
          toast.success("User Role created!");
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
          toast.success("User Role updated!");
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
console.log('all users',users)
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
                <Form.Group>
                  <Form.Label>
                    Select Brands that are associated with current category
                  </Form.Label>
                  <Select
                    defaultValue={
                      userRolesState &&
                      userRolesState.product_categories &&
                      userRolesState.product_categories.map((item) => {
                        return { value: item.id, label: item.title };
                      })
                    }
                    isMulti
                    name="colors"
                    onChange={(selectedOption) => {
                      setUserRolesState({
                        ...userRolesState,
                        role_id: selectedOption.map((item) => item.value),
                      });
                    }}
                    options={optionsForMultiSelect}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
								</Form.Group>
								<Form.Group controlId="formGridState">
                  <Form.Label>Select User</Form.Label>
                  <Form.Control
                    // className={
                    //   fieldsWithError.status === true ? "border-danger" : ""
                    // }
                    as="select"
                    // value={userRolesState.user}
										onChange={(e) => {
											debugger;
											setUserRolesState({
												...userRolesState,
												userId: e.target.value
											});
										}}
                    name="userId"
                  >
                    <option value hidden>
                      -- Select User --
										</option>
										{users && users.map((user) => {
											return 'asd'
										})}
                    <option value="active">active</option>
                    <option value="passive">passive</option>
                    <option value="deleted">deleted</option>
                  </Form.Control>
                </Form.Group>

                <Button
                  className="mr-3 mt-3"
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
                  className="mt-3"
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
