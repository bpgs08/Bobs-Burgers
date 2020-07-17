export const burgersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_NEW_BURGERS_ATTEMPT":
      return { ...state, loading: payload.loading };
    case "GET_NEW_BURGERS_SUCCESS":
      return { ...state, burgers: payload.burgers, loading: payload.loading };
    case "GET_NEW_BURGERS_FAILURE":
      return {
        error: payload.error,
        loading: payload.loading,
        ...state,
      };
    case "SET_NEW_BURGERS_ATTEMPT":
      return { ...state, loading: payload.loading };
    case "SET_NEW_BURGERS_SUCCESS":
      return { ...state, burgers: payload.burgers, loading: payload.loading };
    case "SET_NEW_BURGERS_FAILURE":
      return {
        error: payload.error,
        loading: payload.loading,
        ...state,
      };
    default:
      return state;
  }
};
