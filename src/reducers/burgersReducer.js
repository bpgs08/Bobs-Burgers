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
      return {
        ...state,
        burgers: [...state.burgers, payload.burgers],
        loading: payload.loading,
      };
    case "SET_NEW_BURGERS_FAILURE":
      return {
        error: payload.error,
        loading: payload.loading,
        ...state,
      };

    case "DELETE_BURGERS_ATTEMPT":
      return { ...state, loading: payload.loading };
    case "DELETE_BURGERS_SUCCESS":
      return {
        ...state,
        burgers: state.burgers.filter((x) => x.id !== payload.deletedBurger),
        loading: payload.loading,
      };
    case "DELETE_BURGERS_FAILURE":
      return {
        error: payload.error,
        loading: payload.loading,
        ...state,
      };

    case "UPDATE_BURGERS_ATTEMPT":
      return { ...state, loading: payload.loading };
    case "UPDATE_BURGERS_SUCCESS":
      const index = state.burgers.findIndex((acc) => {
        return acc.id === payload.updatedBurger.id;
      });
      const newBurgers = [...state.burgers];
      newBurgers[index] = payload.updatedBurger;
      return {
        ...state,
        burgers: newBurgers,
        loading: payload.loading,
      };
    case "UPDATE_BURGERS_FAILURE":
      return {
        error: payload.error,
        loading: payload.loading,
        ...state,
      };
    default:
      return state;
  }
};
