import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';
import { country } from "../../API/Country/CountryApis";


export default function AddAndEditCountry({ countryState, setCountryState ,getCountries}) {


	const notify = () => {
		toast('Here is your toast.');
		toast.success('Successfully created!');
	}

  function handleChange(evt) {
    setCountryState({
      ...countryState,
      [evt.target.name]: evt.target.value,
    });
  }

  const addCountry = async (params) => {
    if (countryState.isAddCountry) {
      try {
        const result = await country.addCountry(countryState.name, countryState.comments);
				console.log(result);
				debugger;
				toast.success('country created!');
				setCountryState({
					...countryState,
					isAddCountry:false
				})
				getCountries(1, "", 10);
      } catch (error) {
        console.error(error);
      }
    } else if(countryState.isEditCountry) {
			try {
				 
        const result = await country.updateCountry(countryState.name, countryState.comments,countryState.countryId);
				console.log(result);
				toast.success('country updated!');
				setCountryState({
					...countryState,
					isEditCountry:false
				})
				getCountries(1, "", 10);
				debugger;
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log(countryState);
  return (
    <div className="mb-4">
      {/* Basic Forms */}
      <Row>
        <Col xl={12}>
          <div className="card mb-4">
            <div className="card-body">
              <div className="card-header">
								<h5 className="card-title">{ countryState.isAddCountry?"Add country":"Edit Country"}</h5>
              </div>
							<button onClick={notify}>Make me a toast</button>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
									<Form.Control
										defaultValue={countryState.name}
                    name="name"
                    type="text"
                    placeholder="Enter Country Name"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicComments">
                  <Form.Label>Comments</Form.Label>
									<Form.Control
										defaultValue={countryState.comments}
                    name="comments"
                    type="text"
                    placeholder="Comments"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
                <Button
                  className="mr-3"
                  variant="secondary"
                  onClick={() =>
                    setCountryState({
                      ...countryState,
                      isAddCountry: false,
                      isEditCountry: false,
                    })
                  }
                >
                  Cancle
                </Button>
                <Button
                  onClick={() => {
                    addCountry();
                  }}
                  // variant=`${countryState.isAddCountry?'primary':'warning'}`
                  variant={countryState.isAddCountry?'success':'warning'}
                >
                   {countryState.isAddCountry?'Create':'Update'}
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
