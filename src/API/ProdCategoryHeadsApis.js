import axios from "axios";

//no_of_record=5&page=2
var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;

class ProdCategoryHeads {
	deleteProdCategoryHead = async (id) => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_category_heads/${id}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
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
updateProdCategoryHead = async (prodSCategoryHeadsState) => {
	var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_category_heads/${prodSCategoryHeadsState.prodCategoryHeadId}`,
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${tempUser.accessToken}`,
        client: `${tempUser.client}`,
        uid: `${tempUser.uid}`,
        mode: "no-cors",
      },
			data: {
        title: prodSCategoryHeadsState.title,
        status: prodSCategoryHeadsState.status,
        link: prodSCategoryHeadsState.link,
        icon: prodSCategoryHeadsState.icon,
        description: prodSCategoryHeadsState.description,
				product_category_id: prodSCategoryHeadsState.product_category_id,
				active_image: prodSCategoryHeadsState.image,

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
	addProdCategoryHead = async (prodSCategoryHeadsState) => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_category_heads`,
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${tempUser.accessToken}`,
        client: `${tempUser.client}`,
        uid: `${tempUser.uid}`,
        mode: "no-cors",
      },
      data: {
        title: prodSCategoryHeadsState.title,
        status: prodSCategoryHeadsState.status,
        link: prodSCategoryHeadsState.link,
        icon: prodSCategoryHeadsState.icon,
        description: prodSCategoryHeadsState.description,
				product_category_id: prodSCategoryHeadsState.product_category_id,
				active_image: prodSCategoryHeadsState.image,

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

	getProdCategoryHeads = async (page, searchString, noOfRec) => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_category_heads?page=${page}&q%5Btitle_or_comments_cont%5D=${searchString}&no_of_record=${noOfRec}`,
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
	
	getProdCategoryHeadsPdf = async (searchString) => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_category_heads.pdf?q%5Btitle_or_comments_cont%5D=${searchString}`,
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
	
	getProdCategoryHeadsCsv = async (searchString) => {
		var tempUser = JSON.parse(window.localStorage.getItem("currentUser")) || null;
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}product_category_heads.csv?q%5Btitle_or_comments_cont%5D=${searchString}`,
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

export let prodCategoryHeadsApi = new ProdCategoryHeads();
