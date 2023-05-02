 import axios from "axios";

//no_of_record=5&page=2
var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;

class Dashboard {

  

	getAllNotification = async () => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;

    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}get_system_notifications?`,
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

export let dashboardApis = new Dashboard();
