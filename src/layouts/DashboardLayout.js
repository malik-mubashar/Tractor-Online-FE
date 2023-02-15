import React, { useContext, useEffect, useState } from "react";
import { user } from "../API/User";
import Navigation from "../components/Navigation/Navigation";
import { RootContext } from "../context/RootContext";

export default function DashboardLayout(props) {
	const { currentUser,setShowLoader,setVerificationRequestedUsersCount } = useContext(RootContext);

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
