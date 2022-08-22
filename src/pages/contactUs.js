import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

const contactUs = () => {
 
  function onChange(value) {
    console.log('Captcha value:', value);
  }

  
  return (
    
    <div className="container mb-5">
    <h3>Contact Us</h3>
    <div className="row">
      
      <div className="col-md-6 card container p-4">
    <Form>
    <h2>Your Details</h2>
    <Form.Group className="mb-3">
      <Form.Control type="text" placeholder="Full Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    

    <Form.Group className="mb-3">
      <Form.Control type="text" placeholder="03xxxx" />
    </Form.Group>
    <Form.Select className="mb-3">
    <option key="blankChoice" hidden value>Message Subject</option>
      <option value="1">Accounts</option>
      <option value="2">Blogs</option>
      <option value="3">Forums</option>
      <option value="4">Advertising/Partnerships</option>
      <option value="5">Feedbacks</option>
      <option value="6">Other</option>
    </Form.Select>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       
        <Form.Control as="textarea" rows={3}  placeholder="Enter Your Message Here"/>
      </Form.Group>

   
      <ReCAPTCHA className="mb-3"
        sitekey="6LfKHpohAAAAAHIZMgkUJ_oDapKmuv6PhUp7r7du"
        onChange={onChange}
      />


    <Button variant="primary" type="submit">
      Send
    </Button>
    
  </Form>
  
  </div>
  
  <div className="col-md-5 pull-right card ">
  <Form>

    <h2 className=" text-center mt-5">Please Feel Free to call or drop by to say Hello! </h2>
      <p>
        <strong>Address</strong>
        <br />
        253 F1 Wapda Town Lahore,Pakistan.
      </p>
      <p>
        <strong>Contact Information</strong>
        <br />
        Phone: 04233445432
        <br />
        Whatsapp:0312333333
        <br />
        Email: devbox@co 
      </p>
      <p>
        <strong>Office Timings</strong>
        <br />
        Monday-Friday:9:00AM-05:00PM
      </p>
      </Form>
  </div>
  </div>
  </div>
  );
};

export default contactUs;
