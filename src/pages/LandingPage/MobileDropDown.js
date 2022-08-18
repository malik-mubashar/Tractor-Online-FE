import React, { useEffect, useState, useContext } from "react";
import { Image, Modal } from "react-bootstrap";
import Icofont from "react-icofont";
import { useHistory, Link } from "react-router-dom";
import { prodApi } from "../../API/ProdCategoriesApis";
import { RootContext } from "../../context/RootContext";

const MobileDropDown = ({ show, setShow }) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [productCategories, setProductCategories] = useState();
  const { userProfilePicture, currentUser, setUserProfilePicture, setCurrentUser } = useContext(RootContext)
  let history = useHistory();

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
  }
  useEffect(() => {
    handleGetAllCategories();
  }, []);

  const handleGetAllCategories = async () => {
    const result = await prodApi.getAllProductCategories();
    setProductCategories(result.data && result.data.data);
  };

  function accordionHandle(e){
    var content = e.currentTarget.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="more">
            <div className="nav-container">
              <nav>
                {
                  currentUser === undefined || currentUser === null ?
                    (<div className="profile-header">
                      <p className="my-2">
                        Sign in to start selling or buying Products
                      </p>
                      <Link to="/signup" className="btn mr-2">Sign Up</Link>
                      <Link to="/login" className="btn btn-primary">Sign In</Link>
                    </div>)
                  :
                    (<div className="text-center mb-4">
                      <h2 className="">Profile</h2>
                      <div>
                        <img src={userProfilePicture} alt="profile" style={{borderRadius: '50%'}} height="150px" width="150px" />
                      </div>
                      <h3 className="my-3">{currentUser.name}</h3>
                      <button 
                        className="btn"
                        onClick={() => {
                          localStorage.setItem("currentUser", null);
                          localStorage.setItem("user", null);
                          localStorage.setItem("headers", null);
                          setUserProfilePicture(null);
                          setCurrentUser(null)
                          history.push('/')
                          setShow(false)
                        }}
                      >
                        <Icofont
                          icon="exit"
                          className="icofont mr-1"
                        />
                        Logout
                      </button>
                    </div>)
                }

                <h3>Categories</h3>
                {productCategories &&
                  productCategories.map((item, i) => {
                    return (
                      <div key={i}>
                        <li className="list"
                          onClick={(e) =>
                            {
                              if (item.product_category_heads.length > 0)
                              {
                                accordionHandle(e)
                              }
                              else{
                                history.push(item.link)
                                setShow(false)
                              }
                            }
                          }
                        >
                          <span
                            className="user-pic"
                            onClick={() => history.push(item.link)}
                          >
                            {item.active_image_path !== undefined ? (
                              <Image
                                src={item.active_image_path}
                                alt="icon"
                                roundedCircle
                                width={"24px"}
                              />
                            ) : (
                              null
                            )}
                          </span>

                          <div className="mob-drop">
                            <span className="ml-2">
                              {item.title}
                            </span>
                          </div>
                          {item.product_category_heads.length > 0 ? (
                            <>
                              <Icofont
                                icon="caret-down"
                                height="10px"
                                width="10px"
                                className="icofont ml-1"
                              />
                            </>
                          ) : null}
                        </li>
                        {item.product_category_heads.length > 0 ? (
                            <div className="content">
                              {item.product_category_heads.map((item, i) => (
                                <div className="" key={i}>
                                  <Link
                                    to={item.link}
                                    onClick={()=> setShow(false)}
                                    className="d-flex align-items-center p-2"
                                  >
                                    <Icofont
                                      icon={item.icon}
                                      className="icofont col-2"
                                      style={{fontSize: '1.4rem'}}
                                    />
                                    <div className="col-10 p-0">
                                      <strong>{item.title}</strong>
                                      {item.product_sub_categories !== null &&
                                        item.product_sub_categories !== undefined &&
                                        item.product_sub_categories.map((y, j) => {
                                          return <p key={j} className="mb-0">{y.title}</p>;
                                        })}
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ) : null
                        }
                      </div>
                    );
                  })}
              </nav>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MobileDropDown;
