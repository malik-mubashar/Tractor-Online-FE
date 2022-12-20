import axios from "axios";

//no_of_record=5&page=2
var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;

class ProdSubCategories {
	deleteProdSubCategory = async (id) => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
		
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_sub_categories/${id}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
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
  updateProdSubCategory = async (prodSubCategoriesState) => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;

    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_sub_categories/${prodSubCategoriesState.prodCategoryId}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${tempUser.accessToken}`,
        client: `${tempUser.client}`,
        uid: `${tempUser.uid}`,
        mode: "no-cors",
      },
			data: {
        title: prodSubCategoriesState.title,
        status: prodSubCategoriesState.status,
        link: prodSubCategoriesState.link,
				description: prodSubCategoriesState.description,
				product_category_head_id:prodSubCategoriesState.product_category_head_id
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
	addProdSubCategory = async (prodSubCategoriesState) => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
		 
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_sub_categories`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${tempUser.accessToken}`,
        client: `${tempUser.client}`,
        uid: `${tempUser.uid}`,
        mode: "no-cors",
      },
      data: {
        title: prodSubCategoriesState.title,
        status: prodSubCategoriesState.status,
        link: prodSubCategoriesState.link,
        description: prodSubCategoriesState.description,
        product_category_head_id: prodSubCategoriesState.product_category_head_id,
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

	getProdSubCategories = async (page, searchString, noOfRec) => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;

    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_sub_categories?page=${page}&q%5Btitle_or_description_or_status_or_link_cont%5D=${searchString}&no_of_record=${noOfRec}`,
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
	
	getProdSubCategoriesPdf = async (searchString) => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_sub_categories.pdf?q%5Btitle_or_description_or_status_or_link_cont%5D=${searchString}`,
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
	
	getProdSubCategoriesCsv = async (searchString) => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_sub_categories.csv?q%5Btitle_or_description_or_status_or_link_cont%5D=${searchString}`,
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
}

export let prodSubApi = new ProdSubCategories();
