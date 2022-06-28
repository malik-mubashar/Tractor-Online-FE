import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { city } from "../../API/City/CityApis";
import toast, { Toaster } from "react-hot-toast";

export default function AddAndEditCity({ cityState, setCityState, getCities }) {

  function handleChange(evt) {
    setCityState({
      ...cityState,
      [evt.target.name]: evt.target.value,
    });
	}
	const handlePictureUpload = (pic) => {		
		setCityState({
      ...cityState,
      image: pic,
    });
	}


  const addCity = async (params) => {
    const loadingToastId = toast.loading("Loading..!");

    if (cityState.isAddCity) {
      try {
        const result = await city.addCity(cityState.title, cityState.comments, cityState.image);
        console.log(result);
        if ((result.error == false)) {
          toast.dismiss(loadingToastId);
          toast.success("City created!");
          setCityState({
            ...cityState,
            isAddCity: false,
            isEditCity: false,
          });
          getCities(1, "", 10);
        }
      } catch (error) {
        console.error(error);
      }
    } else if (cityState.isEditCity) {
      try {
        const result = await city.updateCity(
          cityState.title,
          cityState.comments,
          cityState.cityId
        );
        if (result.error == false) {
					toast.success("City updated!");
					toast.dismiss(loadingToastId);
          setCityState({
            ...cityState,
            isEditCity: false,
          });
          getCities(1, "", 10);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log(cityState);
  return (
    <div className="mb-4">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">
                  {cityState.isAddCity ? "Add City" : "Edit City"}
                </h5>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    defaultValue={cityState.title}
                    name="title"
                    type="text"
                    placeholder="Enter Country Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control
                    defaultValue={cityState.comments}
                    name="comments"
                    type="text"
                    placeholder="Comments"
                    onChange={(e) => handleChange(e)}
                  />
								</Form.Group>
								<Form.Group >
                      <Form.Label>Upload New Picture</Form.Label>
									<Form.Control
									style={{padding:"2px"}}
                        type="file"
                        placeholder=""
                        className="form-control"
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
                    setCityState({
                      ...cityState,
                      isAddCity: false,
                      isEditCity: false,
                    })
                  }
                >
                   Cancel
                </Button>
                <Button
                  onClick={() => {
                    addCity();
                  }}
                  // variant=`${cityState.isAddCity?'primary':'warning'}`
                  variant={cityState.isAddCity ? "success" : "warning"}
                >
                  {cityState.isAddCity ? "Create" : "Update"}
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
