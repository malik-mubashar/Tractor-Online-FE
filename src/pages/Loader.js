import React, { useContext, useState } from "react";

const Loader = (show) => {

  return (
    <div className={`loaderContainer ${show ? "d-none" : null}`}>
        <div className="lds-hourglass"></div>
        <div className="loaderText d-flex"><div className="mt-2">Loading</div> <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
    </div>
  );
};
export default Loader;
