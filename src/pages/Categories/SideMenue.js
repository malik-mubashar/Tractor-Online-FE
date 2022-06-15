import React from "react";
import { Nav, Image } from "react-bootstrap";
import * as Icon from "react-feather";
import DropDown from "../LandingPage/DropDown";
import { useHistory } from "react-router-dom";
import user1 from "../../assets/img/user/user1.jpg";

const SideMenue = () => {
  const history = useHistory();
  return (
    <Nav defaultActiveKey="/" className="flex-column categoryNavbar">
      <Nav.Link href="/" className="d-flex w-100 dropdown-button-category ">
        <span className="user-pic">
          <Image src={user1} alt="User Image" roundedCircle width={"24px"} />
        </span>
        <DropDown title="Tractors" usedCars={true} dropDownIcon={true} />
      </Nav.Link>
      <Nav.Link eventKey="link-1" className="d-flex w-100 mt-1 dropdown-button-category ">
        <span className="user-pic">
          <Image src={user1} alt="User Image" roundedCircle width={"24px"} />
        </span>
        <DropDown title="Farming Equipment"  newCars={true} dropDownIcon={true} />
      </Nav.Link>
      <Nav.Link eventKey="link-2" className="d-flex w-100 mt-1 dropdown-button-category ">
        <span className="user-pic">
          <Image src={user1} alt="User Image" roundedCircle width={"24px"} />
        </span>
        <DropDown title="Accessories and Parts" autoStore={true} dropDownIcon={true} />
      </Nav.Link>
      <Nav.Link eventKey="link-1" className="d-flex w-100 mt-1 dropdown-button-category ">
        <span className="user-pic">
          <Image src={user1} alt="User Image" roundedCircle width={"24px"} />
        </span>
        <DropDown  title="Fertilizers and Seeds"  newCars={true} dropDownIcon={true} />
      </Nav.Link>
      <Nav.Link eventKey="link-2" className="d-flex w-100 mt-1 dropdown-button-category ">
        <span className="user-pic">
          <Image src={user1} alt="User Image" roundedCircle width={"24px"} />
        </span>
        <DropDown title="Plants and Horticulture" autoStore={true} dropDownIcon={true} />
      </Nav.Link>
    </Nav>
  );
};

export default SideMenue;
