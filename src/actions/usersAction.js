import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const GET_NEW_USERS_ATTEMPT = "GET_NEW_USERS_ATTEMPT";
const GET_NEW_USERS_SUCCESS = "GET_NEW_USERS_SUCCESS";
const GET_NEW_USERS_FAILURE = "GET_NEW_USERS_FAILURE";

export const getUsers = () => {
  const endpoint = "http://localhost:3001/users";
  return (dispatch) => {
    return axios(endpoint, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "GET, PUT, POST, DELETE, OPTIONS",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "same-origin",
    })
      .then((response) => {
        dispatch({
          type: GET_NEW_USERS_ATTEMPT,
          payload: {
            loading: true,
          },
        });
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: GET_NEW_USERS_SUCCESS,
          payload: {
            users: data,
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_NEW_USERS_FAILURE,
          payload: {
            error: "Error: Failed to fetch",
            loading: false,
          },
        });
      });
  };
};
