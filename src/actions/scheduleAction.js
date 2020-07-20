import axios from "axios";

const GET_NEW_SCHEDULE_ATTEMPT = "GET_NEW_SCHEDULE_ATTEMPT";
const GET_NEW_SCHEDULE_SUCCESS = "GET_NEW_SCHEDULE_SUCCESS";
const GET_NEW_SCHEDULE_FAILURE = "GET_NEW_SCHEDULE_FAILURE";

export const getSchedule = () => {
  const endpoint = "http://localhost:3001/schedule";
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
          type: GET_NEW_SCHEDULE_ATTEMPT,
          payload: {
            loading: true,
          },
        });
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: GET_NEW_SCHEDULE_SUCCESS,
          payload: {
            schedule: data,
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_NEW_SCHEDULE_FAILURE,
          payload: {
            error: "Error: Failed to fetch",
            loading: false,
          },
        });
      });
  };
};

const GET_NEW_SCHEDULE_BY_ID_ATTEMPT = "GET_NEW_SCHEDULE_BY_ID_ATTEMPT";
const GET_NEW_SCHEDULE_BY_ID_SUCCESS = "GET_NEW_SCHEDULE_BY_ID_SUCCESS";
const GET_NEW_SCHEDULE_BY_ID_FAILURE = "GET_NEW_SCHEDULE_BY_ID_FAILURE";

export const getScheduleById = ({ todayId }) => {
  const endpoint = `http://localhost:3001/schedule/${todayId}`;
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
          type: GET_NEW_SCHEDULE_BY_ID_ATTEMPT,
          payload: {
            loading: true,
          },
        });
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: GET_NEW_SCHEDULE_BY_ID_SUCCESS,
          payload: {
            scheduleOfToday: data,
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_NEW_SCHEDULE_BY_ID_FAILURE,
          payload: {
            error: "Error: Failed to fetch",
            loading: false,
          },
        });
      });
  };
};
