import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/img/tractoronline.png";
import { Form, FormControl, Button, Image } from "react-bootstrap";
import * as Icon from "react-feather";

const MobileTopbar = () => {
  const history = useHistory();

  return (
    <>
      <div className={`dashboard-carousel p-3 `}>
        <Image
          src={Logo}
          height="20px"
          width="100px"
          alt="Profile Image"
          className="d-flex justify-content-center m-auto"
        />
        <div className="d-flex mt-2 mb-2 justify-content-between text-align-center align-content-center p-2">
          <div className="col-4 p-0 mobile-tabs">
            <span
              onClick={() => history.push("/usedtractor")}
              className="btn btn-info rounded p-2 w-100 "
            >
              Used Tractor
            </span>
          </div>
          <div className="col-4 p-0 mobile-tabs">
            <span
              onClick={() => history.push("/new/tractor")}
              className="btn btn-info rounded p-2 w-100"
            >
              New Tractor
            </span>
          </div>
          <div className="col-4 p-0 mobile-tabs">
            <span
              onClick={() => history.push("/autoparts/")}
              className="btn btn-info rounded p-2 w-100"
            >
              Auto Parts
            </span>
          </div>
        </div>

        <Form className="nav-search-form d-sm-block relative" action= "/dashboard/search">
          <FormControl
            type="text"
            placeholder="Search..."
            className="rounded"
          />

          <Button className="search-success" type="submit">
            <Icon.Search className="icon" />
          </Button>
        </Form>
      </div>
    </>
  );
};

export default MobileTopbar;
