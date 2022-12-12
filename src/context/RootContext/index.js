import React, { useEffect, useState } from "react";

export const RootContext = React.createContext();

export default ({ children }) => {
	/*****getting values from local storage if any***************************/
	const prevUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
	const prevUserProfilePicture = JSON.parse(window.localStorage.getItem("userProfilePicture")) || null;
	// const prevWebsiteName = JSON.parse(window.localStorage.getItem("websiteName")) || null;

	/*****setting values from local storage to constants*******************/
	const [currentUser, setCurrentUser] = useState(prevUser);
	const [signUpMessage, setSignUpMessage] = useState(false);
	const [showLoader, setShowLoader] = useState(false);
	const [showPasswordModel, setShowPasswordModel] = useState(false);
	const [landingPageSearchOptions, setLandingPageSearchOptions] = useState({});
	const [userProfilePicture, setUserProfilePicture] = useState(prevUserProfilePicture);
	const [websiteName, setWebsiteName] = useState('');
	const [prodCategories, setProdCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [cities, setCities] = useState([]);
	const [popularCities, setPopularCities] = useState([]);
	const [brands, setBrands] = useState([]);
	const [profileInfo, setProfileInfo] = useState();

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
	// useEffect(() =>{
	// 	localStorage.setItem("websiteName", JSON.stringify(websiteName));

	// },[websiteName])
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
		setUserProfilePicture,
		showPasswordModel,
		setShowPasswordModel,
		websiteName,
		setWebsiteName,
		prodCategories,
		setProdCategories,
		products,
		setProducts,
		cities,
		setCities,
		popularCities,
		setPopularCities,
		brands,
		setBrands,
		profileInfo,
		setProfileInfo
	};
	/*******************************************************************/

	return (
		<RootContext.Provider value={defaultContext}>
			{children}
		</RootContext.Provider>
	);
};
