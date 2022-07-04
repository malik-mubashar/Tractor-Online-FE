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
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_categories/${prodCategoriesState.prodCategoryId}`,
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
        title: prodCategoriesState.title,
        status: prodCategoriesState.status,
        link: prodCategoriesState.link,
				description: prodCategoriesState.description,
				active_image: prodCategoriesState.image,

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
	addProdCategory = async (prodCategoriesState) => {
		 
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
      data: {
        title: prodCategoriesState.title,
        status: prodCategoriesState.status,
        link: prodCategoriesState.link,
        description: prodCategoriesState.description,
        active_image: prodCategoriesState.image,
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

	getProdCategories = async (page, searchString, noOfRec) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_categories?page=${page}&q%5Btitle_or_status_or_link_or_description_cont%5D=${searchString}&no_of_record=${noOfRec}`,
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
}

export let prodApi = new ProdCategories();
