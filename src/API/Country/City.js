import axios from "axios";
var Headers = JSON.parse(window.localStorage.getItem("headers")) || null;
Headers = {
  ...Headers,
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors"
};

class Cities {
  getAllCities = async () => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}cities?no_of_record=1000`,
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
  getAllCountry = async () => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}countries?no_of_record=1000`,
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

export let city = new Cities();
