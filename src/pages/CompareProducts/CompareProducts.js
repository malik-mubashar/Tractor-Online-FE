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
} from "react-bootstrap";
import toast from "react-hot-toast";
import { userRolesApis } from "../../API/UserRolesApis";
import AddAndEditUserRoles from "./AddAndEditUserRoles";
import Icofont from "react-icofont";
import '../../assets/css/compareProducts.scss'
import Select from "react-select";
import { productApis } from "../../API/ProductApis";

export default function CompareProducts() {
	const [products,setProducts]=useState([])
	const handleGetAllProducts = async () => {
    const result = await productApis.getAllProducts(
      "1",
      "1000000000",
      "nil",
      "nil",
      "nil",
      'nil',
      "nil",
      "nil",
      "nil",
      "active",
      "nil"
    );
    if (result.error === false) {
			setProducts(result.data && result.data.data);
    }
	}


  return (
		<>
			<div className="compare-new-tractor-heading">
				<div className="container">
							{/* <div>
								<ul class="breadcrumb" >
									<li itemprop="itemListElement" >
										<a href="/" itemprop="url"><span itemprop="name">Home</span></a> /
									</li>
									<li itemprop="itemListElement" >
										<a href="/new-cars/" itemprop="url"><span itemprop="name">New Cars</span></a> /
									</li>
									<li itemprop="itemListElement" >
										<a href="/new-cars/compare/" itemprop="url"><span itemprop="name">Compare</span></a> /
									</li>
									<li class="active" >
										<span itemprop="name">Suzuki Wagon R VS United Alpha</span>
									</li>
								</ul>
							</div> */}
					<h1>
						New Tractors Comparison
					</h1>
					<p>Confused? Compare your choice of Tractors</p>
				</div>
			</div>
			<div className="container compare-products-main">
		
			<div className="searchCard card">
          <div className="row mt-3">
					<div className="col-12 col-lg-4 my-2">
              <Select
                className="fieldHeight mainSearch"
                // options={cities}
                label="Select City"
                placeholder="Select City"
                // onChange={(e) => setCitySelected(e.label)}
                clearable={false}
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <Select
                className="fieldHeight mainSearch"
                // options={cities}
                label="Select City"
                placeholder="Select City"
                // onChange={(e) => setCitySelected(e.label)}
                clearable={false}
              />
						</div>
						<div className="col-12 col-lg-4 my-2">
              <Select
                className="fieldHeight mainSearch"
                // options={cities}
                label="Select City"
                placeholder="Select City"
                // onChange={(e) => setCitySelected(e.label)}
                clearable={false}
              />
            </div>
          </div>
          <div className="d-flex mt-4">
            <button
              className="btn btn-success col-12 col-lg-2 ml-auto mr-2"
              type="submit"
    
            >
              Compare
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
