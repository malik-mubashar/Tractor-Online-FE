import React from "react";
import SearchAble from "./searchable";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const DeskTopBanner = ({ cities }) => {
	const history = useHistory();

  return (
    <>
      <div className="dashboard-carousel">
        <div className="search-classified-text text-center generic-white">
          <h1 className="text-white">Tractors for Sale in Pakistan</h1>
          <p className="text-white">
            With thousands of tractors to choose from, we're sure to have the
            correct one for you.
          </p>
        </div>
        <SearchAble/>
        <Button onClick={()=>{history.push('/products/search')}} className="mt-2 mr-2 d-flex justify-content-center m-auto bg-transparent border border-white">
          {"Advanced Filter >>"}
        </Button>
      </div>
    </>
  );
};

export default DeskTopBanner;
