import { combineReducers } from "redux";
import calenderReducer from "./calender/reducer";
import addScheduleReducer from "./addSchedule/reducer";

const rootReducer = combineReducers({
  calender: calenderReducer,
  addSchedule: addScheduleReducer,
});

export default rootReducer;
