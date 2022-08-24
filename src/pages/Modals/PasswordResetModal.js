import React from "react";
import {
    Col,
    Button,
    Form,
    Modal
  } from "react-bootstrap";

const PasswordResetModal = ({modalClose,modalShow,updatePassword,handleUpdatePassword,handleSave})=>{
    return(<>
        <Modal
        show={modalShow}
        onHide={modalClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Change Password
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                disabled={updatePassword.email}
                value={updatePassword.email}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicC_Password">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
                onChange={(e) =>
                  handleUpdatePassword(e.target.value, "current_password")
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicN_Password">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a new password"
                onChange={(e) =>
                  handleUpdatePassword(e.target.value, "new_password")
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicCN_Password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter your password."
                onChange={(e) =>
                  handleUpdatePassword(e.target.value, "confirm_password")
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="border-0 d-flex justify-content-between">
          <Button variant="danger" onClick={modalClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}

export default PasswordResetModal;