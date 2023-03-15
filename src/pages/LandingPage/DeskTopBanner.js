import React from "react";
import SearchAble from "./searchable";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const DeskTopBanner = ({ cities }) => {
	const history = useHistory();

  return (
    <>
      <div className="dashboard-carousel ml-auto m-5 card shadow">
        <div className="search-classified-text text-center">
          <h4 className="text-white mb-2">Tractors for Sale in Pakistan</h4>
          <p className="text-light" style={{fontSize:"1.1em"}}>
            With thousands of tractors to choose from, <br/>We're sure to have the
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
