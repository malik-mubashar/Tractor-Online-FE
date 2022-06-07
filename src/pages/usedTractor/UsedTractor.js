import React from "react";
import Footer from "../LandingPage/Footer";
import SearchListing from "./SearchListing";
import SideSearch from "./SideSearch";

export default function usedTractor() {
  return (
    <>
			<div
				className="container">
				<img style={{width:"100%"}} alt='add' src={'https://tpc.googlesyndication.com/simgad/5923361064753698031'}/>
        <h1 className="pageHeading">Used Tractor for sale</h1>
        <div className="searchCounterWrapper">
          <ul className="breadcrumb bread">
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
            <SideSearch />
          </div>
          <div className="col-md-9">
            <SearchListing />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
