 import axios from "axios";

//no_of_record=5&page=2
var user = JSON.parse(window.localStorage.getItem("currentUser")) || null;

class UserRoles {
  deleteUserRole = async (id) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}users_roles/${id}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
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
  updateUserRole = async (rolesState) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}users_roles/${rolesState.roleId}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
        mode: "no-cors",
      },
			data: {
        title: rolesState.title,
        status: rolesState.status,
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
	addUserRole = async (rolesState) => {
		 
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}users_roles`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
        mode: "no-cors",
      },
			data: {
        user_id:user.data.id ,
        role_id: rolesState.role_id,
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

	getUserRoles = async (page, searchString, noOfRec) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}users_roles?page=${page}&q%5Btitle_or_comments_cont%5D=${searchString}&no_of_record=${noOfRec}`,
      headers: {
        "Content-Type": "application/json;",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
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
	
	getUserRolesPdf = async (searchString) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}users_roles.pdf?q%5Btitle_or_comments_cont%5D=${searchString}`,
      headers: {
        "Content-Type": "application/json;",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
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
	
	getUserRolesCsv = async (searchString) => {
		 
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_LOCAL_PATH}users_roles.csv?q%5Btitle_or_comments_cont%5D=${searchString}`,
      headers: {
        "Content-Type": "application/json;",
        "access-token": `${user.accessToken}`,
        client: `${user.client}`,
        uid: `${user.uid}`,
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

export let userRolesApis = new UserRoles();
