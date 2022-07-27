import React, { useContext } from "react";
import { RootContext } from "../context/RootContext";

const Loader = () => {

  const { showLoader } = useContext(RootContext);

  return (
    <div className={`loaderContainer ${ showLoader ? "" : "d-none" }`}>
        <div className="lds-hourglass"></div>
        <div className="loaderText d-flex"><div className="mt-2">Loading</div> <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
    </div>
  );
};
export default Loader;
