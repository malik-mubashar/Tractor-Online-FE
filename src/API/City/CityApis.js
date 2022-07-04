import axios from "axios";

//no_of_record=5&page=2
var user= JSON.parse(window.localStorage.getItem("currentUser")) || null;
Headers = {
  ...Headers,
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors"
};
class City {
  getAllCities = async () => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}cities?no_of_record=10000000&page=1`,
      headers: Headers
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
  getPopularCity = async (popular) => {
    debugger
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}all_cities?city_type=${popular}`,
      headers: Headers
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
  getAllCity = async (popular) => {
    debugger
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}all_cities`,
      headers: Headers
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
	deleteCity = async (id) => {
		 
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}cities/${id}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
				"Access-Control-Allow-Origin": "*",
				'Access-Control-Allow-Headers': '*',
				"access-token": `${user.accessToken}`,
				"client": `${user.client}`,
				"uid":`${user.uid}`,
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
	updateCity = async (title, comments,id) => {
		 
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}cities/${id}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
				"Access-Control-Allow-Origin": "*",
				'Access-Control-Allow-Headers': '*',
				"access-token": `${user.accessToken}`,
				"client": `${user.client}`,
				"uid":`${user.uid}`,
				mode: "no-cors",
				
			},
			data: {
				title: title,
				comments: comments,
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
	addCity = async (title, comments,img) => {
		 
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}cities`,
      headers: {
        "Content-Type": "multipart/form-data",
				"Access-Control-Allow-Origin": "*",
				'Access-Control-Allow-Headers': '*',
				"access-token": `${user.accessToken}`,
				"client": `${user.client}`,
				"uid":`${user.uid}`,
				mode: "no-cors",
				
			},
			data: {
				title: title,
				comments: comments,
				active_image: img
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

	getCities = async (page,searchString,noOfRec ) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}cities?page=${page}&q%5Btitle_or_comments_cont%5D=${searchString}&no_of_record=${noOfRec}`,
      headers: {
        "Content-Type": "application/json;",
				"access-token": `${user.accessToken}`,
				"client": `${user.client}`,
				"uid":`${user.uid}`,
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
	
	getCitiesPdf = async (searchString ) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}cities.pdf?q%5Btitle_or_comments_cont%5D=${searchString}`,
      headers: {
        "Content-Type": "application/json;",
				"access-token": `${user.accessToken}`,
				"client": `${user.client}`,
				"uid":`${user.uid}`,
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
	getCitiesPdf = async (searchString ) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}cities.pdf?q%5Btitle_or_comments_cont%5D=${searchString}`,
      headers: {
        "Content-Type": "application/json;",
				"access-token": `${user.accessToken}`,
				"client": `${user.client}`,
				"uid":`${user.uid}`,
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
	
	getCitiesCsv = async (searchString ) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}cities.csv?q%5Btitle_or_comments_cont%5D=${searchString}`,
      headers: {
        "Content-Type": "application/json;",
				"access-token": `${user.accessToken}`,
				"client": `${user.client}`,
				"uid":`${user.uid}`,
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

export let city = new City();
