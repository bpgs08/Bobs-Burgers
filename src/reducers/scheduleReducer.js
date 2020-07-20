export const scheduleReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_NEW_SCHEDULE_ATTEMPT":
      return { ...state, loading: payload.loading };
    case "GET_NEW_SCHEDULE_SUCCESS":
      return { ...state, schedule: payload.schedule, loading: payload.loading };
    case "GET_NEW_SCHEDULE_FAILURE":
      return {
        error: payload.error,
        loading: payload.loading,
        ...state,
      };
    case "GET_NEW_SCHEDULE_BY_ID_ATTEMPT":
      return { ...state, loading: payload.loading };
    case "GET_NEW_SCHEDULE_BY_ID_SUCCESS":
      return {
        ...state,
        scheduleOfToday: payload.scheduleOfToday,
        loading: payload.loading,
      };
    case "GET_NEW_SCHEDULE_BY_ID_FAILURE":
      return {
        error: payload.error,
        loading: payload.loading,
        ...state,
      };
    default:
      return state;
  }
};
