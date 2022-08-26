import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/img/tractoronline.png";
import { Form, Button, Image } from "react-bootstrap";
import * as Icon from "react-feather";
import { RootContext } from "../../context/RootContext";

const MobileTopbar = () => {
  const history = useHistory();
  const [tractorModel, setTractorModel] = useState("");
  const { setLandingPageSearchOptions } = useContext(RootContext);

  return (
    <>
      <div className={`dashboard-carousel p-3 `}>
        <Image
          onClick={() => history.push("/")}
          src={Logo}
          height="20px"
          width="100px"
          alt="Profile Image"
          className="d-flex justify-content-center m-auto"
        />
        <div className="d-flex mt-2 mb-2 justify-content-between text-align-center align-content-center p-2">
          <div className="col-4 p-0 mobile-tabs">
            <span
              onClick={() => history.push("/products/search?category=22")}
              className="btn btn-info rounded p-2 w-100 "
            >
              Used Tractor
            </span>
          </div>
          <div className="col-4 p-0 mobile-tabs">
            <span
              onClick={() => history.push("/products/search?category=23")}
              className="btn btn-info rounded p-2 w-100"
            >
              New Tractor
            </span>
          </div>
          <div className="col-4 p-0 mobile-tabs">
            <span
              onClick={() => history.push("/products?category=26")}
              className="btn btn-info rounded p-2 w-100"
            >
              Auto Parts
            </span>
          </div>
        </div>

        <div
          className="nav-search-form d-sm-block relative"
        >
          <Form.Control
            type="text"
            placeholder="Search..."
            className="rounded"
            onChange={(event) => setTractorModel(event.target.value)}
          />

          <Button
            className="search-success"
            onClick={() => {
              setLandingPageSearchOptions({
                title: tractorModel || "nil",
              });
              // history.push(`/products/search?category=${category}`);
              history.push(
                `/products/search?title=${tractorModel || "nil"}`
              );
            }}
          >
            <Icon.Search className="icon" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileTopbar;
