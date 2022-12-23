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
	const [comparisionProducts, setComparisionProducts] = useState([])
	const [options, setOptions] = useState([])
	const [products, setProducts] = useState([])
	const options1 = [
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
			setOptions(temp)
    }
	}

	const handleCompare = () => {
		//checking empty
		var first=Object.keys(selectedProd1).length === 0
		var second=Object.keys(selectedProd2).length === 0
		var third = Object.keys(selectedProd3).length === 0
		// when three products are selected
		if (first === false && second === false && third === false) {
			debugger;
			var p1=(products.find((item)=>item.id===selectedProd1.value))	
			var p2=(products.find((item)=>item.id===selectedProd2.value))	
			var p3=(products.find((item)=>item.id===selectedProd3.value))	
			var temp2 = []
			var filteredKeys = Object.keys(p1).filter((key) =>
			(key !== 'user'
				&& key !== 'brand'
				&& key !== 'product_category'
				&& key !== 'cover_photo_thumbnail'
				&& key !== 'active_images_path'			
				&& key !== 'link'			
				&& key !== 'featured'			
				&& key !== 'active_images_path'			
			))
			debugger;
			filteredKeys.forEach((key) => {
				if (key !== 'extra_fields') {
					temp2.push([key,p1[key],p2[key],p3[key]])
				} else {
					var keysOfextraFieldObject = Object.keys(p1[key])
					keysOfextraFieldObject.forEach((exKey) => {
					temp2.push([exKey,p1[key][exKey],p2[key][exKey],p3[key][exKey]])
					})
				}
			})
			// edr temp2 ma active_image_path end pr arha ha isko top pr ly jao
			setComparisionProducts(temp2)

		} else {
			alert('plz select all three products')
		}
	}
	console.log('comparisionProducts',comparisionProducts)

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
									setSelectedProd1(e)
									var temp = options.filter((ghj) => ghj !== e)
									var temp2=temp.filter((item) =>  item!==selectedProd2)
									var temp3=temp2.filter((item) =>  item!==selectedProd3)
									setOptionsOfselect2(temp3)
									setOptionsOfselect3(temp3)
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
                onChange={(e) => {
									setSelectedProd2(e)
									var temp = options.filter((ghj) => ghj !== e)
									var temp2=temp.filter((item) =>  item!==selectedProd1)
									var temp3=temp2.filter((item) =>  item!==selectedProd3)
									setOptionsOfselect1(temp3)
									setOptionsOfselect3(temp3)
								}}
                clearable={false}
              />
						</div>
						<div className="col-12 col-lg-4 my-2">
              <Select
                className="fieldHeight mainSearch"
                options={optionsOfSelect3}
                label="Select Tractor"
                placeholder="Select Tractor"
                onChange={(e) => {
									setSelectedProd3(e)
									var temp = options.filter((ghj) => ghj !== e)
									var temp2=temp.filter((item) =>  item!==selectedProd1)
									var temp3=temp2.filter((item) =>  item!==selectedProd2)
									setOptionsOfselect2(temp3)
									setOptionsOfselect1(temp3)
								}}
                clearable={false}
              />
            </div>
          </div>
          <div className="d-flex mt-4">
            <button
              className="btn btn-success col-12 col-lg-2 ml-auto mr-2"
              type="submit"
							onClick={handleCompare}
            >
              Compare
							</button>
							
          </div>
			</div>
				<section className="bg-white">
					<table class="table table-bordered noborder nomargin">
							<tbody>
								{
									comparisionProducts && comparisionProducts.length > 0 &&
									comparisionProducts.map((comp,) => {
										return (
											<>
												<tr key={Math.random()}>
													{
														comp.map((tdValue,i) => {
															return (
																<>
																	<td key={Math.random()}>
																		{
																			(i > 0 && tdValue!==null&& (tdValue.toString().includes('http') || tdValue.toString().includes('https'))) ?
																				<>
																					<img src={tdValue } style={{width:"270px"}}></img>
																				</>
																				:
																				tdValue
																		}
																	</td>
																</>
															)
														})
													}
												</tr>
											</>
										)
									})
								}

            </tbody>
          </table>						
				</section>
      </div>
    </>
  );
}
