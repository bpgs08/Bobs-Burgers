import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { burgersReducer } from "./burgersReducer";
import { scheduleReducer } from "./scheduleReducer";

export const rootReducer = combineReducers({
  usersReducer,
  burgersReducer,
  scheduleReducer,
});
