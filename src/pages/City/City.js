import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import * as Icon from "react-feather";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Dropdown, Table, Badge } from "react-bootstrap";
import ViewCity from "./ViewCity";
import AddAndEditCity from "./AddAndEditCity";

export default function City() {
  const [sideMenu, setSideMenu] = useState(false);
  function onSideMenu(active) {
    setSideMenu(active);
  }
  function addCity() {}
  const [cityState, setCityState] = useState({
    isAddCity: false,
    isViewCity: false,
  });
  const users = [
    {
      id: 1,
      name: "Aaron Rossi",
      email: "aaron@GrammarList.com",
      status: "Pending",
      badge: "info",
      url: "#",
    },
    {
      id: 2,
      name: "Brad Joe",
      email: "brad.joe@gmail.com",
      status: "Active",
      badge: "success",
      url: "#",
    },
    {
      id: 3,
      name: "Mitch Petty",
      email: "mitch.petty@gmail.com",
      status: "Not Active",
      badge: "warning",
      url: "#",
    },
    {
      id: 4,
      name: "Petty Rossi",
      email: "petty.rossi@gmail.com",
      status: "Pending",
      badge: "info",
      url: "#",
    },
    {
      id: 5,
      name: "Philip",
      email: "phili@gmail.com",
      status: "Active",
      badge: "success",
      url: "#",
    },
    {
      id: 6,
      name: "Nelms",
      email: "nelms@gmail.com",
      status: "Active",
      badge: "success",
      url: "#",
    },
  ];
  console.log(cityState);
  return (
    <>
      <>
        <Navigation onClick={() => onSideMenu} />
        <div className="cityPage">
          <div className={`main-content d-flex flex-column`}>
            {cityState.isViewCity ? (
              <ViewCity cityState={cityState} setCityState={setCityState} />
            ) : cityState.isAddCity === true || cityState.isEditCity === true ? (
              <AddAndEditCity cityState={cityState} setCityState={setCityState}/>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary col-sm-2 mb-4"
                  onClick={() => {
                    setCityState({
                      ...cityState,
                      isAddCity: true,
                    });
                  }}
                >
                  Add City
                </button>

                <div className="card mb-4">
                  <div className="card-body">
                    <div className="card-header d-flex">
                      <h5 className="card-title w-50 float-left">{"Cites"}</h5>
                      <Dropdown className="dropdown card-dropdown text-right w-50 float-right">
                        <Dropdown.Toggle id="dropdown-basic">
                          <Icon.MoreHorizontal className="icon mt-minus-3" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Link to="/" className="dropdown-item">
                            Add new user
                          </Link>
                          <Link to="/" className="dropdown-item">
                            View all users
                          </Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                    <div className="height-310">
                      <Table className="m-0" responsive>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Comments</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {users.map((user, idx) => (
                            <tr key={idx}>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td className="text-center">
                                <Link
                                  to={user.url}
                                  className="text-success mr-2"
                                >
                                  <Icon.Edit2 className="icon wh-15 mt-minus-3" />
                                </Link>
                                <Link
                                  to={user.url}
                                  className="text-danger mr-2"
                                >
                                  <Icon.X className="icon wh-15 mt-minus-3" />
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    </>
  );
}
