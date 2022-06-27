import axios from "axios";

//no_of_record=5&page=2
var user= JSON.parse(window.localStorage.getItem("currentUser")) || null;
 
class Country {
	deleteCountry = async (id) => {
		 
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}countries/${id}`,
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
	updateCountry = async (name, comments,id) => {
		 
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}countries/${id}`,
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
				name: name,
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
	addCountry = async (title, comments) => {
		debugger;
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}countries`,
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

	getCountries = async (page,searchString,noOfRec ) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}countries?page=${page}&q%5Bname_or_comments_cont%5D=${searchString}&no_of_record=${noOfRec}`,
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
	
	getCountriesPdf = async (page,searchString,noOfRec ) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}countries.pdf?q%5Bname_or_comments_cont%5D=${searchString}`,
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
	
	getCountriesCsv = async (page,searchString,noOfRec ) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}countries.csv?q%5Bname_or_comments_cont%5D=${searchString}`,
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

export let country = new Country();
