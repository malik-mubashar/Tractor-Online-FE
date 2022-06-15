import axios from "axios";


var user= JSON.parse(window.localStorage.getItem("currentUser")) || null;
 
class City {
	addCity = async (name, comment) => {
		debugger;
		console.log(user);
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}cites`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
				"Access-Control-Allow-Origin": "*",
				"access-token": `${user.accessToken}`,
				"client": `${user.client}`,
				"uid":`${user.uid}`,
				mode: "no-cors",
				
			},
			data: {
				name: name,
				comment: comment,
			}
    })
			.then((result) => {
				debugger;
        return {
          error: false,
          data: result.data,
        };
      })
			.catch((error) => {
				debugger;
        return {
          error: true,
          data: error.response.data,
        };
      });
  };


}

export let city = new City();
