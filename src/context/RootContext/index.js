import React, { useEffect, useState } from "react";

export const RootContext = React.createContext();

export default ({ children }) => {
	/*****getting values from local storage if any***************************/
	const prevUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;

	/*****setting values from local storage to constants*******************/
	const [currentUser, setCurrentUser] = useState(prevUser);
	const [signUpMessage, setSignUpMessage] = useState(false);
	const [showLoader, setShowLoader] = useState(false);
	const [landingPageSearchOptions, setLandingPageSearchOptions] = useState({});
	const [userProfilePicture, setUserProfilePicture] = useState(null);

	/*****************************************************************/

	/*****setting values to local storage*****************************/
	useEffect(() => {
		if (!currentUser) {
			localStorage.clear();
		} else {
			localStorage.removeItem("user");
			localStorage.setItem("user", JSON.stringify(currentUser));
		}
	}, [
		currentUser,
	]);
	/*******************************************************************/

	/*****all root context variables and function ********************/
	const defaultContext = {
		currentUser,
		setCurrentUser,
		signUpMessage,
		setSignUpMessage,
		showLoader,
		setShowLoader,
		landingPageSearchOptions,
		setLandingPageSearchOptions,
		userProfilePicture,
		setUserProfilePicture
	};
	/*******************************************************************/

	return (
		<RootContext.Provider value={defaultContext}>
			{children}
		</RootContext.Provider>
	);
};
