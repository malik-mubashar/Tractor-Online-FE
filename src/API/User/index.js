import axios from "axios";

var Headers = JSON.parse(window.localStorage.getItem("headers")) || null;
Headers = {
  ...Headers,
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors"
};

const currentUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
console.log('currentUser', currentUser)


class User {
	 
  signUp = async (email, password, confirmPassword, fullName) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}auth`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        mode: "no-cors"
      },
      data: {
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        name: fullName
      }
    })
      .then((result) => {
        return {
					error: false,
          data: result.data,
          headers: result.headers
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data
        };
      });
  };

	login = async (email, password) => {
		 
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}auth/sign_in`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        mode: "no-cors"
      },
      data: {
        email: email,
        password: password
      }
    })
      .then((result) => {
        return {
          error: false,
          data: result.data,
          headers: result.headers
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data
        };
      });
  };
	profile = async (editProfile, personal_id,tempCurrentUser) => {
		 
    let personal_detail = personal_id
      ? {
				id: personal_id,
				
          city: editProfile.city,
          country: editProfile.country,
          dob: editProfile.birthDay,
          gender: editProfile.gender,
          username: editProfile.username,
          phone_number: editProfile.phone,
          language: editProfile.language
        }
      : {
          city: editProfile.city,
          country: editProfile.country,
          dob: editProfile.birthDay,
          gender: editProfile.gender,
          username: editProfile.username,
          phone_number: editProfile.phone,
          language: editProfile.language
        };

    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}auth`,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${tempCurrentUser.accessToken}`,
        client: `${tempCurrentUser.client}`,
        uid: `${tempCurrentUser.uid}`,
        mode: "no-cors",
			},
			data: {
				name: editProfile.name,
				personal_detail_attributes: personal_detail
      
      }
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
	uploadProfilePicture = async (picture) => {
		const currentUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;

		 
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}auth`,
			headers: {
				"Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${currentUser.accessToken}`,
        client: `${currentUser.client}`,
        uid: `${currentUser.uid}`,
        mode: "no-cors",
			},
      data: {
         profile:picture
      }
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
	findUser = async (tempCurrentUser) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}app_users/${tempCurrentUser.id}`,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${tempCurrentUser.accessToken}`,
        client: `${tempCurrentUser.client}`,
        uid: `${tempCurrentUser.uid}`,
        mode: "no-cors",
			}
    })
      .then((result) => {
        return {
          error: false,
          data: result.data.data
        };
      })
      .catch((error) => {
        return {
          error: true,
          data: error.response.data
        };
      });
  };
}

export let user = new User();
