import axios from "axios";

class User {
  signUp = async (email, password, confirmPassword,fullName) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}auth`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
				mode: "no-cors",
				
			},
			data: {
				email: email,
				password: password,
				password_confirmation: confirmPassword,
				name: fullName 
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

  login = async (email,password) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}auth/sign_in`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        mode: "no-cors",
			},
			data: {
				email: email,
				password: password,
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
}

export let user = new User();
