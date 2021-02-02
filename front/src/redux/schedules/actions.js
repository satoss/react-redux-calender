export const SCHEDULE_ADD_ITEM = "SCHEDULE_ADD_ITEM";
export const SCHEDULE_FETCH_ITEM = "SCHEDULE_FETCH_ITEM";
export const SCHEDULE_SET_LOADING = "SCHEDULE_SET_LOADING";
export const SCHEDULE_DELETE_ITEM = "SCHEDULE_DELETE_ITEM";

export const scheduleAddItem = (payload) => ({
  type: SCHEDULE_ADD_ITEM,
  payload,
});

export const scheduleFetchItem = (payload) => ({
  type: SCHEDULE_FETCH_ITEM,
  payload,
});

export const scheduleSetLoading = () => ({
  type: SCHEDULE_SET_LOADING,
});

export const scheduleDeleteItem = (payload) => ({
  type: SCHEDULE_DELETE_ITEM,
  payload,
});
