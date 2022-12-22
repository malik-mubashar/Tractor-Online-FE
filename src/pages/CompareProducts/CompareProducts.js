import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import * as Icon from "react-feather";
import { Link, useLocation } from "react-router-dom";
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
	const search = useLocation().search;
	var category = new URLSearchParams(search).get("category");
	const [optionsOfSelect1, setOptionsOfselect1] = useState([])
	const [optionsOfSelect2, setOptionsOfselect2] = useState([])
	const [optionsOfSelect3, setOptionsOfselect3] = useState([])
	const [selectedProd1, setSelectedProd1] = useState({})
	const [selectedProd2, setSelectedProd2] = useState({})
	const [selectedProd3, setSelectedProd3] = useState({})
	// const [options, setOptions] = useState([])
	const [products, setProducts] = useState([])
	const options = [
		{label: "one", value: 1, isDisabled: true},
		{label: "two", value: 2}
	]
	
	useEffect(() => {
		if (category !== '') {
			handleGetAllProducts()
		}
	}, [])
	
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
      category,
      "active",
      "nil"
    );
    if (result.error === false) {
			setProducts(result.data && result.data.data);
			var temp=result.data.data.map((item) => {
				return{label:item.title,value:item.id}
			})
			setOptionsOfselect1(temp)
			setOptionsOfselect2(temp)
			setOptionsOfselect3(temp)
    }
	}
	const filterOptions = () => {
		
	}

	console.log("products",products)
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
                options={optionsOfSelect1}
                label="Select Tractor"
                placeholder="Select Tractor"
								onChange={(e) => {
									setSelectedProd1(e.value)
									debugger;
									console.log(optionsOfSelect1)
									console.log(optionsOfSelect1)
									filterOptions()
								}}
                clearable={false}
              />
            </div>
            <div className="col-12 col-lg-4 my-2">
              <Select
                className="fieldHeight mainSearch"
                options={optionsOfSelect2}
                label="Select Tractor"
                placeholder="Select Tractor"
                onChange={(e) => setSelectedProd2(e.value)}
                clearable={false}
              />
						</div>
						<div className="col-12 col-lg-4 my-2">
              <Select
                className="fieldHeight mainSearch"
                options={optionsOfSelect3}
                label="Select Tractor"
                placeholder="Select Tractor"
                onChange={(e) => setSelectedProd3(e.value)}
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
