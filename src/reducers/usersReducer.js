export const usersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_NEW_USERS_ATTEMPT":
      return { ...state, loading: payload.loading };
    case "GET_NEW_USERS_SUCCESS":
      return { ...state, users: payload.users, loading: payload.loading };
    case "GET_NEW_USERS_FAILURE":
      return {
        error: payload.error,
        loading: payload.loading,
        ...state,
      };
    default:
      return state;
  }
};
