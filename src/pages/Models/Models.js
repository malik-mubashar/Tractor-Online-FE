import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import {
  Dropdown,
  Table,
  Badge,
  Button,
  FormControl,
  Form,
  Pagination,
  Image,
} from "react-bootstrap";
import AddAndEditModels from "./AddAndEditModels";
// import { modelApis } from "../../API/ModelsApis";
import toast from "react-hot-toast";
import csvSvg from "../../assets/svg/csv2.svg";
import pdfSvg from "../../assets/svg/pdf.svg";
import { modelApis } from "../../API/ModelsApis";
import Icofont from "react-icofont";
// import { modelApis } from "../../API/ModelsApis";

export default function Models() {
  const [noOfRec, setNoOfRec] = useState(10);
  const [mainSearchString, setMainSearchString] = useState("");
  useEffect(() => {
    getModels(1, "", 10);
  }, []);

  const getModels = async (page, mainSearch, noOfRec) => {
    const loadingToastId = toast.loading("Loading..!");

    try {
      const result = await modelApis.getModels(page, mainSearch, noOfRec);
      if (result.error == false && result.data.status == "success") {
        toast.dismiss(loadingToastId);

        setModelsState({
          ...modelsState,
          models: result.data.data,
          pagination: result.data.pagination,
          originalModels: result.data.data,
          isAddModel: false,
          isEditModel: false,
        });
      } else {
        toast.dismiss(loadingToastId);
        console.error(result.data);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error(error);
    }
  };

  const deleteModel = async (id) => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await modelApis.deleteModel(id);
       
      if (
        result.error === false
      ) {
        toast.dismiss(loadingToastId);
        toast.success("Successfully deleted!");
        getModels(1, "", 10);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [modelsState, setModelsState] = useState({
    isEditModel: false,
    isAddModel: false,
    isViewModel: false,
    models: null,
    originalModels: null,
    status: null,
  });

  const handleSearch = (searchString) => {
    if (searchString) {
      const filteredCities = modelsState.models.filter(
        (item) => {
					return (
						item.title.toLowerCase().includes(searchString.toLowerCase()) ||
						(item.description &&
							item.description
								.toLowerCase()
								.includes(searchString.toLowerCase())) ||
						(item.status &&
							item.status.toLowerCase().includes(searchString.toLowerCase())) ||
						(item.link &&
							item.link.toLowerCase().includes(searchString.toLowerCase())) ||
						(item.icon &&
							item.icon.toLowerCase().includes(searchString.toLowerCase()))
					);
        }
      );
      setModelsState({
        ...modelsState,
        models: filteredCities,
      });
    } else {
      setModelsState({
        ...modelsState,
        models: modelsState.originalModels,
      });
    }
  };

  const handleMainSearch = (event) => {
    setMainSearchString(event.target.value);
    if (event.keyCode == 13) {
      getModels(1, event.target.value, noOfRec);
    }
    if (event.target.value == "") {
      getModels(1, event.target.value, noOfRec);
    }
  };
  const handleGetPdf = async () => {
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await modelApis.getModelsPdf(mainSearchString);
       
      if (result.error === false) {
        toast.dismiss(loadingToastId);
         
        window.open(`${result.data.file_path}`, "_blank");
      } else {
        toast.dismiss(loadingToastId);
        toast.error("error");
      }
    } catch (e) {
      toast.dismiss(loadingToastId);
      console.error(e);
      toast.error("error", e);
    }
  };

  const handleGetCsv = async () => {
     
    const loadingToastId = toast.loading("Loading..!");
    try {
      const result = await modelApis.getModelsCsv(mainSearchString);
       
      if (result.error === false) {
        toast.dismiss(loadingToastId);
         
        window.open(`${result.data.file_path}`, "_blank");
      } else {
        toast.dismiss(loadingToastId);
      }
    } catch (e) {
      toast.dismiss(loadingToastId);
      console.error(e);
    }
  };

  return (
    <>
      <>
        <div className="modelPage">
            {modelsState.isViewModel ? (
              <></>
            ) : modelsState.isAddModel === true ||
              modelsState.isEditModel === true ? (
              <AddAndEditModels
                modelsState={modelsState}
                setModelsState={setModelsState}
                getModels={getModels}
              />
            ) : (
              <>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-outline-primary col-sm-2 mb-4"
                    onClick={() => {
                      setModelsState({
                        ...modelsState,
                        isAddModel: true,
                      });
                    }}
                  >
                    Add  Model
                  </button>

                  <div className="d-flex ml-auto">
                    <Image
                      onClick={() => {
                        handleGetCsv();
                      }}
                      className="clickableSvg"
                      src={csvSvg}
                      height="40px"
                      width="60px"
                      alt="Profile Image"
                    />
                    <Image
                      onClick={() => {
                        handleGetPdf();
                      }}
                      className="clickableSvg"
                      src={pdfSvg}
                      height="40px"
                      width="60px"
                      alt="Profile Image"
                    />
                  </div>
                </div>
                <div className={`${isMobile ? "" : "d-flex"}`}>
                  <FormControl
                    type="text"
                    onKeyUp={(event) => handleMainSearch(event)}
                    placeholder="Main Search..."
                    style={{ marginTop: "-10px" }}
                  />
                  <select
                    onChange={(e) => {
                      setNoOfRec(e.target.value);
                      getModels(1, mainSearchString, e.target.value);
                    }}
                    className={`${
                      isMobile ? "mt-3" : "adjustNoOfRecSelect"
                    } form-control col-4 mb-2`}
                    id="sortby"
                    name="no of rec per page"
                  >
                    <option value="" disabled selected={true}>
                      No of Records per page
                    </option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                    <option value="70">70</option>
                    <option value="80">80</option>
                  </select>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <div className="card-header d-flex">
                      <h5 className="card-title w-50 float-left">
                        Models
                      </h5>
                      <Form className="nav-search-form d-none d-sm-block float-right">
                        <FormControl
                          type="text"
                          onChange={(event) => handleSearch(event.target.value)}
                          placeholder="Search in Table"
                          style={{ marginTop: "-10px" }}
                        />
                      </Form>
                    </div>

                    <div className="">
                      <Table className="m-0" responsive>
                        <thead>
                          <tr>
                            <th>Picture</th>
                            <th>Title</th>
                            <th>Link</th>
                            <th>icon</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {modelsState.models &&
                            modelsState.models.map(
                              (model, idx) => (
                                <tr key={idx}>
																	<td>
                                    <Image
                                      onClick={() => {
                                        handleGetCsv();
                                      }}
                                      className="clickableSvg"
                                      src={`${model.active_image_path}`}
                                      height="40px"
                                      width="60px"
                                      alt="Profile Image"
																		/>
                                  </td>
                                  <td>{model.title && model.title}</td>
                                  <td>{model.link && model.link}</td>
                                  <td>{model.icon && model.icon}</td>
                                  <td>{model.status && model.status}</td>
                                  <td>
                                    {model.description && model.description}
                                  </td>
                                  <td className="text-center">
                                    <Icon.Edit2
                                      style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        setModelsState({
                                          ...modelsState,
                                          isEditModel: true,
                                          title: model.title,
                                          link: model.link,
                                          status: model.status,
                                          description: model.description,
																					modelId: model.id,
																					product_id: model.product_id,
																					product:model.product
                                        });
                                      }}
                                      className="text-success mr-2 icon wh-15 mt-minus-3"
                                    />
                                    <Link className="text-danger mr-2">
                                      <Icofont icon="ui-delete"
                                    
                                        onClick={() =>
                                          { if (window.confirm('Are you sure you wish to delete this item?'))
                                          deleteModel(model.id)
                                        }}
                                        className="icon wh-15 mt-minus-3 cursor-pointer"
                                      />
                                    </Link>
                                  </td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </Table>
                    </div>
                    {modelsState && modelsState.pagination && (
                      <div>
                        <span>Rows per page</span>
                        <span className="mx-4">
                          {modelsState.pagination.from}-
                          {modelsState.pagination.to} of{" "}
                          {modelsState.pagination.count}
                        </span>

                        <button
                          className={`pagination-button ${
                            modelsState.pagination.page == 1
                              ? "disabled"
                              : ""
                          }`}
                          onClick={() => {
                            getModels(1, mainSearchString, noOfRec);
                          }}
                          type="button"
                        >
                          <span class="MuiIconButton-label">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
                            </svg>
                          </span>
                        </button>
                        <button
                          className={`pagination-button ${
                            modelsState.pagination.page == 1
                              ? "disabled"
                              : ""
                          }`}
                          onClick={() => {
                            getModels(
                              modelsState.pagination.prev,
                              mainSearchString,
                              noOfRec
                            );
                          }}
                          type="button"
                        >
                          <span class="MuiIconButton-label">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                            </svg>
                          </span>
                        </button>
                        <button
                          className={`pagination-button ${
                            modelsState.pagination.page ==
                            modelsState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getModels(
                              modelsState.pagination.next,
                              mainSearchString,
                              noOfRec
                            );
                          }}
                        >
                          <span class="MuiIconButton-label">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                            </svg>
                          </span>
                          <span class="MuiTouchRipple-root"></span>
                        </button>

                        <button
                          className={`pagination-button ${
                            modelsState.pagination.page ==
                            modelsState.pagination.last
                              ? "disabled"
                              : ""
                          }`}
                          tabindex="0"
                          type="button"
                          onClick={() => {
                            getModels(
                              modelsState.pagination.last,
                              mainSearchString,
                              noOfRec
                            );
                          }}
                        >
                          <span class="MuiIconButton-label">
                            <svg
                              class="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
        </div>
      </>
    </>
  );
}
