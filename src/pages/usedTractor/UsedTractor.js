import React from "react";

export default function usedTractor() {
  return (
    <div className="container">
      <h1 className="pageHeading">usedTractor for sale</h1>
      <div className="searchCounterWrapper">
        <ul className="breadcrumb">
          <li>
            <a>
              <span itemprop="name">Home /</span>
            </a>
          </li>
          <li>
            <a>
              <span itemprop="name">Used Tractor /</span>
            </a>
          </li>
          <li>
            <span itemprop="name">Used Tractor For Sale In Pakistan</span>
          </li>
        </ul>
        <div class="search-pagi-info">
          <b>1&nbsp;-&nbsp;25</b> of <b>69412</b> Results
        </div>
      </div>
      <div className="row">
				<div className="col-md-3">
					accordion
          {/* <p>
            <a
              class="btn btn-primary"
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Link with href
            </a>
            <button
              class="btn btn-primary"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Button with data-target
            </button>
          </p> */}
				</div>
				<div className="col-md-9">
					<div>
						sorting
					</div>
					<div>
					cards

					</div>
				</div>
				
      </div>
    </div>
  );
}
