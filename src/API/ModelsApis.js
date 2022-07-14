import axios from "axios";

//no_of_record=5&page=2
var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;
Headers = {
  ...Headers,
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors"
};

class Models {
  deleteModel = async (id) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}models/${id}`,
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
  updateModel = async (modelsState) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}models/${modelsState.modelId}`,
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
        title: modelsState.title,
        status: modelsState.status,
        link: modelsState.link,
				description: modelsState.description,
				active_image: modelsState.image,
				icon:modelsState.icon,
				product_id:modelsState.product_id,


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
	addModel = async (modelsState) => {
		 
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}models`,
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
        title: modelsState.title,
        status: modelsState.status,
        link: modelsState.link,
				description: modelsState.description,
				icon:modelsState.icon,
				active_image: modelsState.image,
				product_id:modelsState.product_id,

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

	getModels = async (page, searchString, noOfRec) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}models?page=${page}&q%5Btitle_or_status_or_link_or_description_cont%5D=${searchString}&no_of_record=${noOfRec}`,
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
  getModelsList = async (page, searchString, noOfRec) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}models/categories_list`,
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
	
		getModelsPdf = async (searchString) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}models.pdf?q%5Btitle_or_status_or_link_or_description_cont%5D=${searchString}`,
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
	
		getModelsCsv = async (searchString) => {
			 
			return axios({
				method: "get",
				url: `${process.env.REACT_APP_API_LOCAL_PATH}models.csv?q%5Btitle_or_status_or_link_or_description_cont%5D=${searchString}`,
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

export let modelApis = new Models();
