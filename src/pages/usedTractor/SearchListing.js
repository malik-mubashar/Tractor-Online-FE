import React from "react";

export default function SearchListing() {
  return (
    <>
      <div className="topSorting">
        <div class="organize-results">
          <div class="col-md-8" data-pjax-enable="">
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
                <option value="model_year-asc">Model Year: Oldest First</option>
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
				<ul>
					<li>
						card1
					</li>
				</ul>
			</div>
    </>
  );
}
