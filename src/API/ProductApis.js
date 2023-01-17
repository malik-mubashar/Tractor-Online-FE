import axios from "axios";

//no_of_record=5&page=2
const user = JSON.parse(window.localStorage.getItem("currentUser")) || null;
Headers = {
  ...Headers,
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors",
};

class Products {
  deleteProduct = async (id) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}products/${id}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
        mode: "no-cors",
      },
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };
updateProduct = async (productsState, formData) => {
	const tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}products/${productsState.productId}`,
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${tempUser.accessToken}`,
        client: `${tempUser.client}`,
        uid: `${tempUser.uid}`,
        mode: "no-cors",
      },
      data: formData,
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };
	addProduct = async (productsState, formData) => {
		const tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;

    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}products`,
      //formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${tempUser.accessToken}`,
        client: `${tempUser.client}`,
        uid: `${tempUser.uid}`,
        mode: "no-cors",
      },

      data: formData,
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };

	// this goes to index function of products in rails side
	getProducts = async (page, searchString, noOfRec,featured=true) => {
		const tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}products?page=${page}&q%5Btitle_or_status_or_description_or_city_or_location_cont%5D=${searchString}&no_of_record=${noOfRec}&featured=${featured}`,
      headers: {
        "Content-Type": "application/json;",
        "access-token": `${tempUser&&tempUser.accessToken}`,
        client: `${tempUser&&tempUser.client}`,
        uid: `${tempUser&&tempUser.uid}`,
        mode: "no-cors",
      },
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };

  favouriteAds = async (product_id, user_id) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}favourite_ads`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
        mode: "no-cors",
      },
      data: {
        product_id: product_id,
        user_id: user_id
      },
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };
  getfavouriteProducts = async () => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}favourite_products`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
        mode: "no-cors",
      },
     
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };
  getProductDetails = async (id) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}products/${id}`,
      headers: Headers,
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };
	getAllProducts = async (
		page = '1',
		noOfRec='1000000000',
    city = "nil",
    priceRangeTo = "nil",
    priceRangefrom = "nil",
    featured = "nil",
    title = "nil",
    brand = "nil",
    productCategoryId = "nil",
    status,
		user_id = 'nil',
		format = 'nil',
		searchString=''
	) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}get_products${format!=='nil'?format==='csv'?'.csv':'.pdf':''}?page=${page}&no_of_record=${noOfRec}&featured=${featured}&price_lt=${priceRangeTo}&price_gt=${priceRangefrom}&city=${city}&brand_id=${brand}&title=${title}&product_category_id=${productCategoryId}&status=${status}&user_id=${user_id}&search_string=${searchString}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${ user && user.accessToken}`,
        client: `${ user &&  user.client}`,
        uid: `${ user && user.uid}`,
        mode: "no-cors",
      },
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
	};
	searchProductsByTitle = async (searchValue) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}search_products_by_title?search_value=${searchValue}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        mode: "no-cors",
      },
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
	};
	
	getProductsForLandingPage = async ( ) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}get_products_for_landing_page`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${ user && user.accessToken}`,
        client: `${ user &&  user.client}`,
        uid: `${ user && user.uid}`,
        mode: "no-cors",
      },
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };

  getNewProducts = async (newly_launched, featured) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}get_products?product_type=${newly_launched}&featured=${featured}`,
      headers: Headers,
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };
  getUsedProducts = async (used, featured) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}get_products?product_type=${used}&featured=${featured}`,
      headers: Headers,
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };
  getPopularProducts = async (popular, featured) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}get_products?product_type=${popular}&featured=${featured}`,
      headers: Headers,
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };
  getFeaturedProducts = async (feature, featured) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}get_products?product_type=${feature}&featured=${featured}`,
      headers: Headers,
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };
  getUpcomingProducts = async (upcoming, featured) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}get_products?product_type=${upcoming}&featured=${featured}`,
      headers: Headers,
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
	};

	reportedAds = async (product_id, reason) => {
    
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}reported_ads`,
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
        mode: "no-cors",
      },
      

      data: {
        product_id: product_id,
        reason: reason
      },
      
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };

	
	//  if featured is true or false.All products will be returned in response. and from that response we can check the the value of featured
	// this goes to index function of products in rails side
  getProductsPdf = async (searchString,userId='nil') => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}products.pdf?q%5Btitle_or_status_or_description_or_location_cont%5D=${searchString}&featured=${'true'}&user_id=${userId}`,
      headers: {
        "Content-Type": "application/json;",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
        mode: "no-cors",
      },
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
  };

	// this goes to index function of products in rails side
  getProductsCsv = async (searchString,userId='nil') => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}products.csv?q%5Btitle_or_status_or_description_or_location_cont%5D=${searchString}&featured=${'true'}&user_id${userId}`,
      headers: {
        "Content-Type": "application/json;",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
        mode: "no-cors",
      },
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data,
        };
      });
	};

	importDataFormCsv = async (formData) => {
		const tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;

    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}import_data_form_csv`,
      headers: {
            "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${tempUser.accessToken}`,
        client: `${tempUser.client}`,
        uid: `${tempUser.uid}`,
        mode: "no-cors",
			},
			data:formData,
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.data,
        };
      });
  };
}

export let productApis = new Products();
