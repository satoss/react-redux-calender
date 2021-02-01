import { combineReducers } from "redux";
import calenderReducer from "./calender/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import schedulesReducer from "./schedules/reducer";
import currentScheduleReducer from "./currentSchedule/reducer";

const rootReducer = combineReducers({
  calender: calenderReducer,
  addSchedule: addScheduleReducer,
  schedules: schedulesReducer,
  currentSchedule: currentScheduleReducer,
});

export default rootReducer;
