import React from "react";
import { Link } from "react-router-dom";

const NewTractor = ({brands}) => {

  return (
    <>
      <div className="container-lg mt-5 py-4">
        <h2 className="text-center">Make a New Tractor</h2>
				<div className="row mt-4" >
        {brands.map((item) => (
            <ul className="make-list col-sm-2 list-unstyled new-car-list" key={item.id}>
              <li className="heading text-center">
                <Link to={`/brandDetails/${item.id}`}>
                  <img
                    alt="Mahindra"
                    height="100px"
                    width="100px"
                    loading="lazy"
                    src={item.active_image_path}
                  />
								<h5 className="nomargin">{item.title}</h5>
                </Link>
              </li>
            </ul>
        ))}
				</div>
      </div>
    </>
  );
};

export default NewTractor;
