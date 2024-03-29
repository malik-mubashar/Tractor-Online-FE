import axios from "axios";

//no_of_record=5&page=2
var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;
Headers = {
  ...Headers,
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors",
};

class Brands {
  deleteBrand = async (id) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brands/${id}`,
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

  getBrandDetailAndProducts = async (id) => {
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

	updateBrand = async (brandsState) => {
		let formData = new FormData();
		formData.append("title", brandsState.title);
		formData.append("status", brandsState.status);
		formData.append("link", brandsState.link);
		formData.append("description", brandsState.description);
		formData.append("icon", brandsState.icon);
		formData.append("product_category_id", brandsState.product_category_id);
		if (brandsState.image) {
			formData.append("active_image", brandsState.image);
		}
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brands/${brandsState.brandId}`,
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
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
          data: error.response.data,
        };
      });
  };
	addBrand = async (brandsState) => {
		let formData = new FormData();
		formData.append("title", brandsState.title);
		formData.append("status", brandsState.status);
		formData.append("link", brandsState.link);
		formData.append("description", brandsState.description);
		formData.append("icon", brandsState.icon);
		formData.append("product_category_id", brandsState.product_category_id);
		formData.append("active_image", brandsState.image);
		

    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brands`,
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
        mode: "no-cors",
			},
			data: formData,

      // data: {
      //   title: brandsState.title,
      //   status: brandsState.status,
      //   link: brandsState.link,
      //   description: brandsState.description,
      //   icon: brandsState.icon,
      //   active_image: brandsState.image,
      //   product_category_id: brandsState.product_category_id,
      // },
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

  getBrands = async (page, searchString, noOfRec) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brands?page=${page}&q%5Btitle_or_status_or_link_or_description_cont%5D=${searchString}&no_of_record=${noOfRec}`,
      headers: {
        "Content-Type": "application/json;",
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
  getBrandsList = async (page, searchString, noOfRec) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brands/categories_list`,
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

  getBrandsPdf = async (searchString) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brands.pdf?q%5Btitle_or_status_or_link_or_description_cont%5D=${searchString}`,
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

  getBrandsCsv = async (searchString) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}brands.csv?q%5Btitle_or_status_or_link_or_description_cont%5D=${searchString}`,
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

export let brandApis = new Brands();
