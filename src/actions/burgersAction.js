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

export const addBurger = ({ addedBurger }) => {
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
      data: { id: uuidv4(), ...addedBurger },
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

const DELETE_BURGERS_ATTEMPT = "DELETE_BURGERS_ATTEMPT";
const DELETE_BURGERS_SUCCESS = "DELETE_BURGERS_SUCCESS";
const DELETE_BURGERS_FAILURE = "DELETE_BURGERS_FAILURE";

export const deleteBurger = ({ deletedBurger }) => {
  const endpoint = `http://localhost:3001/burgers/${deletedBurger}`;
  return (dispatch) => {
    return axios(endpoint, {
      method: "DELETE",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "GET, PUT, POST, DELETE, OPTIONS",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "same-origin",
      data: { id: 25, name: `"Footss Feta-ish" Burger`, createdByUser: 5 },
    })
      .then((response) => {
        dispatch({
          type: DELETE_BURGERS_ATTEMPT,
          payload: {
            loading: true,
          },
        });
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: DELETE_BURGERS_SUCCESS,
          payload: {
            deletedBurger: deletedBurger,
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: DELETE_BURGERS_FAILURE,
          payload: {
            error: "Error: Failed to fetch",
            loading: false,
          },
        });
      });
  };
};

const UPDATE_BURGERS_ATTEMPT = "UPDATE_BURGERS_ATTEMPT";
const UPDATE_BURGERS_SUCCESS = "UPDATE_BURGERS_SUCCESS";
const UPDATE_BURGERS_FAILURE = "UPDATE_BURGERS_FAILURE";

export const updateBurger = ({ updatedBurger, newInfo }) => {
  const endpoint = `http://localhost:3001/burgers/${updatedBurger}`;
  return (dispatch) => {
    return axios(endpoint, {
      method: "PATCH",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "GET, PUT, POST, DELETE, OPTIONS",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "same-origin",
      data: newInfo,
    })
      .then((response) => {
        dispatch({
          type: UPDATE_BURGERS_ATTEMPT,
          payload: {
            loading: true,
          },
        });
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: UPDATE_BURGERS_SUCCESS,
          payload: {
            updatedBurger: data,
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: UPDATE_BURGERS_FAILURE,
          payload: {
            error: "Error: Failed to fetch",
            loading: false,
          },
        });
      });
  };
};
