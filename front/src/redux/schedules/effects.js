import {
  scheduleFetchItem,
  scheduleSetLoading,
  scheduleAddItem,
  scheduleDeleteItem,
  scheduleAsyncFailure,
} from "./actions";
import { get, post, deleteReq } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncScheduleFetchItem = ({ month, year }) => async (dispatch) => {
  dispatch(scheduleSetLoading());

  try {
    const result = await get(`schedules?month=${month}&year=${year}`);
    const formatedSchedule = result.map((r) => formatSchedule(r));

    dispatch(scheduleFetchItem(formatedSchedule));
  } catch (err) {
    dispatch(scheduleAsyncFailure(err.message));
  }
};

export const asyncScheduleAddItem = (schedule) => async (dispatch) => {
  dispatch(scheduleSetLoading());

  try {
    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await post("schedules", body);

    const newSchedule = formatSchedule(result);
    dispatch(scheduleAddItem(newSchedule));
  } catch (err) {
    dispatch(scheduleAsyncFailure(err.message));
  }
};

export const asyncScheduleDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(scheduleSetLoading());

  try {
    await deleteReq(`schedules/${id}`);

    const currentSchedules = getState().schedules.items;
    const newSchedules = currentSchedules.filter((s) => s.id !== id);
    dispatch(scheduleDeleteItem(newSchedules));
  } catch (err) {
    dispatch(scheduleAsyncFailure(err.message));
  }
};
