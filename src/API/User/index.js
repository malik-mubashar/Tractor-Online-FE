import axios from "axios";

var Headers = JSON.parse(window.localStorage.getItem("headers")) || null;
Headers = {
  ...Headers,
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors"
};

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
  profile = async (profile, personal_id, formData) => {
    let personal_detail = personal_id
      ? {
          id: personal_id,
          city: profile.city,
          country: profile.country,
          dob: profile.birthDay,
          gender: profile.gender,
          username: profile.username,
          phone_number: profile.phone,
          language: profile.language
        }
      : {
          city: profile.city,
          country: profile.country,
          dob: profile.birthDay,
          gender: profile.gender,
          username: profile.username,
          phone_number: profile.phone,
          language: profile.language
        };

    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}auth`,
      headers: Headers,
      data: {
        // profile:formData,
        title: profile.title,
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
  findUser = async (id) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}app_users/${id}`,
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
}

export let user = new User();
