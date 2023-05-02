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
	const [systemData, setSystemData] = useState();
	const [verificationRequestedUsersCount, setVerificationRequestedUsersCount] = useState(0);
	var currency_list = [
    {label:"Afghan Afghani (AFA)",value:"AFA"},
    {label:"Albanian Lek (ALL)",value:"ALL"},
    {label:"Algerian Dinar (DZD)",value:"DZD"},
    {label:"Angolan Kwanza (AOA)",value:"AOA"},
    {label:"Argentine Peso (ARS)",value:"ARS"},
    {label:"Armenian Dram (AMD)",value:"AMD"},
    {label:"Aruban Florin (AWG)",value:"AWG"},
    {label:"Australian Dollar (AUD)",value:"AUD"},
    {label:"Azerbaijani Manat (AZN)",value:"AZN"},
    {label:"Bahamian Dollar (BSD)",value:"BSD"},
    {label:"Bahraini Dinar (BHD)",value:"BHD"},
    {label:"Bangladeshi Taka (BDT)",value:"BDT"},
    {label:"Barbadian Dollar (BBD)",value:"BBD"},
    {label:"Belarusian Ruble (BYR)",value:"BYR"},
    {label:"Belgian Franc (BEF)",value:"BEF"},
    {label:"Belize Dollar (BZD)",value:"BZD"},
    {label:"Bermudan Dollar (BMD)",value:"BMD"},
    {label:"Bhutanese Ngultrum (BTN)",value:"BTN"},
    {label:"Bitcoin (BTC)",value:"BTC"},
    {label:"Bolivian Boliviano (BOB)",value:"BOB"},
    {label:"Bosnia-Herzegovina Convertible Mark (BAM)",value:"BAM"},
    {label:"Botswanan Pula (BWP)",value:"BWP"},
    {label:"Brazilian Real (BRL)",value:"BRL"},
    {label:"British Pound Sterling (GBP)",value:"GBP"},
    {label:"Brunei Dollar (BND)",value:"BND"},
    {label:"Bulgarian Lev (BGN)",value:"BGN"},
    {label:"Burundian Franc (BIF)",value:"BIF"},
    {label:"Cambodian Riel (KHR)",value:"KHR"},
    {label:"Canadian Dollar (CAD)",value:"CAD"},
    {label:"Cape Verdean Escudo (CVE)",value:"CVE"},
    {label:"Cayman Islands Dollar (KYD)",value:"KYD"},
    {label:"CFA Franc BCEAO (XOF)",value:"XOF"},
    {label:"CFA Franc BEAC (XAF)",value:"XAF"},
    {label:"CFP Franc (XPF)",value:"XPF"},
    {label:"Chilean Peso (CLP)",value:"CLP"},
    {label:"Chinese Yuan (CNY)",value:"CNY"},
    {label:"Colombian Peso (COP)",value:"COP"},
    {label:"Comorian Franc (KMF)",value:"KMF"},
    {label:"Congolese Franc (CDF)",value:"CDF"},
    {label:"Costa Rican ColÃ³n (CRC)",value:"CRC"},
    {label:"Croatian Kuna (HRK)",value:"HRK"},
    {label:"Cuban Convertible Peso (CUC)",value:"CUC"},
    {label:"Czech Republic Koruna (CZK)",value:"CZK"},
    {label:"Danish Krone (DKK)",value:"DKK"},
    {label:"Djiboutian Franc (DJF)",value:"DJF"},
    {label:"Dominican Peso (DOP)",value:"DOP"},
    {label:"East Caribbean Dollar (XCD)",value:"XCD"},
    {label:"Egyptian Pound (EGP)",value:"EGP"},
    {label:"Eritrean Nakfa (ERN)",value:"ERN"},
    {label:"Estonian Kroon (EEK)",value:"EEK"},
    {label:"Ethiopian Birr (ETB)",value:"ETB"},
    {label:"Euro (EUR)",value:"EUR"},
    {label:"Falkland Islands Pound (FKP)",value:"FKP"},
    {label:"Fijian Dollar (FJD)",value:"FJD"},
    {label:"Gambian Dalasi (GMD)",value:"GMD"},
    {label:"Georgian Lari (GEL)",value:"GEL"},
    {label:"German Mark (DEM)",value:"DEM"},
    {label:"Ghanaian Cedi (GHS)",value:"GHS"},
    {label:"Gibraltar Pound (GIP)",value:"GIP"},
    {label:"Greek Drachma (GRD)",value:"GRD"},
    {label:"Guatemalan Quetzal (GTQ)",value:"GTQ"},
    {label:"Guinean Franc (GNF)",value:"GNF"},
    {label:"Guyanaese Dollar (GYD)",value:"GYD"},
    {label:"Haitian Gourde (HTG)",value:"HTG"},
    {label:"Honduran Lempira (HNL)",value:"HNL"},
    {label:"Hong Kong Dollar (HKD)",value:"HKD"},
    {label:"Hungarian Forint (HUF)",value:"HUF"},
    {label:"Icelandic KrÃ³na (ISK)",value:"ISK"},
    {label:"Indian Rupee (INR)",value:"INR"},
    {label:"Indonesian Rupiah (IDR)",value:"IDR"},
    {label:"Iranian Rial (IRR)",value:"IRR"},
    {label:"Iraqi Dinar (IQD)",value:"IQD"},
    {label:"Israeli New Sheqel (ILS)",value:"ILS"},
    {label:"Italian Lira (ITL)",value:"ITL"},
    {label:"Jamaican Dollar (JMD)",value:"JMD"},
    {label:"Japanese Yen (JPY)",value:"JPY"},
    {label:"Jordanian Dinar (JOD)",value:"JOD"},
    {label:"Kazakhstani Tenge (KZT)",value:"KZT"},
    {label:"Kenyan Shilling (KES)",value:"KES"},
    {label:"Kuwaiti Dinar (KWD)",value:"KWD"},
    {label:"Kyrgystani Som (KGS)",value:"KGS"},
    {label:"Laotian Kip (LAK)",value:"LAK"},
    {label:"Latvian Lats (LVL)",value:"LVL"},
    {label:"Lebanese Pound (LBP)",value:"LBP"},
    {label:"Lesotho Loti (LSL)",value:"LSL"},
    {label:"Liberian Dollar (LRD)",value:"LRD"},
    {label:"Libyan Dinar (LYD)",value:"LYD"},
    {label:"Lithuanian Litas (LTL)",value:"LTL"},
    {label:"Macanese Pataca (MOP)",value:"MOP"},
    {label:"Macedonian Denar (MKD)",value:"MKD"},
    {label:"Malagasy Ariary (MGA)",value:"MGA"},
    {label:"Malawian Kwacha (MWK)",value:"MWK"},
    {label:"Malaysian Ringgit (MYR)",value:"MYR"},
    {label:"Maldivian Rufiyaa (MVR)",value:"MVR"},
    {label:"Mauritanian Ouguiya (MRO)",value:"MRO"},
    {label:"Mauritian Rupee (MUR)",value:"MUR"},
    {label:"Mexican Peso (MXN)",value:"MXN"},
    {label:"Moldovan Leu (MDL)",value:"MDL"},
    {label:"Mongolian Tugrik (MNT)",value:"MNT"},
    {label:"Moroccan Dirham (MAD)",value:"MAD"},
    {label:"Mozambican Metical (MZM)",value:"MZM"},
    {label:"Myanmar Kyat (MMK)",value:"MMK"},
    {label:"Namibian Dollar (NAD)",value:"NAD"},
    {label:"Nepalese Rupee (NPR)",value:"NPR"},
    {label:"Netherlands Antillean Guilder (ANG)",value:"ANG"},
    {label:"New Taiwan Dollar (TWD)",value:"TWD"},
    {label:"New Zealand Dollar (NZD)",value:"NZD"},
    {label:"Nicaraguan CÃ³rdoba (NIO)",value:"NIO"},
    {label:"Nigerian Naira (NGN)",value:"NGN"},
    {label:"North Korean Won (KPW)",value:"KPW"},
    {label:"Norwegian Krone (NOK)",value:"NOK"},
    {label:"Omani Rial (OMR)",value:"OMR"},
    {label:"Pakistani Rupee (PKR)",value:"PKR"},
    {label:"Panamanian Balboa (PAB)",value:"PAB"},
    {label:"Papua New Guinean Kina (PGK)",value:"PGK"},
    {label:"Paraguayan Guarani (PYG)",value:"PYG"},
    {label:"Peruvian Nuevo Sol (PEN)",value:"PEN"},
    {label:"Philippine Peso (PHP)",value:"PHP"},
    {label:"Polish Zloty (PLN)",value:"PLN"},
    {label:"Qatari Rial (QAR)",value:"QAR"},
    {label:"Romanian Leu (RON)",value:"RON"},
    {label:"Russian Ruble (RUB)",value:"RUB"},
    {label:"Rwandan Franc (RWF)",value:"RWF"},
    {label:"Salvadoran ColÃ³n (SVC)",value:"SVC"},
    {label:"Samoan Tala (WST)",value:"WST"},
    {label:"Saudi Riyal (SAR)",value:"SAR"},
    {label:"Serbian Dinar (RSD)",value:"RSD"},
    {label:"Seychellois Rupee (SCR)",value:"SCR"},
    {label:"Sierra Leonean Leone (SLL)",value:"SLL"},
    {label:"Singapore Dollar (SGD)",value:"SGD"},
    {label:"Slovak Koruna (SKK)",value:"SKK"},
    {label:"Solomon Islands Dollar (SBD)",value:"SBD"},
    {label:"Somali Shilling (SOS)",value:"SOS"},
    {label:"South African Rand (ZAR)",value:"ZAR"},
    {label:"South Korean Won (KRW)",value:"KRW"},
    {label:"Special Drawing Rights (XDR)",value:"XDR"},
    {label:"Sri Lankan Rupee (LKR)",value:"LKR"},
    {label:"St. Helena Pound (SHP)",value:"SHP"},
    {label:"Sudanese Pound (SDG)",value:"SDG"},
    {label:"Surinamese Dollar (SRD)",value:"SRD"},
    {label:"Swazi Lilangeni (SZL)",value:"SZL"},
    {label:"Swedish Krona (SEK)",value:"SEK"},
    {label:"Swiss Franc (CHF)",value:"CHF"},
    {label:"Syrian Pound (SYP)",value:"SYP"},
    {label:"São Tomé and Príncipe Dobra (STD)",value:"STD"},
    {label:"Tajikistani Somoni (TJS)",value:"TJS"},
    {label:"Tanzanian Shilling (TZS)",value:"TZS"},
    {label:"Thai Baht (THB)",value:"THB"},
    {label:"Tongan Pa'anga (TOP)",value:"TOP"},
    {label:"Trinidad & Tobago Dollar (TTD)",value:"TTD"},
    {label:"Tunisian Dinar (TND)",value:"TND"},
    {label:"Turkish Lira (TRY)",value:"TRY"},
    {label:"Turkmenistani Manat (TMT)",value:"TMT"},
    {label:"Ugandan Shilling (UGX)",value:"UGX"},
    {label:"Ukrainian Hryvnia (UAH)",value:"UAH"},
    {label:"United Arab Emirates Dirham (AED)",value:"AED"},
    {label:"Uruguayan Peso (UYU)",value:"UYU"},
    {label:"US Dollar (USD)",value:"USD"},
    {label:"Uzbekistan Som (UZS)",value:"UZS"},
    {label:"Vanuatu Vatu (VUV)",value:"VUV"},
    {label:"Venezuelan BolÃvar (VEF)",value:"VEF"},
    {label:"Vietnamese Dong (VND)",value:"VND"},
    {label:"Yemeni Rial (YER)",value:"YER"},
    {label:"Zambian Kwacha (ZMK)",value:"ZMK"}
];
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
		setProfileInfo,
		currency_list,
		verificationRequestedUsersCount,
		setVerificationRequestedUsersCount,
		systemData,
		setSystemData
	};
	/*******************************************************************/

	return (
		<RootContext.Provider value={defaultContext}>
			{children}
		</RootContext.Provider>
	);
};
