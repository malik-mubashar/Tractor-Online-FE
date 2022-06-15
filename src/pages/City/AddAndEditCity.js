import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { city } from "../../API/City/CityApis";

export default function AddAndEditCity({ cityState, setCityState }) {
	function handleChange(evt) {
		 
		setCityState({
			...cityState,
			[evt.target.name]: evt.target.value,
		})
	}
	const addCity=async(params)=> {
		try {
			 
			const result = await city.addCity(cityState.name, cityState.comments);
			console.log(result);
			 
		}
		catch (error) {
			console.error(error)
			 
		}
	}
	console.log(cityState);
	  return (
    <div className="mb-4">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title">Basic Forms</h5>
              </div>

              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
										<Form.Control name='name' type="text" placeholder="Enter Country Name" onChange={ (e)=>handleChange(e)}/>
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control name ='comments' type="text" placeholder="Comments" onChange={ (e)=>handleChange(e)}/>
                </Form.Group>
                <Button
                  className="mr-3"
                  variant="secondary"
                  onClick={() =>
                    setCityState({
                      ...cityState,
                      isAddCity: false,
                    })
                  }
                >
                  Cancle
                </Button>
                <Button onClick={()=>{addCity()}} variant="primary">Create</Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      {/* End Basic Forms */}
    </div>
  );
}
