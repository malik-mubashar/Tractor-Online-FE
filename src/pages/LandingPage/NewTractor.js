import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewTractor = ({brands}) => {
  const [index2, setIndex2] = useState([1, 2, 3]);

  return (
    <>
      <div className="container-lg mt-5 py-4">
        <h2 className="text-center">Make a New Tractor</h2>
				<div className="row" >
        {brands.map((item) => (
            <ul className="make-list col-sm-2 list-unstyled new-car-list" key={item.id}>
              <li className="heading text-center">
                <Link to="/">
                  <img
                    alt="Mahindra"
                    height="65"
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
