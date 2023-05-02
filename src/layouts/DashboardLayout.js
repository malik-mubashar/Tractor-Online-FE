import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";

export default function DashboardLayout(props) {

  const [sideMenu, setSideMenu] = useState(false);
  function onSideMenu() {
    setSideMenu(!sideMenu);
	}

  return (
    <>
			<Navigation onClick={() => onSideMenu()} />
        <div className={`main-content d-flex flex-column 
          ${
            sideMenu ? "" : "hide-sidemenu"
          }`}
        >
        {props.children}
      </div>
    </>
  );
}
