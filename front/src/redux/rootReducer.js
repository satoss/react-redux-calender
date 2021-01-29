import { combineReducers } from "redux";
import calenderReducer from "./calender/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import schedulesReducer from "./schedules/reducer";

const rootReducer = combineReducers({
  calender: calenderReducer,
  addSchedule: addScheduleReducer,
  schedules: schedulesReducer,
});

export default rootReducer;
