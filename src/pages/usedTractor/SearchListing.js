import React from "react";
import {
  Row,
  Col,
  Breadcrumb,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
// import card_thumb_one from '../../assets/img/product/card_thumb_one.jpg'
// import card_thumb_one from '../../assets/img/card-thumb-one.jpg';

export default function SearchListing() {
  return (
    <>
      <Col sm={12} lg={12} xl={12}>
        <div className="topSorting">
          <div class="organize-results">
            <div class="col-md-8" style={{ marginTop: "10px" }}>
              <span class="form-horizontal sort-by">
                <span class="sort-by-text">Sort By: </span>
                <select
                  id="sortby"
                  name="sortby"
                  onchange="callPjax('/used-cars/search/-/?sortby=' + $(this).val())"
                >
                  <option value="bumped_at-desc" selected="selected">
                    Updated Date: Recent First
                  </option>
                  <option value="bumped_at-asc">
                    Updated Date: Oldest First
                  </option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="model_year-desc">
                    Model Year: Latest First
                  </option>
                  <option value="model_year-asc">
                    Model Year: Oldest First
                  </option>
                  <option value="mileage-asc">Mileage: Low to High</option>
                  <option value="mileage-desc">Mileage: High to Low</option>
                </select>
              </span>
            </div>

            <div class="col-md-4 mt5 text-right">
              <div class="btn-group" data-toggle="buttons-radio">
                <button type="button" id="list" class="btn btn-sm active">
                  <span class="generic-dark-grey">
                    <i class="fa fa-th-list"></i> LIST
                  </span>
                </button>
                <button type="button" id="grid" class="btn btn-sm">
                  <span class="generic-dark-grey">
                    <i class="fa fa-th-large"></i> GRID
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sideSearch">
          <>
            {/* <Card className="mb-4 row">
                    <Card.Img className="radius-0" alt="Card Image" />
                  <div> card body</div>
              </Card> */}
						{
							[1, 2, 3, 4].map(() => {
								return (
									<>
										  <div class="listCard mb-3">
              <img
                class="card-img-top"
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/01/full/1590987638-6809.png"
                alt="Card"
                style={{ width: "200px", height: "140px" }}
              />
              <div style={{ width: "100%" }}>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <h5 class="card-title">Toyota Prado TX Limited 2.7 2008</h5>
                  <h5>PKR 123 lacs</h5>
                </div>
                <p class="card-text">Karachi</p>
                <p>
                  2008 | 111,123 km | Petrol | 2700cc | Automatic | 4.5 Grade
                </p>
                <div
                  class="card-text d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <small class="text-muted">Last updated 3 mins ago</small>
                  <div className="d-flex">
                    <button className="btn btn-succcess">asd</button>
                    <button className="btn btn-succcess">
                      show phone number
                    </button>
                  </div>
                </div>
              </div>
            </div>
									</>
								)
							})
							}
          
          </>
        </div>
        <div className="pagination">
          <span>
            1&nbsp;2&nbsp;3&nbsp;4&nbsp;&nbsp;...&nbsp;&nbsp;Next
            &nbsp;&nbsp;Last
          </span>
        </div>
        <div class="sellAdd clearfix text-center p20 mt-70">
          <img
            alt="Post an Ad"
            src="https://wsa4.pakwheels.com/assets/sell-car-bf334aeb9cf3001080a3e887d51a3b32.png"
            title="Post an Ad"
          />

          <h3 class="title">
            Post an ad for <span class="generic-red">FREE</span>
          </h3>
          <p class="mt10 mb5 fs16">Sell it faster to thousands of buyers</p>
          <div>
            <img
              alt="Post an Ad Left"
              src="https://wsa4.pakwheels.com/assets/sell-ad-point-left-fcc7bca4d40628d7945426ecf5a2ef00.png"
            />
            <a
              href="/used-cars/sell"
              class="btn btn-success sign-in-comp"
              onclick="trackEvents('Used Cars', 'Add Car', 'From - Search');"
            >
              Sell Your Car
            </a>
            <img
              alt="Post an Ad Right"
              src="https://wsa4.pakwheels.com/assets/sell-ad-point-right-630620add9bbdd27360acdfcf98d0608.png"
            />
          </div>
        </div>
      </Col>
    </>
  );
}
