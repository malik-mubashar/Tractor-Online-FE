import React from 'react';
import {Row, Col, Breadcrumb, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/Footer';
import ValidationForm from '../UI-Components/ValidationForm';

class Forms extends React.Component {
    state = {
        sideMenu: true
    };

    _onSideMenu = (active) => {
        this.setState({sideMenu: active});
    }

    render() {
        return (
            <div className="page-wrapper">
                {/* Navigation */}
                <Navigation onClick={this._onSideMenu} />
                {/* End Navigation */}

                <div className={`main-content d-flex flex-column ${this.state.sideMenu ? 'hide-sidemenu' : ''}`}>
                    {/* Breadcrumb */}
                    <div className="main-content-header">
                        <Breadcrumb>
                            <h1>Forms</h1>
                            <Link to="/dashboard" className="breadcrumb-item">
                                Dashboard
                            </Link>
                            <Breadcrumb.Item active>Forms</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Basic Forms */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Basic Forms</h5>
                                    </div>

                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicChecbox">
                                            <Form.Check type="checkbox" label="Check Me Out!" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Basic Forms */}

                    {/* Horizontal forms */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Horizontal Forms</h5>
                                    </div>

                                    <Form>
                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                            <Form.Label column sm={2}>
                                                Email
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="email" placeholder="Email" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formHorizontalPassword">
                                            <Form.Label column sm={2}>
                                                Password
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Col>
                                        </Form.Group>

                                        <fieldset>
                                            <Form.Group as={Row}>
                                                <Form.Label as="legend" column sm={2}>
                                                    Radios
                                                </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Check
                                                        type="radio"
                                                        label="First Radio"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios1" 
                                                        
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="Second Radio"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios2" 
                                                        className="mt-1"
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="Third Radio"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios3" 
                                                        className="mt-1"
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </fieldset>

                                        <Form.Group as={Row} controlId="formHorizontalCheck">
                                            <Col sm={{ span: 10, offset: 2 }}>
                                                <Form.Check label="Remember Me!" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-0">
                                            <Col sm={{ span: 10, offset: 2 }}>
                                                <Button type="submit">Sign in</Button>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Horizontal forms */}
 
                    {/* Form controls */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Form Controls</h5>
                                    </div>

                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Example select</Form.Label>
                                            <Form.Control as="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlSelect2">
                                            <Form.Label>Example multiple select</Form.Label>
                                            <Form.Control as="select" multiple>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Example textarea</Form.Label>
                                            <Form.Control as="textarea" rows="5" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Form controls */}

                    {/* Form Elements */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Form Elements</h5>
                                    </div>

                                    {/* Sizing */}
                                    <h6 className="mb-3 fs-14">Input Sizing</h6>
                                    <Form.Control size="lg" type="text" placeholder="Large text" />
                                    <br />
                                    <Form.Control type="text" placeholder="Normal text" />
                                    <br />
                                    <Form.Control size="sm" type="text" placeholder="Small text" />
                                    {/* End Sizing */}


                                    {/* Plaintext */}
                                    <h6 className="mt-5 mb-3 fs-14">Plaintext</h6>
                                    <Form>
                                        <Form.Group as={Row} controlId="formPlaintextEmail">
                                            <Form.Label column sm="2">
                                                Email
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                                Password
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="password" placeholder="Password" />
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                    {/* End Plaintext */}


                                    {/* Checkboxes and Radios */}
                                    <h6 className="mt-5 mb-3 fs-14">Checkboxes and Radios</h6>
                                    <Form>
                                        {['checkbox', 'radio'].map(type => (
                                            <div key={`custom-${type}`} className="mb-3">
                                            <Form.Check 
                                                custom
                                                type={type}
                                                id={`custom-${type}`}
                                                label={`Check this custom ${type}`}
                                            />

                                            <Form.Check
                                                custom
                                                disabled
                                                type={type}
                                                label={`disabled ${type}`}
                                                id={`disabled-custom-${type}`}
                                            />
                                            </div>
                                        ))}
                                    </Form>
                                    {/* End Checkboxes and Radios */}


                                    {/* Form Layout */}
                                    <h6 className="mt-5 mb-3 fs-14">Form Layout</h6>
                                    <Form>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group controlId="formGroupPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Form>
                                    {/* End Form Layout */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Form Elements */}

                    {/* Form grid */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Form grid</h5>
                                    </div>

                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Group controlId="formGridAddress1">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" />
                                            </Form.Group>

                                            <Form.Group controlId="formGridAddress2">
                                                <Form.Label>Address 2</Form.Label>
                                                <Form.Control placeholder="Apartment, studio, or floor" />
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridZip">
                                                <Form.Label>Zip</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Form grid */}
                
                    {/* Form Validation */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Form Validation</h5>
                                    </div>
                                    
                                    {/* src/pages/UI-Components/ValidationForm.js */}
                                    <ValidationForm />     
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Form Validation */}

                    {/* InputGroup */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Input Group</h5>
                                    </div>
                                    
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>

                                    <label htmlFor="basic-url">Your vanity URL</label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon3">
                                                https://example.com/users/
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                        </InputGroup.Prepend>

                                        <FormControl aria-label="Amount (to the nearest dollar)" />

                                        <InputGroup.Append>
                                            <InputGroup.Text>.00</InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>

                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>With textarea</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl as="textarea" aria-label="With textarea" />
                                    </InputGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End InputGroup */}
 
                    {/* InputGroup Sizing */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Input Group Sizing</h5>
                                    </div>
                                    
                                    <InputGroup size="sm" className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm" className="radius-0">Small</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>

                                    <br />

                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                        />
                                    </InputGroup>

                                    <br />

                                    <InputGroup size="lg">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-lg" className="radius-0">Large</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End Sizing */}

                    {/* InputGroup Checkboxes and radios */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Input Group Checkboxes and radios</h5>
                                    </div>
                                    
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl aria-label="Text input with checkbox" />
                                    </InputGroup>

                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Radio aria-label="Radio button for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl aria-label="Text input with radio button" />
                                    </InputGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End InputGroup Checkboxes and radios */}
                    
                    {/* InputGroup Multiple inputs */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Input Group Multiple inputs</h5>
                                    </div>
                                    
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>First and last name</InputGroup.Text>
                                        </InputGroup.Prepend>

                                        <FormControl />
                                        <FormControl />
                                    </InputGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End InputGroup Multiple inputs */}

                    {/* InputGroup Multiple addons */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Input Group Multiple addons</h5>
                                    </div>
                                 
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>$</InputGroup.Text>
                                            <InputGroup.Text>0.00</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Recipient's username"
                                            aria-label="Amount (to the nearest dollar)"
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Recipient's username"
                                            aria-label="Amount (to the nearest dollar)"
                                        />
                                        <InputGroup.Append>
                                            <InputGroup.Text>$</InputGroup.Text>
                                            <InputGroup.Text>0.00</InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End InputGroup Multiple addons */}

                    {/* InputGroup Button addons */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Input Group Button addons</h5>
                                    </div>
                                    
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <Button variant="outline-primary">Button</Button>
                                        </InputGroup.Prepend>
                                        <FormControl aria-describedby="basic-addon1" />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-primary">Button</Button>
                                        </InputGroup.Append>
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <Button variant="outline-primary">Button</Button>
                                            <Button variant="outline-primary">Button</Button>
                                        </InputGroup.Prepend>
                                        <FormControl aria-describedby="basic-addon1" />
                                    </InputGroup>

                                    <InputGroup>
                                        <FormControl
                                            placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-primary">Button</Button>
                                            <Button variant="outline-primary">Button</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End InputGroup Button addons */}

                    {/* InputGroup Buttons with Dropdowns */}
                    <Row>
                        <Col xl={12}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="card-header">
                                        <h5 className="card-title">Input Group Buttons with Dropdowns</h5>
                                    </div>
                                 
                                    <InputGroup className="mb-3">
                                        <DropdownButton
                                            as={InputGroup.Prepend}
                                            variant="outline-primary"
                                            title="Dropdown"
                                            id="input-group-dropdown-1"
                                        >
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </DropdownButton>
                                        <FormControl aria-describedby="basic-addon1" />
                                    </InputGroup>

                                    <InputGroup>
                                        <FormControl
                                            placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />

                                        <DropdownButton
                                            as={InputGroup.Append}
                                                variant="outline-primary"
                                                title="Dropdown"
                                                id="input-group-dropdown-2"
                                            >
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </DropdownButton>
                                    </InputGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* End InputGroup Buttons with Dropdowns */}

                    {/* Footer  */}    
                    <div className="flex-grow-1"></div>
                    <Footer />
                    {/* End Footer  */}   
                </div>
            </div>
        );
    }
}

export default Forms;