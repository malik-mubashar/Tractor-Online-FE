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
            <div class="col-md-8" style={{marginTop:"10px"}} >
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
        <div>
          <>
            {/* <Card className="mb-4 row">
                    <Card.Img className="radius-0" alt="Card Image" />
                  <div> card body</div>
              </Card> */}

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
        </div>
      </Col>
    </>
  );
}
