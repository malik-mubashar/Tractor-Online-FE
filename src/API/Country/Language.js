import axios from "axios";
var Headers = JSON.parse(window.localStorage.getItem("headers")) || null;
Headers = {
  ...Headers,
  "Access-Control-Allow-Origin": "*",
  mode: "no-cors"
};

class Languages {
  getAllLanguages = async () => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}languages`,
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

export let language = new Languages();
