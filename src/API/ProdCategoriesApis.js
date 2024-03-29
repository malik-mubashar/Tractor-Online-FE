import axios from "axios";

//no_of_record=5&page=2
var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;
Headers = {
  ...Headers,
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors"
};

class ProdCategories {
  deleteProdCategory = async (id) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_categories/${id}`,
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
	updateProdCategory = async (prodCategoriesState) => {
		let formData = new FormData();
		formData.append("is_option", prodCategoriesState.is_option);
		formData.append("title", prodCategoriesState.title);
    formData.append("position", prodCategoriesState.position);
		formData.append("link", prodCategoriesState.link);
		formData.append("status", prodCategoriesState.status);
		formData.append("description", prodCategoriesState.description);
		if (prodCategoriesState.image) {
			formData.append("active_image", prodCategoriesState.image);
		}
		formData.append("brand_id", prodCategoriesState.brand_id);
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
   
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_categories/${prodCategoriesState.prodCategoryId}`,
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
          data: error.response.data,
        };
      });
  };
	addProdCategory = async (prodCategoriesState) => {
		let formData = new FormData();
		formData.append("is_option", prodCategoriesState.is_option);
		formData.append("title", prodCategoriesState.title);
    formData.append("position", prodCategoriesState.position);
		formData.append("link", prodCategoriesState.link);
		formData.append("status", prodCategoriesState.status);
		formData.append("description", prodCategoriesState.description===undefined?'':prodCategoriesState.description);
		formData.append("active_image", prodCategoriesState.image);
		formData.append("brand_id", prodCategoriesState.brand_id);
   
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_categories`,
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

	getProdCategories = async (page, searchString, noOfRec,isOption='nil') => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;

    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_categories?page=${page}&q%5B${isOption!=='nil'?'is_option_eq%5D=true':`title_or_status_or_link_or_description_cont%5D=${searchString}&no_of_record=${noOfRec}`}`,
      headers: {
        "Content-Type": "application/json;",
        "access-token": `${tempUser.accessToken}`,
        client: `${tempUser.client}`,
        uid: `${tempUser.uid}`,
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
  getProdCategoriesList = async (page, searchString, noOfRec) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_categories/categories_list`,
      headers: Headers
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
	
		getProdCategoriesPdf = async (searchString) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_categories.pdf?q%5Btitle_or_status_or_link_or_description_cont%5D=${searchString}`,
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
	
		getProdCategoriesCsv = async (searchString) => {
			// is_option=${isOption}	 
			return axios({
				method: "get",
				url: `${process.env.REACT_APP_API_LOCAL_PATH}product_categories.csv?q%5Btitle_or_status_or_link_or_description_cont%5D=${searchString}`,
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
	
		getAllProductCategories = async (is_option) => {
			return axios({
				method: "get",
				url: `${process.env.REACT_APP_API_LOCAL_PATH}categories_list?is_option=${is_option}`,
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

export let prodApi = new ProdCategories();
