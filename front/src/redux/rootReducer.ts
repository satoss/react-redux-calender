import { combineReducers } from 'redux';
import { calenderReducer, CalenderState } from './calender/reducer';
import { addScheduleReducer, AddScheduleState } from './addSchedule/reducer';
import { schedulesReducer, SchedulesState } from './schedules/reducer';
import {
  currentScheduleReducer,
  currentScheduleState,
} from './currentSchedule/reducer';

export type AppState = {
  calender: CalenderState;
  addSchedule: AddScheduleState;
  schedules: SchedulesState;
  currentSchedule: currentScheduleState;
};

const rootReducer = combineReducers<AppState>({
  calender: calenderReducer,
  addSchedule: addScheduleReducer,
  schedules: schedulesReducer,
  currentSchedule: currentScheduleReducer,
});

export default rootReducer;
