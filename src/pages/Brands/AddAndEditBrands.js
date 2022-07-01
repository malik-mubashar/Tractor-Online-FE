import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { brandApis } from "../../API/BrandsApis";
// import { brandApis } from "../../API/BrandsApis";

export default function AddAndEditBrands({
  brandsState,
  setBrandsState,
  getBrands,
}) {
  function handleChange(evt) {
    debugger;
    setBrandsState({
      ...brandsState,
      [evt.target.name]: evt.target.value,
    });
	}
	
	const handlePictureUpload = (pic) => {
		setBrandsState({
      ...brandsState,
      image: pic,
    });
	}

	const addBrands = async (params) => {
		debugger;
    const loadingToastId = toast.loading("Loading..!");
		debugger;

    if (brandsState.isAddBrand) {
			try {
		debugger;
				
        const result = await brandApis.addBrand(brandsState);
        console.log(result);
        if (result.error === false) {
          toast.dismiss(loadingToastId);
          toast.success("Brand created!");
          setBrandsState({
            ...brandsState,
            isAddBrand: false,
            isEditBrand: false,
          });
          getBrands(1, "", 10);
        } else if (result.error === true) {
          toast.dismiss(loadingToastId);
          toast.error("failed");
        }
			} catch (error) {
				toast.dismiss(loadingToastId);
				toast.error('error');

        console.error(error);
      }
    } else if (brandsState.isEditBrand) {
      try {
        const result = await brandApis.updateBrand(brandsState);
        if (result.error == false) {
          toast.success("Brand updated!");
          toast.dismiss(loadingToastId);
          setBrandsState({
            ...brandsState,
            isEditBrand: false,
          });
          getBrands(1, "", 10);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log("asdasd", brandsState);
  return (
    <div className="mb-4 mt-5">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {brandsState.isAddBrand
                    ? "Add Brand"
                    : "Edit Brand"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    defaultValue={brandsState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Brand Name"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								
							

                <Form.Group controlId="formGridState">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={brandsState.status}
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
                    defaultValue={brandsState.link}
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
                    defaultValue={brandsState.description}
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								<Form.Group controlId="formBasicComments">
                  <Form.Label>Icon</Form.Label>
                  <Form.Control
                    defaultValue={brandsState.icon}
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
                    setBrandsState({
                      ...brandsState,
                      isAddBrand: false,
                      isEditBrand: false,
                    })
                  }
                >
                   Cancel
                </Button>
                <Button
                  onClick={() => {
                    addBrands();
                  }}
                  variant={
                    brandsState.isAddBrand
                      ? "success"
                      : "warning"
                  }
                >
                  {brandsState.isAddBrand ? "Create" : "Update"}
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
