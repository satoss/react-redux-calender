import {
  scheduleFetchItem,
  scheduleSetLoading,
  scheduleAddItem,
  scheduleDeleteItem,
} from "./actions";
import { get, post, deleteReq } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncScheduleFetchItem = ({ month, year }) => async (dispatch) => {
  dispatch(scheduleSetLoading());

  const result = await get(`schedules?month=${month}&year=${year}`);
  const formatedSchedule = result.map((r) => formatSchedule(r));

  dispatch(scheduleFetchItem(formatedSchedule));
};

export const asyncScheduleAddItem = (schedule) => async (dispatch) => {
  dispatch(scheduleSetLoading());

  const body = { ...schedule, date: schedule.date.toISOString() };
  const result = await post("schedules", body);

  const newSchedule = formatSchedule(result);
  dispatch(scheduleAddItem(newSchedule));
};

export const asyncScheduleDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(scheduleSetLoading());

  await deleteReq(`schedules/${id}`);

  const currentSchedules = getState().schedules.items;
  const newSchedules = currentSchedules.filter((s) => s.id !== id);
  dispatch(scheduleDeleteItem(newSchedules));
};
