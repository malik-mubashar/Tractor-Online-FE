import axios from "axios";

var Headers = JSON.parse(window.localStorage.getItem("headers")) || null;
Headers = {
  ...Headers,
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors"
};

class ProductCategories {
  getAllProductCategories = async () => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}categories_list`,
    })
      .then((result) => {
        return {
          error: false,
          data: result.data
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data
        };
      });
  };
}

export let PRODUCT_CATEGORY = new ProductCategories();
