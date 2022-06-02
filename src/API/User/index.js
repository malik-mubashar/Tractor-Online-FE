import axios from "axios";

class User {
  signUp = async (email, password, confirmPassword,fullName) => {
    return axios({
      method: "post",
      url: `http://localhost:3000/api/v1/auth`,
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
          data: JSON.stringify(error),
        };
      });
  };

  login = async (email, password) => {
    return axios({
      method: "post",
      url: `http://localhost:3000/api/v1/auth/sign_in?email=${email}&password=${password}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
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
          data: JSON.stringify(error),
        };
      });
  };
}

export let user = new User();
