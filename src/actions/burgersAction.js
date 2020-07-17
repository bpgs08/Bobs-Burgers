import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const GET_NEW_BURGERS_ATTEMPT = "GET_NEW_BURGERS_ATTEMPT";
const GET_NEW_BURGERS_SUCCESS = "GET_NEW_BURGERS_SUCCESS";
const GET_NEW_BURGERS_FAILURE = "GET_NEW_BURGERS_FAILURE";

export const getBurgers = () => {
  const endpoint = "http://localhost:3001/burgers";
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
          type: GET_NEW_BURGERS_ATTEMPT,
          payload: {
            loading: true,
          },
        });
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: GET_NEW_BURGERS_SUCCESS,
          payload: {
            burgers: data,
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_NEW_BURGERS_FAILURE,
          payload: {
            error: "Error: Failed to fetch",
            loading: false,
          },
        });
      });
  };
};

const SET_NEW_BURGERS_ATTEMPT = "SET_NEW_BURGERS_ATTEMPT";
const SET_NEW_BURGERS_SUCCESS = "SET_NEW_BURGERS_SUCCESS";
const SET_NEW_BURGERS_FAILURE = "SET_NEW_BURGERS_FAILURE";

export const addBurger = () => {
  const endpoint = "http://localhost:3001/burgers";
  return (dispatch) => {
    return axios(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "GET, PUT, POST, DELETE, OPTIONS",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "same-origin",
      data: { id: uuidv4(), name: `Brian Burger`, createdByUser: 1 },
    })
      .then((response) => {
        dispatch({
          type: SET_NEW_BURGERS_ATTEMPT,
          payload: {
            loading: true,
          },
        });
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: SET_NEW_BURGERS_SUCCESS,
          payload: {
            burgers: data,
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: SET_NEW_BURGERS_FAILURE,
          payload: {
            error: "Error: Failed to fetch",
            loading: false,
          },
        });
      });
  };
};
