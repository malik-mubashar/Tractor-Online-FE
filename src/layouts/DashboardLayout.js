import React, { useContext, useEffect, useState } from "react";
import { user } from "../API/User";
import Navigation from "../components/Navigation/Navigation";
import { RootContext } from "../context/RootContext";

export default function DashboardLayout(props) {
	const { currentUser,setShowLoader,setVerificationRequestedUsersCount } = useContext(RootContext);

  const [sideMenu, setSideMenu] = useState(true);
  function onSideMenu() {
    setSideMenu(!sideMenu);
	}
	useEffect(() => {
		getAllUsers(1,'',10)
	}, [])
	const getAllUsers = async (page,mainS,no_of_record) => {
		setShowLoader(true)
		const result = await user.getVerificationRequstedUsers(page,mainS,no_of_record);
		if (result.error === false) {

			console.log('asd', result.data.data.req_varified)
			setVerificationRequestedUsersCount(result.data.data.req_varified)
			setShowLoader(false)
		}
		if (result.error === true) {
			console.error(result.error)
			setShowLoader(false)
		}
		// const result2 = await user.updateAppUsers()
		// console.log('result2', result2)


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
