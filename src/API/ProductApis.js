import axios from "axios";

//no_of_record=5&page=2
var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;

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
  updateProduct = async (productsState) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}products/${productsState.productId}`,
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
        title: productsState.title,
        status: productsState.status,
        description: productsState.description,
        price: productsState.price,
        location: productsState.location,
        link: productsState.link,
        extra_fields: productsState.extra_fields,
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
	addProduct = async (productsState) => {
		debugger;
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}products`,
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
        title: productsState.title,
        status: productsState.status,
        description: productsState.description,
        price: productsState.price,
        location: productsState.location,
        link: productsState.link,
        extra_fields: productsState.extra_fields,
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

	getProducts = async (page, searchString, noOfRec) => {
		debugger;
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}products?page=${page}&q%5Btitle_or_status_or_description_or_location_cont%5D=${searchString}&no_of_record=${noOfRec}`,
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
}

export let productApis = new Products();
