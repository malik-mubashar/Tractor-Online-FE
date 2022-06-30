import axios from "axios";

//no_of_record=5&page=2
var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;

class CategoryBrands {
  deleteCategoryBrand = async (id) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}category_brands/${id}`,
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
  updateCategoryBrand = async (categoryBrandsState) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}category_brands/${categoryBrandsState.categoryBrandId}`,
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
        title: categoryBrandsState.title,
        status: categoryBrandsState.status,
				description: categoryBrandsState.description,
				active_image: categoryBrandsState.image,
				product_category_id: categoryBrandsState.product_category_id
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
	addCategoryBrand = async (categoryBrandsState) => {
		debugger;
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}category_brands`,
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
				title: categoryBrandsState.title,
        status: categoryBrandsState.status,
        description: categoryBrandsState.description,
				product_category_id: categoryBrandsState.product_category_id,
				active_image: categoryBrandsState.image,

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

	getCategoryBrands = async (page, searchString, noOfRec) => {
		debugger;
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}category_brands?page=${page}&q%5Btitle_or_description_or_status_cont%5D=${searchString}&no_of_record=${noOfRec}`,
			headers: {
				"Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
        mode: "no-cors",
			}
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
	
	getCategoryBrandsPdf = async (searchString) => {
		debugger;
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}category_brands.pdf?q%5Btitle_or_description_or_status_cont%5D=${searchString}`,
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
	
	getCategoryBrandsCsv = async (searchString) => {
		debugger;
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}category_brands.csv?q%5Btitle_or_description_or_status_cont%5D=${searchString}`,
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

export let categoryBrandsApis = new CategoryBrands();
