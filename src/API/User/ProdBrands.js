import axios from "axios";

//no_of_record=5&page=2
var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;
Headers = {
  ...Headers,
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors",
};

class ProdBrands {
  deleteProdBrand = async (id) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brand_with_products/${id}`,
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
  updateProdBrand = async (prodBrandsState) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brand_with_products/${prodBrandsState.prodBrandId}`,
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
        title: prodBrandsState.title,
        status: prodBrandsState.status,
        description: prodBrandsState.description,
        link: prodBrandsState.link,
        icon: prodBrandsState.icon,
        products: prodBrandsState.products,
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
  addProdBrand = async (prodBrandsState) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brand_with_products`,
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
        title: prodBrandsState.title,
        status: prodBrandsState.status,
        description: prodBrandsState.description,
        link: prodBrandsState.link,
        icon: prodBrandsState.icon,
        products: prodBrandsState.products,
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

  getProdBrands = async (page, searchString, noOfRec) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brand_with_products`,
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
  getProdBrandsDetail = async (id) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brand_with_products/${id}`,
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

  getProdBrandsPdf = async (searchString) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brand_with_products.pdf?q%5Btitle_or_description_or_status_cont%5D=${searchString}`,
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

  getProdBrandsCsv = async (searchString) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brand_with_products.csv?q%5Btitle_or_description_or_status_cont%5D=${searchString}`,
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
}

export let prodBrandsApis = new ProdBrands();
